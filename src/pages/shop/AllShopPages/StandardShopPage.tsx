import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

import ShopWithCategoryRight from "@/pages/ShopWithCategory/ShopWithCategoryRight";
import {
  categories,
  brands,
  models,
  colors,
} from "./SmallComponents/StandardSopComponents/ShopFilters";
import { FilterSection } from "./SmallComponents/SmallSubComponents/FilterSection";
import { PriceFilter } from "./SmallComponents/SmallSubComponents/PriceFilter";
import { ShopBannerCard } from "./SmallComponents/SmallSubComponents/ShopBannerCard";
import { MobileFilterModal } from "./SmallComponents/SmallSubComponents/MobileFilterModal";
import { MobileFilterToggle } from "./SmallComponents/SmallSubComponents/MobileFilterToggle";

interface PriceRangeType {
  min: number;
  max: number;
}

const StandardShopPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    min: 50,
    max: 37500,
  });
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileFiltersOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
    document.body.style.overflow = mobileFiltersOpen ? "auto" : "hidden";
  };

  const FiltersContent = () => (
    <>
      <h2 className="text-lg font-semibold mb-4 ">Category</h2>
      <div className="dark:text-black">
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
        <PriceFilter
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
        />
        <ShopBannerCard />
      </div>
    </>
  );

  return (
    <>
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
          <ShopWithCategoryRight />
        </div>
      </div>
    </>
  );
};

export default StandardShopPage;
