import { Image } from "@/components/ui/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import toast from 'react-hot-toast';

type Product = {
  id: string | number;
  category: string;
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
};

type ProductCardProps = {
  product: Product;
  index: number;
  onWishlistToggle: (productId: string | number) => void;
  isInWishlist: boolean;
};
const notify = () => toast('Item added to Wishlist');
export const ProductCardForGrid = ({
  product,
  onWishlistToggle,
  isInWishlist,
}: ProductCardProps) => {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onWishlistToggle(product.id);
    notify()
  };

  return (
    <div className="group border-[0.5px] rounded-[10px] p-3 h-full flex flex-col relative overflow-hidden transition-all duration-300">
      <div className="flex justify-between z-10 bg-white">
        <p className="text-xs text-gray-400">{product.category}</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleWishlistClick}
            className="focus:outline-none"
            aria-label={
              isInWishlist ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            {isInWishlist ? (
              <FaHeart className="text-red-500 cursor-pointer" />
            ) : (
              <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors" />
            )}
          </button>
          <TbArrowsDoubleNeSw className="cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>

      <div className="flex flex-col flex-grow transition-transform duration-300 group-hover:-translate-y-8">
        <Image
          src={product.image}
          className="mx-auto w-full h-[300px] object-contain my-auto"
          alt={product.title}
        />

        {product.isNew && (
          <div className="bg-[#F26300] px-2 py-1 rounded-[2px] w-[43px]">
            <p className="text-xs text-white">NEW</p>
          </div>
        )}

        <h3 className="text-sm font-bold mt-3">{product.title}</h3>
        <h1 className="text-lg mt-3">{product.price}</h1>
      </div>

      <button
        className="absolute flex justify-between items-center bottom-0 left-0 right-0 bg-[#2453D4] text-white py-3 
                  opacity-0 translate-y-full transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                  hover:bg-[#1d48b5] text-sm px-3"
      >
        <span>ADD TO CART</span>
        <FiShoppingCart className="ml-2" />
      </button>
    </div>
  );
};
