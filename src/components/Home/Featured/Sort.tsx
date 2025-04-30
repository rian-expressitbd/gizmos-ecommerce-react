import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Sort() {
  const [selectedSort, setSelectedSort] = useState("Default sorting");
  const [showSorting, setShowSorting] = useState(false);
  const sortingOptions = [
    "Default sorting",
    "Sort by popularity",
    "Sort by latest",
    "Sort by price: high to low",
    "Sort by price: low to high",
  ];
  return (
    <div className="relative">
      <button
        className="flex items-center text-sm font-semibold justify-between w-[111px]"
        onClick={() => setShowSorting(!showSorting)}
      >
        <p>{selectedSort}</p>
        {showSorting ? (
          <FaChevronDown size={10} />
        ) : (
          <FaChevronRight size={10} />
        )}
      </button>

      {showSorting && (
        <div className="absolute right-0 mt-2 w-48 bg-[#F3F6FB] rounded-md shadow-lg z-50">
          <div className="py-1">
            {sortingOptions.map((option) => (
              <button
                key={option}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedSort === option
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedSort(option);
                  setShowSorting(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
