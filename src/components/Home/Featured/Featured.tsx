import { ProductCardForGrid } from "@/components/ui/cards/product-card-for-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const WISHLIST_STORAGE_KEY = "ecommerce-wishlist-data";
export default function Featured() {
  const [wishlist, setWishlist] = useState<number[]>([]);

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
  // Load wishlist on initial render only
  useEffect(() => {
    // Immediately try to load from localStorage
    const storedWishlist = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    console.log("Initial load from localStorage:", storedWishlist);

    if (storedWishlist) {
      try {
        const parsed = JSON.parse(storedWishlist);
        if (Array.isArray(parsed)) {
          setWishlist(parsed);
          console.log("Successfully loaded wishlist:", parsed);
        }
      } catch (err) {
        console.error("Failed to parse wishlist from localStorage", err);
      }
    }
  }, []); // Empty dependency array - runs once on mount

  // This function both updates state AND localStorage directly
  const toggleWishlist = (productId: string | number) => {
    const numericId = Number(productId);

    // Update state using function form
    setWishlist((prev) => {
      let newWishlist: number[];

      if (prev.includes(numericId)) {
        // Remove from wishlist
        newWishlist = prev.filter((id) => id !== numericId);
      } else {
        // Add to wishlist
        newWishlist = [...prev, numericId];
      }

      // Immediately update localStorage here, inside the state update function
      try {
        window.localStorage.setItem(
          WISHLIST_STORAGE_KEY,
          JSON.stringify(newWishlist)
        );
        console.log("Saved to localStorage:", newWishlist);
      } catch (err) {
        console.error("Failed to save wishlist to localStorage", err);
      }

      return newWishlist;
    });
  };

  // Simple function to check if a product is in wishlist
  const isInWishlist = (id: number | string) => {
    return wishlist.includes(Number(id));
  };

  return (
    <div className="w-[90%] mx-auto mb-[50px]">
      <h2 className="text-2xl font-semibold mb-5">Featured Products:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10">
        {products.map((product, index) => (
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
    </div>
  );
}
