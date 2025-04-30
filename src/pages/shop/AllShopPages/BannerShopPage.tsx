import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CommonLayout from "@/layouts/common-layout";
import ShopRightWithBanner from "@/pages/ShopWithCategory/ShopRightWithBanner";
import { PriceFilter } from "./SmallComponents/SmallSubComponents/PriceFilter";
import { FilterSection } from "./SmallComponents/SmallSubComponents/FilterSection";
import { ShopBannerCard } from "./SmallComponents/SmallSubComponents/ShopBannerCard";
import { MobileFilterToggle } from "./SmallComponents/SmallSubComponents/MobileFilterToggle";
import { MobileFilterModal } from "./SmallComponents/SmallSubComponents/MobileFilterModal";

interface ItemType {
  name: string;
  count: number;
}

interface PriceRangeType {
  min: number;
  max: number;
}

const BannerShopPage: React.FC = () => {
  // Data that would typically come from API or props
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

  // State management
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    min: 50,
    max: 37500,
  });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Handle window resize to close mobile filters on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileFiltersOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile filters and body scroll
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
    document.body.style.overflow = mobileFiltersOpen ? "auto" : "hidden";
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleItemToggle = (itemName: string) => {
    setSelectedItems((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  // Reusable filters content
  const FiltersContent = () => (
    <>
      <h2 className="text-lg font-semibold mb-4">Category</h2>
      <FilterSection
        title="Category"
        items={categories}
        selectedItems={selectedItems}
        onItemToggle={handleItemToggle}
        showViewMore
      />
      <FilterSection
        title="Brand"
        items={brands}
        selectedItems={selectedItems}
        onItemToggle={handleItemToggle}
      />
      <FilterSection
        title="Model"
        items={models}
        selectedItems={selectedItems}
        onItemToggle={handleItemToggle}
      />
      <FilterSection
        title="Color"
        items={colors}
        selectedItems={selectedItems}
        onItemToggle={handleItemToggle}
      />
      <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
      <ShopBannerCard />
    </>
  );

  return (
    <CommonLayout>
      <Breadcrumb className="mt-5" />

      <MobileFilterToggle
        isOpen={mobileFiltersOpen}
        onToggle={toggleMobileFilters}
      />

      <div className="mt-[30px] lg:mt-[70px] flex flex-col items-start lg:flex-row gap-6 lg:gap-9">
        {/* Desktop Filters */}
        <div className="hidden lg:block">
          <div className="w-64 bg-white rounded-lg shadow-sm p-4">
            <FiltersContent />
          </div>
        </div>

        {/* Mobile Filters Modal */}
        <MobileFilterModal
          isOpen={mobileFiltersOpen}
          onClose={toggleMobileFilters}
        >
          <FiltersContent />
        </MobileFilterModal>

        {/* Main Content */}
        <div className="w-full px-4 lg:px-0">
          <ShopRightWithBanner />
        </div>
      </div>
    </CommonLayout>
  );
};

export default BannerShopPage;
