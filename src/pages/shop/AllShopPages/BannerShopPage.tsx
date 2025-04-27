import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Image } from "@/components/ui/image";
import CommonLayout from "@/layouts/common-layout";
import ShopRightWithBanner from "@/pages/ShopWithCategory/ShopRightWithBanner";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BannerShopPage() {
  const [expandedCategories, setExpandedCategories] = useState(true);
  const [expandedBrands, setExpandedBrands] = useState(true);
  const [expandedModels, setExpandedModels] = useState(true);
  const [expandedColors, setExpandedColors] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 50, max: 37500 });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );

  const categories = [
    { name: "Printers", count: 30 },
    { name: "Activated Carbon", count: 1 },
    { name: "Adapters", count: 2 },
    { name: "Air-Te Air", count: 1 },
    { name: "Aluminium", count: 4 },
    { name: "Amplifiers", count: 1 },
    { name: "Analog Watches", count: 3 },
    { name: "Appliances", count: 9 },
    { name: "Appliances Materials", count: 10 },
    { name: "Audio", count: 4 },
  ];

  const brands = [
    { name: "Braun", count: 16 },
    { name: "Cosmos", count: 7 },
    { name: "En", count: 12 },
    { name: "Lorem", count: 8 },
    { name: "Menos", count: 6 },
    { name: "Profusa", count: 9 },
    { name: "Xmos", count: 10 },
    { name: "Yelo", count: 10 },
    { name: "Zeuss", count: 7 },
  ];

  const models = [
    { name: "128GB", count: 4 },
    { name: "256GB", count: 3 },
    { name: "64GB", count: 3 },
  ];

  const colors = [
    { name: "Black", count: 8 },
    { name: "Blue", count: 2 },
    { name: "Grey", count: 7 },
    { name: "Orange", count: 5 },
    { name: "White", count: 3 },
  ];

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleCheckboxChange = (itemName: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <CommonLayout>
      <Breadcrumb className="mt-5" />
      <div className="mt-[70px] flex flex-col items-start lg:flex-row gap-9">
        <div className="filters">
          <div className="w-64  bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Category</h2>

            {/* Categories Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedCategories(!expandedCategories)}
              >
                <h3 className="font-medium">Category</h3>
                <span>{expandedCategories ? "−" : "+"}</span>
              </div>
              {expandedCategories && (
                <div className="mt-2 space-y-1">
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={!!selectedItems[item.name]}
                          onChange={() => handleCheckboxChange(item.name)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-500">({item.count})</span>
                    </div>
                  ))}
                  <button className="text-blue-500 text-sm mt-2">
                    VIEW MORE +
                  </button>
                </div>
              )}
            </div>

            {/* Brands Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedBrands(!expandedBrands)}
              >
                <h3 className="font-medium">Brand</h3>
                <span>{expandedBrands ? "−" : "+"}</span>
              </div>
              {expandedBrands && (
                <div className="mt-2 space-y-1">
                  {brands.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={!!selectedItems[item.name]}
                          onChange={() => handleCheckboxChange(item.name)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-500">({item.count})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Models Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedModels(!expandedModels)}
              >
                <h3 className="font-medium">Model</h3>
                <span>{expandedModels ? "−" : "+"}</span>
              </div>
              {expandedModels && (
                <div className="mt-2 space-y-1">
                  {models.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={!!selectedItems[item.name]}
                          onChange={() => handleCheckboxChange(item.name)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-500">({item.count})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Colors Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedColors(!expandedColors)}
              >
                <h3 className="font-medium">Color</h3>
                <span>{expandedColors ? "−" : "+"}</span>
              </div>
              {expandedColors && (
                <div className="mt-2 space-y-1">
                  {colors.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={!!selectedItems[item.name]}
                          onChange={() => handleCheckboxChange(item.name)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-500">({item.count})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
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
                    onChange={(e) => handlePriceChange(e, "min")}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="50"
                    max="37500"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange(e, "max")}
                    className="w-full"
                  />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">
                  FILTER
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Computers & Laptops</h3>
              <button className="w-full border border-blue-500 text-blue-500 py-2 rounded text-sm">
                SHOP NOW
              </button>
            </div>
            <div>
              <div className="relative">
                <div className="absolute flex flex-col justify-between p-5 gap-5">
                  <h3 className="text-lg font-semibold">
                    Computers <br />& Laptops
                  </h3>

                  <Link
                    to="#"
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <h3>SHOP NOW</h3> <FaChevronRight />
                  </Link>
                </div>

                <Image
                  className="rounded-[20px] mt-5"
                  src="/blog-sidebar-banner.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <ShopRightWithBanner />
      </div>
    </CommonLayout>
  );
}
