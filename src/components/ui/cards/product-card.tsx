import { Image } from "@/components/ui/image";
import CountDown from "@/pages/BestSellers/CountDown";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";

// Type definitions
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
};

// ProductCard Component
export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <div className="group border-[0.5px] rounded-[10px] p-3 h-full flex flex-col  relative overflow-hidden transition-all duration-300">
      {/* Header with category and action icons - fixed position */}
      <div className="flex justify-between z-10 bg-white">
        <p className="text-xs text-gray-400">{product.category}</p>
        <div className="flex flex-col gap-3">
          <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors" />
          <TbArrowsDoubleNeSw className="cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>

      {/* Product content that moves up on hover */}
      {index == 2 ? (
        <div>
          <div className="text-sm text-white text-center w-[80px] rounded-[10px] bg-blue-600 p-4">
            <h4>-20%</h4>
          </div>
          <div className="text-sm text-white text-center w-[80px] rounded-[10px] bg-blue-600 p-4 mt-2">
            <h4>Save</h4>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col flex-grow transition-transform duration-300 group-hover:-translate-y-8">
        {/* Product image */}
        <Image
          src={product.image}
          className="mx-auto w-full h-[300px] object-contain my-auto"
          alt={product.title}
        />
        {index == 2 ? <CountDown /> : ""}

        {/* New badge */}
        {product.isNew && (
          <div className="bg-[#F26300] px-2 py-1 rounded-[2px] w-[43px]">
            <p className="text-xs text-white">NEW</p>
          </div>
        )}

        {/* Product title and price */}
        <h3 className="text-sm font-bold mt-3">{product.title}</h3>
        <h1 className="text-lg mt-3">{product.price}</h1>
      </div>

      {/* Add to Cart button that slides up on hover */}
      <button
        className="absolute flex justify-between bottom-0 left-0 right-0 bg-[#2453D4] text-white py-3 
                  opacity-0 translate-y-full transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                  hover:bg-[#2453D4] text-sm p-3"
      >
        <p>ADD TO CART</p>
        <FiShoppingCart />
      </button>
    </div>
  );
};
