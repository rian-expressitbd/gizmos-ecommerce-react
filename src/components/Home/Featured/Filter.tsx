import { useState } from "react";

export default function Filter() {
  const [priceRange, setPriceRange] = useState(7500);

  const categories = [
    { name: "3D Printers", count: 5 },
    { name: "Activated Carbon", count: 1 },
    { name: "Adapters", count: 2 },
    { name: "Alt-To-Air", count: 1 },
    { name: "Aluminium", count: 4 },
    { name: "Amplifiers", count: 1 },
    { name: "Analog Wordbar", count: 3 },
    { name: "Appliances", count: 9 },
    { name: "Appliances Materials", count: 10 },
    { name: "Audio", count: 4 },
  ];

  const brands = [
    { name: "BrandBaan", count: 10 },
    { name: "Cosmos", count: 7 },
    { name: "Ein", count: 12 },
    { name: "Learn", count: 8 },
    { name: "Menus", count: 9 },
    { name: "Profiles", count: 9 },
    { name: "Xinox", count: 10 },
    { name: "Yibo", count: 10 },
    { name: "Zanis", count: 7 },
  ];

  const colors = [
    { name: "Black", count: 8 },
    { name: "Blue", count: 2 },
    { name: "Gray", count: 7 },
    { name: "Orange", count: 9 },
    { name: "White", count: 2 },
  ];
  return (
    <div className="mt-5 p-5 bg-[#F3F6FB] shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Filter</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center">
                <input
                  type="checkbox"
                  id={`cat-${category.name}`}
                  className="mr-2"
                />
                <label htmlFor={`cat-${category.name}`}>
                  {category.name}{" "}
                  <span className="text-gray-500">({category.count})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand.name}`}
                  className="mr-2"
                />
                <label htmlFor={`brand-${brand.name}`}>
                  {brand.name}{" "}
                  <span className="text-gray-500">({brand.count})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Color</h4>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={color.name} className="flex items-center">
                <input
                  type="checkbox"
                  id={`color-${color.name}`}
                  className="mr-2"
                />
                <label htmlFor={`color-${color.name}`}>
                  {color.name}{" "}
                  <span className="text-gray-500">({color.count})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Filter by Price</h4>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="7500"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-sm">Price: $0 - ${priceRange}</p>
          </div>
        </div>
      </div>

      <button className="text-sm font-medium">VIEW MORE</button>
    </div>
  );
}
