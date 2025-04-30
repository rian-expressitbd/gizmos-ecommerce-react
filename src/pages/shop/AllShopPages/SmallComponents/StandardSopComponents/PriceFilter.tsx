import React from "react";

interface PriceRangeType {
  min: number;
  max: number;
}

interface PriceFilterProps {
  priceRange: PriceRangeType;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>, type: "min" | "max") => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  priceRange,
  onPriceChange,
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Filter by Price</h3>
      <div className="space-y-2">
        <div className="text-sm">
          Price: {priceRange.min} - {priceRange.max}
        </div>
        <div className="flex space-x-2">
          <input
            type="range"
            min="50"
            max="37500"
            value={priceRange.min}
            onChange={(e) => onPriceChange(e, "min")}
            className="w-full"
          />
          <input
            type="range"
            min="50"
            max="37500"
            value={priceRange.max}
            onChange={(e) => onPriceChange(e, "max")}
            className="w-full"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">
          FILTER
        </button>
      </div>
    </div>
  );
};