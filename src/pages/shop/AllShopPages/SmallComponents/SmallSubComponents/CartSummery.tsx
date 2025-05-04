import { ChevronRight } from "lucide-react";

interface CartSummaryProps {
  totalPrice: number;
  itemCount: number;
}

export default function CartSummery({
  totalPrice,
  itemCount,
}: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg  dark:text-black flex flex-col justify-between h-[302px]">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 justify-start">
        Your Current Cart
      </h2>
      <div className="mb-1 justify-center">
        <span className="text-xl md:text-2xl font-bold">{totalPrice}$</span>
        <p className="text-gray-600 mb-4 md:mb-6 text-sm ">
          for {itemCount} item(s)
        </p>
      </div>

      <button className="bg-blue-600 text-white w-full py-2 md:py-3 px-4 rounded-lg flex justify-center  gap-2 hover:bg-blue-700 transition-colors text-sm md:text-base">
        ADD TO CART
        <ChevronRight size={16} className="md:w-5 md:h-5" />
      </button>
    </div>
  );
}
