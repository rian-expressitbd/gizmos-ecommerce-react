import React from "react";
import { FaTimes } from "react-icons/fa";

interface MobileFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-full max-w-xs h-full overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button onClick={onClose} className="text-gray-500">
            <FaTimes size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
