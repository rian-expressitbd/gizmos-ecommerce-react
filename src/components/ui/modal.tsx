import { motion } from "framer-motion";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";
interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showFooter?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
  title,
  children,
  showFooter = true,
  onConfirm,
  confirmText = "Confirm",
  className,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isModalOpen) return null;

  return (
    <div className={twMerge("relative w-full bg-gray-500 z-50")}>
      <div className='fixed w-screen h-screen inset-0 flex items-center justify-center z-70 bg-opacity-50 bg-primary/50 dark:bg-gray-700/75 p-2'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 5, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={twMerge(
            "absolute inset-0 place-self-center self-center bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full md:w-2/3 md:mx-auto md:container",
            className
          )}
        >
          {/* Header */}
          <div className='relative flex justify-center items-center border-b p-2 bg-primary rounded-t-lg'>
            <h2 className='text-lg font-semibold justify-center text-white dark:text-gray-200'>{title}</h2>
            <Button
              title='close'
              variant='ghost'
              onClick={onClose}
              className='text-white hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer absolute inset-y-0 right-0 p-2'
            >
              <FiX size={20} />
            </Button>
          </div>

          {/* Body */}
          <div className='p-4 text-gray-700 bg-base-300 dark:text-gray-300 overflow-auto'>{children}</div>

          {/* Footer */}
          {showFooter && (
            <div className='flex justify-end gap-2 p-2 border-t '>
              <Button
                title='Close'
                variant='ghost'
                onClick={onClose}
                className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 cursor-pointer'
              >
                Close
              </Button>
              {onConfirm && (
                <Button
                  title={confirmText}
                  onClick={onConfirm}
                  className='px-4 py-2 bg-primary/90 text-white rounded-lg bg-primary hover:bg-primary cursor-pointer'
                >
                  {confirmText}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
