import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { FaChevronRight } from "react-icons/fa";

export const ShopBannerCard: React.FC = () => {
  return (
    <div className="border-t pt-4">
      <h3 className="font-medium mb-2">Computers & Laptops</h3>
      <button className="w-full border border-blue-500 text-blue-500 py-2 rounded text-sm mb-4">
        SHOP NOW
      </button>
      
      <div className="relative">
        <div className="absolute flex flex-col justify-between p-5 gap-5">
          <h3 className="text-lg font-semibold">
            Computers <br />& Laptops
          </h3>
          <Link
            to="#"
            className="flex items-center justify-between gap-4 text-sm"
          >
            <h3>SHOP NOW</h3> <FaChevronRight />
          </Link>
        </div>
        <Image
          className="rounded-[20px] w-full"
          src="/blog-sidebar-banner.jpg"
          alt="Computers and Laptops"
        />
      </div>
    </div>
  );
};