import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone, type Accept } from "react-dropzone";
import { FiCheck, FiImage, FiUpload, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { FormFieldWrapper } from "./FormFieldWrapper";

export interface FileWithPreview {
  id: string;
  file?: File;
  preview: string;
  name: string;
  type: string;
  lastModified: number;
}

interface ExistingFile {
  id: string;
  url: string;
  name?: string;
}

interface FileUploadProps {
  id: string;
  label?: string;
  onChange: (files: FileList | FileWithPreview[] | null) => void;
  accept?: string | Accept;
  multiple?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  maxFiles?: number;
  showPreviews?: boolean;
  showSelection?: boolean;
  existingFiles?: ExistingFile[];
}

export const FileUpload = ({
  id,
  label,
  onChange,
  accept = "image/*",
  multiple = false,
  disabled = false,
  error,
  className,
  maxFiles = multiple ? Infinity : 1,
  showPreviews = true,
  showSelection = false,
  existingFiles = [],
}: FileUploadProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [selectedPreviews, setSelectedPreviews] = useState<string[]>([]);

  // Create stable preview URLs
  const createPreview = useCallback((file: File): FileWithPreview => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
      lastModified: file.lastModified,
    };
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.slice(0, maxFiles - files.length).map(createPreview);
      setFiles((prev) => [...prev, ...newFiles]);
    },
    [createPreview, files.length, maxFiles]
  );

  const normalizeAccept = (acceptProp?: string | Accept): Accept | undefined => {
    if (!acceptProp) return undefined;
    if (typeof acceptProp === "string") {
      const [mimeType, mimeSubtype] = acceptProp.split("/");
      return { [mimeType || "*"]: [mimeSubtype || "*"] };
    }
    return acceptProp;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: normalizeAccept(accept),
    multiple: multiple && maxFiles > 1,
    disabled,
  });

  const allFiles = useMemo(() => {
    const existing = existingFiles.map((file) => ({
      id: file.id,
      preview: file.url,
      name: file.name || "Existing file",
      type: "image/*", // Default type for existing files
      lastModified: Date.now(),
    }));
    return [...existing, ...files];
  }, [existingFiles, files]);

  const handleSelect = useCallback(
    (fileId: string) => {
      if (!showSelection) return;

      const file = allFiles.find((f) => f.id === fileId);
      if (!file) return;

      setSelectedPreviews((prev) =>
        prev.includes(file.preview)
          ? prev.filter((url) => url !== file.preview)
          : prev.length < maxFiles
          ? [...prev, file.preview]
          : prev
      );
    },
    [allFiles, maxFiles, showSelection]
  );

  const removeFile = useCallback(
    (fileId: string) => {
      setFiles((prev) => {
        const fileToRemove = prev.find((f) => f.id === fileId);
        if (fileToRemove) {
          URL.revokeObjectURL(fileToRemove.preview);
          return prev.filter((f) => f.id !== fileId);
        }
        return prev;
      });
      setSelectedPreviews((prev) => {
        const file = allFiles.find((f) => f.id === fileId);
        return file ? prev.filter((url) => url !== file.preview) : prev;
      });
    },
    [allFiles]
  );

  const removeExisting = useCallback(
    (fileId: string) => {
      setSelectedPreviews((prev) => {
        const file = existingFiles.find((f) => f.id === fileId);
        return file ? prev.filter((url) => url !== file.url) : prev;
      });
    },
    [existingFiles]
  );

  // Clean up object URLs
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  // Handle file changes
  useEffect(() => {
    if (files.length > 0 || selectedPreviews.length > 0) {
      if (showSelection) {
        const selectedFiles = files.filter((f) => selectedPreviews.includes(f.preview));
        onChange(selectedFiles.length > 0 ? selectedFiles : null);
      } else {
        try {
          const dataTransfer = new DataTransfer();
          files.forEach((file) => {
            if ("file" in file && file.file) {
              dataTransfer.items.add(file.file);
            }
          });
          onChange(dataTransfer.files.length > 0 ? dataTransfer.files : null);
        } catch (error) {
          console.error("Error creating FileList:", error);
          onChange(null);
        }
      }
    } else {
      onChange(null);
    }
  }, [files, selectedPreviews, showSelection, onChange]);

  const isImageFile = (file: FileWithPreview) => file.type.startsWith("image/");

  const fallbackImage = useMemo(
    () =>
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%239ca3af'%3EImage%3C/text%3E%3C/svg%3E",
    []
  );

  return (
    <FormFieldWrapper id={id} label={label} error={error} className={className}>
      <div className='space-y-4'>
        <div
          {...getRootProps()}
          className={twMerge(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400",
            disabled && "opacity-50 cursor-not-allowed bg-gray-100"
          )}
        >
          <input {...getInputProps()} id={id} />
          <div className='flex flex-col items-center justify-center space-y-2'>
            <FiUpload className='w-8 h-8 text-gray-400' />
            <p className='text-gray-600'>
              {isDragActive ? "Drop files here" : "Drag & drop files here, or click to browse"}
            </p>
            <p className='text-sm text-gray-500'>
              {typeof accept === "string"
                ? `Supported: ${accept === "*" ? "All file types" : accept}`
                : "Multiple file types supported"}
              {maxFiles > 1 && ` (Max ${maxFiles} files)`}
            </p>
          </div>
        </div>

        {showPreviews && allFiles.length > 0 && (
          <div className='space-y-4'>
            <h3 className='font-medium text-gray-700 mb-2'>{files.length > 0 ? "Uploaded Files" : "Existing Files"}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
              {allFiles.map((file) => (
                <div key={file.id} className='relative group'>
                  <div
                    className={twMerge(
                      "relative h-32 rounded-md overflow-hidden border-2",
                      showSelection && selectedPreviews.includes(file.preview)
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-transparent"
                    )}
                    onClick={() => handleSelect(file.id)}
                  >
                    {isImageFile(file) ? (
                      <img
                        src={file.preview}
                        className='w-full h-full object-cover'
                        alt={file.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackImage;
                        }}
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                        <FiImage className='w-8 h-8 text-gray-400' />
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if ("file" in file && file.file) {
                          removeFile(file.id);
                        } else {
                          removeExisting(file.id);
                        }
                      }}
                      className='absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                    >
                      <FiX size={14} />
                    </button>
                    {showSelection && selectedPreviews.includes(file.preview) && (
                      <div className='absolute top-1 left-1 bg-blue-500 text-white rounded-full p-1'>
                        <FiCheck size={14} />
                      </div>
                    )}
                  </div>
                  <p className='text-xs text-gray-500 truncate mt-1'>{file.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {showSelection && selectedPreviews.length > 0 && (
          <div className='mt-4 pt-4 border-t'>
            <h3 className='font-medium text-gray-700 mb-2'>
              Selected Files ({selectedPreviews.length}/{maxFiles})
            </h3>
            <div className='flex flex-wrap gap-3'>
              {selectedPreviews.map((url, index) => (
                <div key={`selected-${index}`} className='relative h-20 w-20'>
                  <img
                    src={url}
                    className='w-full h-full object-cover rounded border'
                    alt={`Selected ${index + 1}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                  <button
                    onClick={() => {
                      const file = allFiles.find((f) => f.preview === url);
                      if (file) {
                        if ("file" in file && file.file) {
                          removeFile(file.id);
                        } else {
                          removeExisting(file.id);
                        }
                      }
                    }}
                    className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1'
                  >
                    <FiX size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </FormFieldWrapper>
  );
};
