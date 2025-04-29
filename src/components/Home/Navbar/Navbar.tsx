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
import { IoCloseOutline } from "react-icons/io5";
import { Image } from "@/components/ui/image";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Sample product data for comparison
  const compareProducts = [
    {
      id: 348,
      name: "Wireless PC Mouse XF-550 Black/Grey",
      price: 250,
      image: "/featured1.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
    {
      id: 349,
      name: "X7 Closed-Back Wireless Earbuds",
      price: 345,
      image: "/featured2.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
    {
      id: 350,
      name: "Computer Monitor Full HD Red/Black",
      price: 1200,
      image: "/featured3.jpg",
      inStock: true,
      description:
        "Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto mt-[30px] mb-[30px] z-50">
        <div className="flex justify-between items-center">
          <div className="logo flex gap-[50px] items-center">
            <h3 className="font-bold text-4xl">
              Gizmos<span className="text-orange-500">.</span>
            </h3>

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
                  Home & Kitchen{" "}
                  <span>
                    <FaChevronRight size={18} />
                  </span>
                </li>
                <li className="flex justify-between items-center cursor-pointer">
                  Technology{" "}
                  <span>
                    <FaChevronRight size={18} />
                  </span>
                </li>
                <li className="group relative cursor-pointer">
                  <div className="flex justify-between items-center">
                    Innovative Appliances{" "}
                    <span className="ml-2">
                      <FaChevronRight size={18} />
                    </span>
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

          <div className="search mx-auto border-[0.5px] p-3 w-[600px] h-[50px] rounded-[5px] hidden lg:block">
            <div className="flex items-center">
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
                className="border-0 h-[20px]"
                type="text"
                name=""
                id=""
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="icons ml-[9px] flex items-center gap-[2px] lg:gap-[10px] justify-end">
            <TbArrowsDoubleNeSw
              size={24}
              onClick={() => setCompareModalOpen(true)}
              className="cursor-pointer"
            />
          <Link to="/account"><FaRegUser size={24} className="ml-5" /></Link>  
            <Link to="/wishlist">
              <FaRegHeart size={24} className="ml-5 hidden lg:block" />
            </Link>

            <Link to="/cart">
              <BsCart2 size={24} className="ml-5" />
            </Link>
            <GiHamburgerMenu
              size={24}
              onClick={() => setSidebarOpen(true)}
              className="cursor-pointer lg:hidden block ml-[2px]"
            />
          </div>
        </div>
      </div>

      {/* Compare Products Modal */}
      {compareModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setCompareModalOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg z-50 w-[80%] max-w-5xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Compare products</h2>
              <button onClick={() => setCompareModalOpen(false)}>
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-6">
                {compareProducts.map((product) => (
                  <div key={product.id} className="relative border-r">
                    <button
                      className="absolute top-0 right-0 p-1"
                      onClick={() => {
                        /* Remove product from comparison */
                      }}
                    >
                      <IoCloseOutline size={20} />
                    </button>

                    <div className="flex justify-center py-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="h-32 object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-green-600 mb-2">
                        {product.inStock ? "In stock" : "Out of stock"}
                      </div>

                      <div className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </div>

                      <div className="mb-2">
                        <span className="font-semibold">SKU:</span> {product.id}
                      </div>

                      <div className="font-semibold mb-2">{product.name}</div>

                      <div className="text-xl font-bold mb-4">
                        ${product.price}
                      </div>

                      <button className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center w-full border-r">
                        <span>ADD TO CART</span>
                        <svg
                          className="ml-2 w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 6H22L19 16H6L3 6Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 20C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20Z"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20Z"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
