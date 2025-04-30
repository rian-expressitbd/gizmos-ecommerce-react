import { ProductCardForGrid } from "@/components/ui/cards/product-card-for-grid";
import { useWishlist } from "@/context/WishlistContext";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sort from "./Sort";
import Filter from "./Filter";

export default function Products() {
  const [wishlist, setWishlist] = useState<(string | number)[]>([]);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [showFilters, setShowFilters] = useState(false);

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

        <Sort />
      </div>

      {/* Filters Dropdown */}
      {showFilters && <Filter />}

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
