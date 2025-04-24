import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import CommonLayout from "@/layouts/common-layout";
import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  instock: boolean;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    title: "4K Smart Monitor Vantablack Expo GP5-8377364J",
    price: 1150,
    quantity: 1,
    image: "/featured1.jpg",
    instock: true,
  },
  {
    id: 2,
    title: "Multiline USB Cable iPhone/Tablet/Laptop",
    price: 42,
    quantity: 1,
    image: "/featured2.jpg",
    instock: true,
  },
  {
    id: 3,
    title: "Profess Tablet Q Series QW 55841 Professional",
    price: 550,
    quantity: 1,
    image: "/featured3.jpg",
    instock: true,
  },
  {
    id: 4,
    title: "Fractal Design SSD PW Tempered Glass Computer Case",
    price: 2790,
    quantity: 2,
    image: "/featured4.jpg",
    instock: true,
  },
];

const Wishlist: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Icons with their respective delays
  const icons = [
    { icon: <FaFacebook />, delay: 0 },
    { icon: <FaTwitter />, delay: 100 },
    { icon: <FaInstagram />, delay: 200 },
    { icon: <FaPinterest />, delay: 300 },
  ];

  return (
    <CommonLayout>
      <div className="mt-5">
        <Breadcrumb />
      </div>

      <div className="px-4 py-10">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

          {/* Hoverable container */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Share icon trigger */}
            <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <IoShareSocialOutline className="cursor-pointer" size={24} />
            </div>

            {/* Social icons dropdown */}
            <div
              className={`absolute right-0 top-full mt-2  bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div className="py-2 ">
                {icons.map((item, index) => (
                  <Link
                    key={index}
                    to="#"
                    className={`
                      flex items-center justify-center text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                      transition-all duration-300 
                      ${isHovered ? "opacity-100" : "opacity-0"} ${
                      index !== icons.length - 1 ? "xl:border-b" : ""
                    }
                    `}
                    style={{
                      transitionDelay: isHovered ? `${item.delay}ms` : "0ms",
                    }}
                  >
                    <span >{item.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              {initialCart.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-6 text-red-500 cursor-pointer">✕</td>
                  <td className="p-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover"
                    />
                    <span>{item.title}</span>
                  </td>
                  <td className="p-6">${item.price.toLocaleString()}</td>
                  <td className="p-6">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.instock
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.instock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="p-6">
                    <Button
                      title="update_cart"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      disabled={!item.instock}
                    >
                      Add to Cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Wishlist;
