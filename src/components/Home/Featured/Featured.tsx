import { ProductCardForGrid } from "@/components/ui/cards/product-card-for-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WISHLIST_STORAGE_KEY = "ecommerce-wishlist-data";
const INITIAL_VISIBLE_COUNT = 8;
const LOAD_INCREMENT = 4;

export default function Featured() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const products = [
    { id: 1, category: "GADGETS", image: "/featured1.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 2, category: "GADGETS", image: "/featured2.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 3, category: "GADGETS", image: "/featured3.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 4, category: "GADGETS", image: "/featured4.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 5, category: "GADGETS", image: "/featured4.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 6, category: "GADGETS", image: "/featured5.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 7, category: "GADGETS", image: "/featured6.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 8, category: "GADGETS", image: "/featured7.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
    { id: 9, category: "GADGETS", image: "/featured8.jpg", title: "4K Smart Monitor Vantablack Expo GPS-8377366J", price: "$1150", isNew: true },
  ];

  useEffect(() => {
    const storedWishlist = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (storedWishlist) {
      try {
        const parsed = JSON.parse(storedWishlist);
        if (Array.isArray(parsed)) setWishlist(parsed);
      } catch (err) {
        console.error("Failed to parse wishlist from localStorage", err);
      }
    }
  }, []);

  const toggleWishlist = (productId: string | number) => {
    const numericId = Number(productId);
    setWishlist((prev) => {
      const newWishlist = prev.includes(numericId)
        ? prev.filter((id) => id !== numericId)
        : [...prev, numericId];

      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  const isInWishlist = (id: number | string) => wishlist.includes(Number(id));

  const handleLoadMore = () => setVisibleCount((prev) => prev + LOAD_INCREMENT);
  const handleLoadLess = () => setVisibleCount((prev) => Math.max(INITIAL_VISIBLE_COUNT, prev - LOAD_INCREMENT));

  return (
    <div className="w-[90%] mx-auto mb-[50px]">
      <h2 className="text-2xl font-semibold mb-5">Featured Products:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10">
        {products.slice(0, visibleCount).map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCardForGrid
              product={product}
              onWishlistToggle={toggleWishlist}
              isInWishlist={isInWishlist(product.id)}
              index={index}
            />
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 text-center space-x-4">
        {visibleCount < products.length && (
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-black dark:bg-white dark:hover:bg-white dark:text-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Load More
          </button>
        )}

        {visibleCount > INITIAL_VISIBLE_COUNT && (
          <button
            onClick={handleLoadLess}
            className="px-6 py-2 bg-black dark:bg-white dark:hover:bg-white dark:text-black text-white rounded  transition-colors"
          >
            Load Less
          </button>
        )}
      </div>
    </div>
  );
}
