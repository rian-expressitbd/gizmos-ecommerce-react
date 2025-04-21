import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { Separator } from "@/components/ui/separator";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="w-[80%] mx-auto mt-[30px] mb-[30px] z-50">
        <div className="flex items-center">
          <div className="logo flex gap-[50px] items-center">
          <h3 className="font-bold text-4xl">
          Gizmos<span className="text-orange-500">.</span>
        </h3>
            
            <GiHamburgerMenu
              size={24}
              onClick={() => setSidebarOpen(true)}
              className="cursor-pointer"
            />
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 w-[300px] h-full bg-white z-50 transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5 border-b font-bold text-lg flex justify-between items-center">
                Gizmos.
                <button onClick={() => setSidebarOpen(false)}>✕</button>
              </div>
              <ul className="p-5 space-y-3 text-gray-700 font-medium">
                <li>Weekly Bestsellers</li>
                <li>Premium Tech</li>
                <li>New Arrivals</li>
                <li className="flex justify-between items-center cursor-pointer">
                  Home & Kitchen <span>›</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer">
                  Technology <span>›</span>
                </li>
                <li className="group relative cursor-pointer">
                  <div className="flex justify-between items-center">
                    Innovative Appliances <span className="ml-2">›</span>
                  </div>

                  {/* Side Wide Dropdown */}
                  <div className="absolute top-0 left-full ml-[20px] w-[900px] bg-white shadow-xl border rounded-sm p-6 hidden group-hover:flex z-50">
                    <div className="grid grid-cols-5 gap-6 text-sm text-gray-700">
                      {/* Column 1 */}
                      <div>
                        <h4 className="font-bold mb-2">For Home</h4>
                        <ul className="space-y-1">
                          <li>Irons</li>
                          <li>Garment Steamers</li>
                          <li>Washing Machines</li>
                          <li>Clothes Dryers</li>
                          <li>2in1 Washers & Dryers</li>
                          <li>Portable Dryers</li>
                          <li>Hair Dryers</li>
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h4 className="font-bold mb-2">For Kitchen</h4>
                        <ul className="space-y-1">
                          <li>Coffee Makers</li>
                          <li>Hand Mixers</li>
                          <li>Stand Mixers</li>
                          <li>Blenders</li>
                          <li>Refrigerators</li>
                          <li>Freezers</li>
                          <li>Ice Makers</li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h4 className="font-bold mb-2">Cameras</h4>
                        <ul className="space-y-1">
                          <li>Compact</li>
                          <li>DSLR</li>
                          <li>Mirrorless</li>
                          <li>Medium Format</li>
                          <li>Traditional Film</li>
                        </ul>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <h4 className="font-bold mb-2">IT Tech</h4>
                        <ul className="space-y-1">
                          <li>Gaming Laptops</li>
                          <li>Desktops</li>
                          <li>eReaders</li>
                          <li>Tablets</li>
                        </ul>
                      </div>

                      {/* Column 5 */}
                      <div>
                        <h4 className="font-bold mb-2">Gaming</h4>
                        <ul className="space-y-1">
                          <li>Action Games</li>
                          <li>Consoles</li>
                          <li>Multiplayer</li>
                          <li>Station Consoles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="search mx-auto border-[0.5px] p-3 w-[600px] h-[50px]  rounded-[5px]">
            <div className="flex  items-center">
              <div className="flex gap-[30px] items-center justify-center">
                <Dropdown>
                  <DropdownTrigger>
                    <h3>All Items</h3>
                  </DropdownTrigger>
                  <DropdownContent className="p-3 w-full min-w-[100px]">
                    Macbook Iphone
                  </DropdownContent>
                </Dropdown>
              </div>

              <Separator
                orientation="vertical"
                className="bg-gray-300 h-[20px] mx-3"
              />
              <input
                className="border-0  mx-auto h-[20px]"
                type="text"
                name=""
                id=""
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="icons flex items-center gap-[10px] justify-end">
            <TbArrowsDoubleNeSw size={24} />
            <FaRegUser size={24} className="ml-5" />
            <FaRegHeart size={24} className="ml-5" />
            <BsCart2 size={24} className="ml-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
