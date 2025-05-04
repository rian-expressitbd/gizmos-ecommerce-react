import { Image } from "@/components/ui/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { Link } from "react-router-dom";

type SetIsShopOpenProps = {
  setIsShopOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ShopDropdown({ setIsShopOpen }: SetIsShopOpenProps) {
  const shopDropdownRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={shopDropdownRef}
      className="absolute top-full left-[97px] mt-0 w-[90%] grid grid-cols-5 bg-white dark:text-white dark:bg-black shadow-xl border rounded-sm py-4 px-6 z-50 text-black"
      onMouseEnter={() => setIsShopOpen(true)}
      onMouseLeave={() => setIsShopOpen(false)}
    >
      <div>
        <h3 className="font-bold mb-2">Product Types</h3>
        <div className="flex flex-col gap-1 text-sm">
          <Link to="/shop/standard" className="hover:text-blue-500">
            Standard Product
          </Link>
          <Link to="/shop/accordion" className="hover:text-blue-500">
            Accordion Product
          </Link>
          <Link to="/shop/variable-a" className="hover:text-blue-500">
            Variable Product A
          </Link>
          <Link to="/shop/variable-b" className="hover:text-blue-500">
            Variable Product B
          </Link>
          <Link to="/shop/groupped" className="hover:text-blue-500">
            Groupped Product
          </Link>
          <Link to="/shop/external" className="hover:text-blue-500">
            External Product
          </Link>
          <Link to="/shop/cowntdown" className="hover:text-blue-500">
            Cowndown Product
          </Link>
          <Link to="/shop/dominidable" className="hover:text-blue-500">
            Dominidable Product
          </Link>
          <Link to="/shop/virtual" className="hover:text-blue-500">
            Virtual Product
          </Link>
          <Link to="/shop/new" className="hover:text-blue-500">
            New Product
          </Link>
          <Link to="/shop/sale" className="hover:text-blue-500">
            Sale Product
          </Link>
          <Link to="/shop/sold" className="hover:text-blue-500">
            Sold Product
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Shop Lists</h3>
        <div className="flex flex-col gap-1 text-sm">
          <Link to="/shop/standard-list" className="hover:text-blue-500">
            Standard
          </Link>
          <Link to="/shop/banner-list" className="hover:text-blue-500">
            Standard with Banner
          </Link>
          <Link to="/shop/category-icons" className="hover:text-blue-500">
            Category Icons
          </Link>
          <Link to="/shop/filter-top" className="hover:text-blue-500">
            Filter On Top
          </Link>
          <Link to="/shop/countdown-list" className="hover:text-blue-500">
            Countdown List
          </Link>
          <Link to="/shop/slider" className="hover:text-blue-500">
            Slider
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Shop Layouts</h3>
        <div className="flex flex-col gap-1 text-sm">
          <Link to="/shop/two-columns" className="hover:text-blue-500">
            Two Columns
          </Link>
          <Link to="/shop/three-columns" className="hover:text-blue-500">
            Three Columns
          </Link>
          <Link to="/shop/four-columns" className="hover:text-blue-500">
            Four Columns
          </Link>
          <Link to="/shop/four-columns-wide" className="hover:text-blue-500">
            Four Columns Wide
          </Link>
          <Link to="/shop/five-columns-wide" className="hover:text-blue-500">
            Five Columns Wide
          </Link>
          <Link to="/shop/six-columns-wide" className="hover:text-blue-500">
            Six Columns Wide
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Shop Pages</h3>
        <div className="flex flex-col gap-1 text-sm">
          <Link to="/account" className="hover:text-blue-500">
            My Account
          </Link>
          <Link to="/cart" className="hover:text-blue-500">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-blue-500">
            Checkout
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="bottom-[10px] right-[15px] absolute"
          src="/wide-dd-banner.jpg"
          rounded="lg"
          alt=""
        />
      </div>
    </div>
  );
}
