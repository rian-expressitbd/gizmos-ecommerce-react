import { Image } from "@/components/ui/image";
import { FaRegHeart } from "react-icons/fa";
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
};

// ProductCard Component
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border-[0.5px] p-3 h-full flex flex-col ">
      {/* Header with category and action icons */}
      <div className="flex justify-between">
        <p className="text-xs text-gray-400">{product.category}</p>
        <div className="flex flex-col gap-3">
          <FaRegHeart className="cursor-pointer hover:text-red-500" />
          <TbArrowsDoubleNeSw className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Product image */}
      <Image
        src={product.image}
        className="mx-auto   w-full h-[324px] object-contain my-auto"
        alt={product.title}
      />

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
  );
};
