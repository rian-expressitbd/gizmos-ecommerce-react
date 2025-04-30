import React, { useState } from "react";

interface ItemType {
  name: string;
  count: number;
}

interface FilterSectionProps {
  title: string;
  items: ItemType[];
  selectedItems: Record<string, boolean>;
  onItemToggle: (itemName: string) => void;
  defaultExpanded?: boolean;
  showViewMore?: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  selectedItems,
  onItemToggle,
  defaultExpanded = true,
  showViewMore = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-medium">{title}</h3>
        <span>{expanded ? "−" : "+"}</span>
      </div>
      {expanded && (
        <div className="mt-2 space-y-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={!!selectedItems[item.name]}
                  onChange={() => onItemToggle(item.name)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{item.name}</span>
              </div>
              <span className="text-gray-500">({item.count})</span>
            </div>
          ))}
          {showViewMore && (
            <button className="text-blue-500 text-sm mt-2">
              VIEW MORE +
            </button>
          )}
        </div>
      )}
    </div>
  );
};