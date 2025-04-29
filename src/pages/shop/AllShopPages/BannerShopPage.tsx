import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Image } from "@/components/ui/image";
import CommonLayout from "@/layouts/common-layout";
import ShopRightWithBanner from "@/pages/ShopWithCategory/ShopRightWithBanner";
import React, { useState, useEffect } from "react";
import { FaChevronRight, FaFilter, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Define TypeScript interfaces
interface ItemType {
  name: string;
  count: number;
}

interface PriceRangeType {
  min: number;
  max: number;
}

interface SelectedItemsType {
  [key: string]: boolean;
}

const BannerShopPage: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<boolean>(true);
  const [expandedBrands, setExpandedBrands] = useState<boolean>(true);
  const [expandedModels, setExpandedModels] = useState<boolean>(true);
  const [expandedColors, setExpandedColors] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<PriceRangeType>({ min: 50, max: 37500 });
  const [selectedItems, setSelectedItems] = useState<SelectedItemsType>({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  // Handle window resize
  useEffect(() => {
    const handleResize = (): void => {
      // Close mobile filters if screen becomes large
      if (window.innerWidth >= 1024) {
        setMobileFiltersOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories: ItemType[] = [
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

  const brands: ItemType[] = [
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

  const models: ItemType[] = [
    { name: "128GB", count: 4 },
    { name: "256GB", count: 3 },
    { name: "64GB", count: 3 },
  ];

  const colors: ItemType[] = [
    { name: "Black", count: 8 },
    { name: "Blue", count: 2 },
    { name: "Grey", count: 7 },
    { name: "Orange", count: 5 },
    { name: "White", count: 3 },
  ];

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ): void => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleCheckboxChange = (itemName: string): void => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const toggleMobileFilters = (): void => {
    setMobileFiltersOpen(!mobileFiltersOpen);
    // If opening the filters, prevent scrolling on the body
    if (!mobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Filter component that's reused for both desktop and mobile
  const FiltersContent: React.FC = () => (
    <>
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
            className="rounded-[20px] mt-5 w-full"
            src="/blog-sidebar-banner.jpg"
            alt="Computers and Laptops"
          />
        </div>
      </div>
    </>
  );

  return (
    <CommonLayout>
      <Breadcrumb className="mt-5" />
      
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden flex justify-between items-center mt-5 px-4">
        <h1 className="text-xl font-bold">Shop</h1>
        <button 
          onClick={toggleMobileFilters}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          <FaFilter /> Filters
        </button>
      </div>

      <div className="mt-[30px] lg:mt-[70px] flex flex-col items-start lg:flex-row gap-6 lg:gap-9">
        {/* Desktop Filters */}
        <div className="hidden lg:block filters">
          <div className="w-64 bg-white rounded-lg shadow-sm p-4">
            <FiltersContent />
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="bg-white w-full max-w-xs h-full overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button 
                  onClick={toggleMobileFilters}
                  className="text-gray-500"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <FiltersContent />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="w-full px-4 lg:px-0">
          <ShopRightWithBanner />
        </div>
      </div>
    </CommonLayout>
  );
};

export default BannerShopPage;