import { ProductCard } from "@/components/ui/cards/product-card";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
// import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import Paginations from "../ui-kit/Pagination";

import ShopWithCategoryIcons from "./ShopWithCategoryIcons";

export default function ShopRightWithIcons() {
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
  return (
    <div>
      {/* <div className="relative">
        <Image
          rounded="md"
          className=""
          src="/shop-banner.jpg"
          alt="shop-banner"
        />
        <div className="flex flex-col justify-between absolute top-[19px]  p-12 h-full">
          <div>
            <h3 className="text-white font-semibold text-2xl">
              VR Gaming With Friends
            </h3>
          </div>
          <div className="">
            <h6 className="text-xs text-white font-semibold">WEEKEND SALE</h6>
            <h1 className="text-4xl text-white mt-3">20% OFF</h1>
          </div>
        </div>
      </div> */}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <ShopWithCategoryIcons />
        </div>

        <h2 className="text-2xl font-semibold">Electronics & Appliances</h2>
        <div className="flex justify-end">
          <Dropdown className="border-[1px] border-gray-400 p-4 rounded-[10px]">
            <DropdownTrigger>
              <div className="flex items-center">
                <h3 className="text-sm font font-semibold">Default Sorting</h3>
              </div>
            </DropdownTrigger>
            <DropdownContent className="p-1 w-full min-w-[193px] py-3">
              <p className="text-sm font font-semibold">Default Sorting</p>
              <li className="list-none mt-2">Sort By Popularity</li>
              <li className="mt-2 list-none">Sort By Latest</li>
              <li className="mt-2 list-none">Sort By Price High to Low</li>
              <li className="mt-2 list-none">Sort By Price Low to High</li>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 mt-5 mb-5">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`}>
            {" "}
            <ProductCard index={index} product={product} />
          </Link>
        ))}
      </div>
      <div className="mb-5">
        <Paginations />
      </div>
    </div>
  );
}
