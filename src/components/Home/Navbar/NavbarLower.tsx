import { Image } from "@/components/ui/image";
import { useRef, useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function NavbarLower() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isWeeklyDiscountOpen, setIsWeeklyDiscountOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPostTypesOpen, setIsPostTypesOpen] = useState(false);

  const shopDropdownRef = useRef<HTMLDivElement>(null);
  const shopButtonRef = useRef<HTMLButtonElement>(null);
  const weeklyDiscountDropdownRef = useRef<HTMLDivElement>(null);
  const weeklyDiscountButtonRef = useRef<HTMLButtonElement>(null);
  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const blogButtonRef = useRef<HTMLButtonElement>(null);
  const postTypesRef = useRef<HTMLDivElement>(null);
  const postTypesButtonRef = useRef<HTMLButtonElement>(null);

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

  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check for Shop dropdown
      if (
        shopDropdownRef.current &&
        shopButtonRef.current &&
        !shopDropdownRef.current.contains(event.target as Node) &&
        !shopButtonRef.current.contains(event.target as Node)
      ) {
        setIsShopOpen(false);
      }

      // Check for Weekly Discount dropdown
      if (
        weeklyDiscountDropdownRef.current &&
        weeklyDiscountButtonRef.current &&
        !weeklyDiscountDropdownRef.current.contains(event.target as Node) &&
        !weeklyDiscountButtonRef.current.contains(event.target as Node)
      ) {
        setIsWeeklyDiscountOpen(false);
      }

      // Check for Blog dropdown
      if (
        blogDropdownRef.current &&
        blogButtonRef.current &&
        !blogDropdownRef.current.contains(event.target as Node) &&
        !blogButtonRef.current.contains(event.target as Node)
      ) {
        setIsBlogOpen(false);
      }

      // Check for Post Types dropdown
      if (
        postTypesRef.current &&
        postTypesButtonRef.current &&
        !postTypesRef.current.contains(event.target as Node) &&
        !postTypesButtonRef.current.contains(event.target as Node)
      ) {
        setIsPostTypesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-[#2453D4] text-white h-[60px] hidden md:block">
        <div className="w-[90%] mx-auto flex justify-between items-center h-[100%] whitespace-nowrap">
          <div>
            <ul className="flex items-center gap-10 h-[60px]">
              <Link to="/">Home</Link>

              {/* Pages dropdown */}
              <div className="relative group whitespace-nowrap h-[60px]">
                <Link to="" className="text-white h-[60px] flex items-center">
                  Pages
                </Link>
                <div className="absolute top-full left-0 mt-0 w-[200px] bg-white shadow-xl border rounded-sm py-4 p-3 hidden group-hover:flex group-hover:pointer-events-auto flex-col z-50 text-black">
                  <Link to="/about" className="py-1">
                    About Us
                  </Link>
                  <Link to="/faq" className="py-1">
                    FAQ Page
                  </Link>
                  <Link to="/terms" className="py-1">
                    Terms and Conditions
                  </Link>
                  <Link to="/contact" className="py-1">
                    Contact Us
                  </Link>
                  <Link to="/get-in-touch" className="py-1">
                    Get In Touch
                  </Link>
                  <Link to="/store-locator" className="py-1">
                    Store Locator
                  </Link>
                  <Link to="/pricing" className="py-1">
                    Pricing Plans
                  </Link>
                  <Link to="/best-sellers" className="py-1">
                    Best Sellers
                  </Link>
                </div>
              </div>

              {/* Shop dropdown */}
              <div className=" h-[60px]">
                <button
                  ref={shopButtonRef}
                  className="flex items-center gap-1 h-[60px]"
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                >
                  <span>Shop</span>
                </button>

                {isShopOpen && (
                  <div
                    ref={shopDropdownRef}
                    className="absolute top-full left-[97px] mt-0 w-[90%] grid grid-cols-5 bg-white shadow-xl border rounded-sm py-4 px-6 z-50 text-black"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                  >
                    <div>
                      <h3 className="font-bold mb-2">Product Types</h3>
                      <div className="flex flex-col gap-1 text-sm">
                        <Link
                          to="/shop/standard"
                          className="hover:text-blue-500"
                        >
                          Standard Product
                        </Link>
                        <Link
                          to="/shop/accordion"
                          className="hover:text-blue-500"
                        >
                          Accordion Product
                        </Link>
                        <Link
                          to="/shop/variable-a"
                          className="hover:text-blue-500"
                        >
                          Variable Product A
                        </Link>
                        <Link
                          to="/shop/variable-b"
                          className="hover:text-blue-500"
                        >
                          Variable Product B
                        </Link>
                        <Link
                          to="/shop/groupped"
                          className="hover:text-blue-500"
                        >
                          Groupped Product
                        </Link>
                        <Link
                          to="/shop/external"
                          className="hover:text-blue-500"
                        >
                          External Product
                        </Link>
                        <Link
                          to="/shop/cowntdown"
                          className="hover:text-blue-500"
                        >
                          Cowndown Product
                        </Link>
                        <Link
                          to="/shop/dominidable"
                          className="hover:text-blue-500"
                        >
                          Dominidable Product
                        </Link>
                        <Link
                          to="/shop/virtual"
                          className="hover:text-blue-500"
                        >
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
                        <Link
                          to="/shop/standard-list"
                          className="hover:text-blue-500"
                        >
                          Standard
                        </Link>
                        <Link
                          to="/shop/banner-list"
                          className="hover:text-blue-500"
                        >
                          Standard with Banner
                        </Link>
                        <Link
                          to="/shop/category-icons"
                          className="hover:text-blue-500"
                        >
                          Category Icons
                        </Link>
                        <Link
                          to="/shop/filter-top"
                          className="hover:text-blue-500"
                        >
                          Filter On Top
                        </Link>
                        <Link
                          to="/shop/countdown-list"
                          className="hover:text-blue-500"
                        >
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
                        <Link
                          to="/shop/two-columns"
                          className="hover:text-blue-500"
                        >
                          Two Columns
                        </Link>
                        <Link
                          to="/shop/three-columns"
                          className="hover:text-blue-500"
                        >
                          Three Columns
                        </Link>
                        <Link
                          to="/shop/four-columns"
                          className="hover:text-blue-500"
                        >
                          Four Columns
                        </Link>
                        <Link
                          to="/shop/four-columns-wide"
                          className="hover:text-blue-500"
                        >
                          Four Columns Wide
                        </Link>
                        <Link
                          to="/shop/five-columns-wide"
                          className="hover:text-blue-500"
                        >
                          Five Columns Wide
                        </Link>
                        <Link
                          to="/shop/six-columns-wide"
                          className="hover:text-blue-500"
                        >
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
                )}
              </div>

              {/* Blog dropdown - Updated to match the style in the screenshot */}
              <div className="relative h-[60px]">
                <button
                  ref={blogButtonRef}
                  className="flex items-center gap-1 h-[60px]"
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                >
                  <span>Blog</span>
                </button>

                {isBlogOpen && (
                  <div
                    ref={blogDropdownRef}
                    className="absolute top-full left-0 mt-0 w-[200px] bg-white shadow-xl border rounded-sm py-2 z-50 text-black"
                    onMouseEnter={() => setIsBlogOpen(true)}
                    onMouseLeave={() => setIsBlogOpen(false)}
                  >
                    <Link
                      to="/blog/right-sidebar"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Right Sidebar
                    </Link>
                    <Link
                      to="/blog/left-sidebar"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Left Sidebar
                    </Link>
                    <Link
                      to="/blog/no-sidebar"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      No Sidebar
                    </Link>
                    <div className="relative group">
                      <button
                        ref={postTypesButtonRef}
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                        onMouseEnter={() => setIsPostTypesOpen(true)}
                        onMouseLeave={() => setIsPostTypesOpen(false)}
                      >
                        <span>Post Types</span>
                        <MdKeyboardArrowRight size={20} />
                      </button>

                      {isPostTypesOpen && (
                        <div
                          ref={postTypesRef}
                          className="absolute top-0 left-full w-[200px] bg-white shadow-xl border rounded-sm py-2 z-50"
                          onMouseEnter={() => setIsPostTypesOpen(true)}
                          onMouseLeave={() => setIsPostTypesOpen(false)}
                        >
                          <Link
                            to="/blog/post/standard"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Standard Post
                          </Link>
                          <Link
                            to="/blog/post/gallery"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Gallery Post
                          </Link>
                          <Link
                            to="/blog/post/quote"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Quote Post
                          </Link>
                          <Link
                            to="/blog/post/link"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Link Post
                          </Link>
                          <Link
                            to="/blog/post/audio"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Audio Post
                          </Link>
                          <Link
                            to="/blog/post/video"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Video Post
                          </Link>
                          <Link
                            to="/blog/post/no-sidebar"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            No Sidebar Post
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/landing">Landing</Link>
            </ul>
          </div>

          {/* Weekly Discount dropdown */}
          <div className="h-[60px]">
            <button
              ref={weeklyDiscountButtonRef}
              className="flex items-center gap-2 text-md cursor-pointer h-[60px]"
              onMouseEnter={() => setIsWeeklyDiscountOpen(true)}
              onMouseLeave={() => setIsWeeklyDiscountOpen(false)}
            >
              <span>Weekly Discount</span>
              {isWeeklyDiscountOpen ? (
                <MdKeyboardArrowDown size={24} />
              ) : (
                <MdKeyboardArrowRight size={24} />
              )}
            </button>

            {isWeeklyDiscountOpen && (
              <div
                ref={weeklyDiscountDropdownRef}
                className="absolute mt-[1px] right-[6rem] bg-white shadow-xl border rounded-sm py-6 px-4 z-50 text-black"
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
                        <p className="text-xs text-gray-400">
                          {product.category}
                        </p>
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
                        <h3 className="text-sm font-bold mt-3">
                          {product.title}
                        </h3>
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
            )}
          </div>
        </div>
      </div>

      {/* Overlay that appears when any dropdown is open */}
      {(isShopOpen || isWeeklyDiscountOpen || isBlogOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 mt-[213px]"
          onClick={() => {
            setIsShopOpen(false);
            setIsWeeklyDiscountOpen(false);
            setIsBlogOpen(false);
            setIsPostTypesOpen(false);
          }}
        ></div>
      )}
    </div>
  );
}
