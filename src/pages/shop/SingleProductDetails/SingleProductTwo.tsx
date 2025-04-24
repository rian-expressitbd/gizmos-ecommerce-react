import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { useState } from "react";
import { BsInfoSquare } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ImagesSlider from "./ImagesSlider";

export default function SingleProductTwo() {
  const [image, setImage] = useState("featured7.jpg");
  const [count, setCount] = useState(0);
  return (
    <div className=" mx-auto mt-[50px] mb-[50px] flex  flex-col xl:flex-row gap-32">
      <div className="flex flex-col gap-4">
        <Image
          src={`/${image}`}
          alt="monitor"
          className="border-gray-300 border-[0.5px] w-full  xl:w-[670px] "
        />
        <ImagesSlider setImage={setImage} />
      </div>

      <div className="w-full lg:w-[670px] ">
        <h1 className="text-lg lg:text-5xl leading-[1.5] font-semibold">
          4K Smart Monitor Vantablack Expo GPS-8377366J
        </h1>
        <h2 className="text-3xl mt-[50px]">$1,150</h2>
        <p className="text-sm mt-[50px] text-gray-500">
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel
          pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet.
          Ex error omnium interpretaris pro.
        </p>
        <div className="flex items-center gap-9 mt-[30px]">
          <div>
            <h4 className="text-md font-semibold">RAM Size:</h4>
          </div>

          <div className="flex items-center gap-4">
            <div
              tabIndex={0}
              className="border-gray-300 border-[0.5px] rounded-[10px] px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px]"
            >
              <h4 className="text-sm font-semibold">8 GB</h4>
            </div>
            <div
              tabIndex={0}
              className="border-gray-300 border-[0.5px] rounded-[10px] px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px]"
            >
              <h4 className="text-sm font-semibold">16 GB</h4>
            </div>
            <div
              tabIndex={0}
              className="border-gray-300 border-[0.5px] rounded-[10px] px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px]"
            >
              <h4 className="text-sm font-semibold">32 GB</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-9 mt-5">
          <h4 className="text-md font-semibold">Colors: </h4>
          <div className="flex items-center gap-3 ml-[1.5rem]">
            <div
              tabIndex={0}
              className="relative rounded-full border-[2px]  border-gray-300  p-5 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[18px] h-[18px]"
            >
              <div className="absolute white left-[1px] top-[4px] rounded-full bg-white border-white px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[26px] h-[26px]">
                <div className="absolute top-[3px] left-[6px] border-[1px] rounded-full w-[26px] h-[26px] bg-red-600 purple"></div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="relative rounded-full border-[2px]  border-gray-300  p-5 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[18px] h-[18px]"
            >
              <div className="absolute white left-[1px] top-[4px] rounded-full bg-white border-white px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[26px] h-[26px]">
                <div className="absolute top-[3px] left-[6px] border-[1px] rounded-full w-[26px] h-[26px] bg-blue-600 purple"></div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="relative rounded-full border-[2px]  border-gray-300  p-5 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[18px] h-[18px]"
            >
              <div className="absolute white left-[1px] top-[4px] rounded-full bg-white border-white px-4 p-3 cursor-pointer focus:border-blue-700 focus:border-[2px] w-[26px] h-[26px]">
                <div className="absolute top-[3px] left-[6px] border-[1px] rounded-full w-[26px] h-[26px] bg-purple-600 purple"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-[50px]">
          <div className="border-gray-300 border-[0.5px] rounded-[5px] px-6 py-5">
            {count}
          </div>
          <div className="flex flex-col justify-between">
            <FaChevronUp onClick={() => setCount(count + 1)} size={20} />
            <FaChevronDown onClick={() => setCount(count - 1)} size={20} />
          </div>
          <Button
            className="bg-[#2453D4] hover:bg-[#2453D4] px-4 py-2 flex gap-2 items-center h-[66px]"
            title="addToCartBtn"
          >
            <p className="text-sm text-white">Add To Cart</p>
            <FiShoppingCart />
          </Button>
        </div>
        <div className="flex items-center gap-3 mt-[30px] hover:text-blue-500 hover:cursor-pointer">
          <FaRegHeart className="text-sm" />
          <h3 className="text-sm ">Add To Wishlist</h3>
        </div>
        <div className="mt-[50px]">
          <h3 className="text-sm ">
            <span className="font-semibold">SKU:</span>
            11
          </h3>
          <div className="mt-3">
            <h3 className="text-sm ">
              <span className="font-semibold">CATEGORY:</span>
              GADGETS
            </h3>
          </div>
          <div className="mt-3">
            <h3 className="text-sm ">
              <span className="font-semibold">Tags:</span>
              Computers, Equipment
            </h3>
          </div>
          <div className="mt-[30px] bg-[#F3F6FB] flex items-start gap-3 p-6 rounded-[10px] w-full">
            <BsInfoSquare size={24} />
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="font-semibold">Need Help? </span>Call Us +001
                234 56 789
              </p>
              <p className="text-sm mt-3">Monday - Friday 09:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
