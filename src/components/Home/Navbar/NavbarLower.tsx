import { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import PagesDropdown from "./PagesDropdown";
import ShopDropdown from "./ShopDropdown";
import BlogDropdown from "./BlogDropdown";
import WeeklyDropdown from "./WeeklyDropdown";

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
              <PagesDropdown />
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

                {isShopOpen && <ShopDropdown setIsShopOpen={setIsShopOpen} />}
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
                  <BlogDropdown
                    setIsBlogOpen={setIsBlogOpen}
                    setIsPostTypesOpen={setIsPostTypesOpen}
                    isPostTypesOpen={isPostTypesOpen}
                  />
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

            <WeeklyDropdown
              isWeeklyDiscountOpen={isWeeklyDiscountOpen}
              setIsWeeklyDiscountOpen={setIsWeeklyDiscountOpen}
            />
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
