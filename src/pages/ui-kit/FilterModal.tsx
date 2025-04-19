import { useState } from "react";
import { Filter } from "@/components/ui/filter"; // Adjust the import path as necessary

// Ensure that `FilterField` type has a strict type for `type`
const Filters = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  // Example filter fields
  const filterFields = [
    {
      key: "category",
      label: "Category",
      type: "select" as const, // Explicitly define the type here
      options: [
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "furniture", label: "Furniture" },
      ],
    },
    {
      key: "price",
      label: "Price Range",
      type: "checkbox" as const, // Explicitly define the type here
      options: [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
      ],
    },
    {
      key: "brand",
      label: "Brand",
      type: "radio" as const, // Explicitly define the type here
      options: [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "sony", label: "Sony" },
      ],
    },
  ];

  const handleFilter = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
    console.log("Selected Filters: ", newFilters); // Log the selected filters
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Product Filters</h1>

      <Filter filterFields={filterFields} onFilter={handleFilter} />

      <div className="mt-6">
        <h2 className="text-lg">Applied Filters:</h2>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Filters;
