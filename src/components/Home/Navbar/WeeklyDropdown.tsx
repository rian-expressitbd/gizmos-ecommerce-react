import { Image } from "@/components/ui/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { Link } from "react-router-dom";

type WeeklyDropdownProps = {
  isWeeklyDiscountOpen: boolean;
  setIsWeeklyDiscountOpen: Dispatch<SetStateAction<boolean>>;
};

export default function WeeklyDropdown({
  isWeeklyDiscountOpen,
  setIsWeeklyDiscountOpen,
}: WeeklyDropdownProps) {
  const weeklyDiscountDropdownRef = useRef<HTMLDivElement>(null);
  // Product data array
  const weeklyDiscountProducts = [
    {
      id: 1,
      category: "Gadgets",
      image: "/featured1.jpg",
      title: "4K Monitor",
      price: "$44",
    },
    {
      id: 2,
      category: "Gadgets",
      image: "/featured2.jpg",
      title: "Wireless Earbuds",
      price: "$59",
    },
    {
      id: 3,
      category: "Gadgets",
      image: "/featured3.jpg",
      title: "Smart Watch",
      price: "$89",
    },
    {
      id: 4,
      category: "Gadgets",
      image: "/featured4.jpg",
      title: "Bluetooth Speaker",
      price: "$35",
    },
    {
      id: 5,
      category: "Gadgets",
      image: "/featured5.jpg",
      title: "VR Headset",
      price: "$199",
    },
  ];
  return (
    isWeeklyDiscountOpen && (
      <div
        ref={weeklyDiscountDropdownRef}
        className="absolute mt-[1px] right-[6rem] bg-white dark:bg-black dark:text-white shadow-xl border rounded-sm py-6 px-4 z-50 text-black"
        onMouseEnter={() => setIsWeeklyDiscountOpen(true)}
        onMouseLeave={() => setIsWeeklyDiscountOpen(false)}
      >
        <div className="grid grid-cols-5 gap-4">
          {/* Mapped weekly discount products */}
          {weeklyDiscountProducts.map((product) => (
            <div
              key={product.id}
              className="group border-[0.5px] rounded-[10px] p-3 h-full flex flex-col relative overflow-hidden transition-all duration-300"
            >
              {/* Header with category and action icons */}
              <div className="flex justify-between z-10 bg-white">
                <p className="text-xs text-gray-400">{product.category}</p>
                <div className="flex flex-col gap-3">
                  <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors" />
                  <TbArrowsDoubleNeSw className="cursor-pointer hover:text-blue-500 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col flex-grow transition-transform duration-300 group-hover:-translate-y-8">
                {/* Product image */}
                <Image
                  src={product.image}
                  className="w-full h-[300px] object-cover object-center my-auto"
                  alt={product.title}
                />

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
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/weekly-discount"
            className="flex items-center text-[#2453D4]"
          >
            VIEW ALL <MdKeyboardArrowRight size={20} />
          </Link>
        </div>
      </div>
    )
  );
}
