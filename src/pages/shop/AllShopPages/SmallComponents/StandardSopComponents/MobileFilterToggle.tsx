import React from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

interface MobileFilterToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileFilterToggle: React.FC<MobileFilterToggleProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <div className="lg:hidden flex justify-between items-center mt-5 px-4">
      <h1 className="text-xl font-bold">Shop</h1>
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? <FaTimes /> : <FaFilter />} 
        {isOpen ? "Close" : "Filters"}
      </button>
    </div>
  );
};