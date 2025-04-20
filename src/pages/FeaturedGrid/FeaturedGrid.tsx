import { Image } from "@/components/ui/image";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsDoubleNeSw } from "react-icons/tb";

type Product = {
  id: number;
  category: string;
  image: string;
  title: string;
  price: string;
  isNew: boolean;
};

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
    image: "/featured5.jpg",
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
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
  {
    id: 8,
    category: "GADGETS",
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
  {
    id: 9,
    category: "GADGETS",
    image: "/featured5.jpg",
    title: "4K Smart Monitor Vantablack Expo GPS-8377366J",
    price: "$1150",
    isNew: true,
  },
];

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-[0.5px] p-3 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">{product.category}</p>
        <div className="flex flex-col gap-3">
          <FaRegHeart />
          <TbArrowsDoubleNeSw />
        </div>
      </div>
    
      <Image
        src={product.image}
        className="mx-auto w-full h-[324px] object-contain my-auto"
        alt=""
      />
      {product.isNew && (
        <div className="bg-[#F26300] px-2 py-1 rounded-[2px] w-[43px]">
          <p className="text-xs text-white">NEW</p>
        </div>
      )}
      <h3 className="text-sm font-bold mt-3">{product.title}</h3>
      <h1 className="text-lg mt-3">{product.price}</h1>
    </div>
  );
}

export default function FeaturedGrid() {
  return (
    <div className="mx-auto w-[80%] py-8">
      <h2 className="text-2xl font-bold mb-6">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-6 grid-rows-3 gap-6">
        {/* Map through products and apply special styling for the 3rd item */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={
              index === 2
                ? "col-span-2 row-span-2 h-full" // 3rd item spans 2 columns and 2 rows
                : "h-[400px]" // Other items have a fixed height
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
