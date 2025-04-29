// Create a new file: src/contexts/WishlistContext.tsx
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the context interface
interface WishlistContextType {
  wishlist: number[];
  toggleWishlist: (productId: string | number) => void;
  isInWishlist: (productId: string | number) => boolean;
}

// Create context with default values
const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggleWishlist: () => {},
  isInWishlist: () => false,
});

// Create the provider component
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("product-wishlist");
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
          console.log("Loaded wishlist from localStorage:", parsedWishlist);
        }
      } else {
        localStorage.setItem("product-wishlist", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
      localStorage.setItem("product-wishlist", JSON.stringify([]));
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

  const toggleWishlist = (productId: string | number) => {
    // Convert to number for consistency
    const numericId = typeof productId === 'string' ? parseInt(productId) : productId;
    
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(numericId)) {
        // Remove from wishlist
        return prevWishlist.filter(id => id !== numericId);
      } else {
        // Add to wishlist
        return [...prevWishlist, numericId];
      }
    });
  };

  const isInWishlist = (productId: string | number) => {
    const numericId = typeof productId === 'string' ? parseInt(productId) : productId;
    return wishlist.includes(numericId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Create a custom hook for easier context use
export const useWishlist = () => useContext(WishlistContext);