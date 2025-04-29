import { ProductCardForGrid } from "@/components/ui/cards/product-card-for-grid";
import { useWishlist } from "@/context/WishlistContext";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {
  const [wishlist, setWishlist] = useState<(string | number)[]>([]);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [priceRange, setPriceRange] = useState(7500);
  const [selectedSort, setSelectedSort] = useState("Default sorting");

  const products = [
    {
      id: 1,
      category: "GADGETS",
      image: "/featured1.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 2,
      category: "GADGETS",
      image: "/featured2.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 3,
      category: "GADGETS",
      image: "/featured3.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 4,
      category: "GADGETS",
      image: "/featured4.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 5,
      category: "GADGETS",
      image: "/featured4.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 6,
      category: "GADGETS",
      image: "/featured5.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 7,
      category: "GADGETS",
      image: "/featured6.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 8,
      category: "GADGETS",
      image: "/featured7.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
    {
      id: 9,
      category: "GADGETS",
      image: "/featured8.jpg",
      title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
      price: "$1150",
      isNew: true,
    },
  ];

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

  const sortingOptions = [
    "Default sorting",
    "Sort by popularity",
    "Sort by latest",
    "Sort by price: high to low",
    "Sort by price: low to high",
  ];

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("product-wishlist");
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
        console.log("Loaded wishlist from localStorage:", parsedWishlist);
      } else {
        localStorage.setItem("product-wishlist", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("product-wishlist", JSON.stringify(wishlist));
      console.log("Saved wishlist to localStorage:", wishlist);
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error);
    }
  }, [wishlist]);

  return (
    <div className="w-[90%] mx-auto mb-[50px]">
      <h2 className="text-2xl font-semibold mb-5">Products</h2>
      <div className="mt-5 flex justify-between items-center">
        <button
          className="flex items-center text-sm font-semibold justify-between w-[55px]"
          onClick={() => setShowFilters(!showFilters)}
        >
          <p>Filters</p>
          {showFilters ? (
            <FaChevronDown size={10} />
          ) : (
            <FaChevronRight size={10} />
          )}
        </button>

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
      </div>

      {/* Filters Dropdown */}
      {showFilters && (
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
      )}

      <div className="mt-5 text-sm text-gray-500">
        Showing 1–{products.length} of {products.length} results
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 mt-5">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCardForGrid
              key={product.id}
              product={product}
              onWishlistToggle={toggleWishlist}
              isInWishlist={isInWishlist(product.id)}
              index={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
