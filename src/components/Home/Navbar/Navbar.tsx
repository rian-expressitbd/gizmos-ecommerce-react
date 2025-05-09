import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { Separator } from "@/components/ui/separator";
import { FaChevronRight, FaRegHeart, FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import CompareModal from "./CompareModal";
import ThemeToggler from "@/components/themeToggler";
import MobileNavbarTray from "./MobileNavbarTray";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [isMobilemenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0  bg-white dark:bg-black dark:text-white py-[30px] z-[60]">
      <div className="w-[90%] mx-auto  z-50">
        <div className="flex justify-between items-center">
          <div className="logo flex gap-[50px] items-center">
            <Link to="/">
              <h3 className="font-bold text-4xl">
                Gizmos<span className="text-orange-500">.</span>
              </h3>
            </Link>

            <GiHamburgerMenu
              size={24}
              onClick={() => setSidebarOpen(true)}
              className="cursor-pointer hidden lg:block"
            />
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 w-[300px] h-full bg-white dark:bg-black dark:text-white z-50 transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5 border-b font-bold text-lg flex justify-between items-center">
                Gizmos.
                <button onClick={() => setSidebarOpen(false)}>✕</button>
              </div>
              <ul className="p-5 space-y-3 text-gray-700 dark:text-white font-medium">
                <li>Weekly Bestsellers</li>
                <li>Premium Tech</li>
                <li>New Arrivals</li>
                <li className="flex justify-between items-center cursor-pointer">
                  Home & Kitchen{" "}
                  <span>
                    <FaChevronRight size={18} />
                  </span>
                </li>
                <li className="flex justify-between dark:text-white items-center cursor-pointer">
                  Technology{" "}
                  <span>
                    <FaChevronRight size={18} />
                  </span>
                </li>
                <li className="group relative cursor-pointer dark:text-white">
                  <div className="flex justify-between items-center">
                    Innovative Appliances{" "}
                    <span className="ml-2">
                      <FaChevronRight size={18} />
                    </span>
                  </div>

                  {/* Side Wide Dropdown */}
                  <Sidebar />
                </li>
              </ul>
            </div>
          </div>

          <div className="search mx-auto border-[0.5px] p-3 w-[600px] h-[50px] rounded-[5px] hidden lg:block dark:border-gray-100">
            <div className="flex items-center">
              <div className="flex gap-[30px] items-center justify-center">
                <Dropdown>
                  <DropdownTrigger>
                    <h3>All Items</h3>
                  </DropdownTrigger>
                  <DropdownContent className="p-3 w-full min-w-[100px]">
                    <Link to="/">Macbook</Link>
                    <br />
                    <Link to="/">Iphone</Link>
                  </DropdownContent>
                </Dropdown>
              </div>

              <Separator
                orientation="vertical"
                className="bg-gray-300 h-[20px] mx-3"
              />
              <input
                className=" bg-transparent"
                type="text"
                name=""
                id=""
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="icons ml-[9px] flex items-center gap-[2px] lg:gap-[10px] justify-end">
            <ThemeToggler />
            <TbArrowsDoubleNeSw
              size={24}
              onClick={() => setCompareModalOpen(true)}
              className="cursor-pointer"
            />
            <Link to="/account">
              <FaRegUser size={24} className="ml-5" />
            </Link>
            <Link to="/wishlist">
              <FaRegHeart size={24} className="ml-5 hidden lg:block" />
            </Link>

            <Link to="/cart">
              <BsCart2 size={24} className="ml-5" />
            </Link>
            <GiHamburgerMenu
              size={24}
              onClick={() => setIsMobileMenuOpen(!isMobilemenuOpen)}
              className="cursor-pointer lg:hidden block ml-[2px]"
            />
          </div>
        </div>
        {isMobilemenuOpen && (
          <MobileNavbarTray onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>

      {/* Compare Products Modal */}
      {compareModalOpen && (
        <CompareModal setCompareModalOpen={setCompareModalOpen} />
      )}
    </div>
  );
}
