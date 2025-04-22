import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavbarLower() {
  return (
    <div>
      <div className="bg-[#2453D4] text-white h-[60px] hidden md:block">
        <div className="w-[90%] mx-auto flex justify-between items-center h-[100%] whitespace-nowrap">
          <div >
            <ul className="flex items-center gap-10 h-[60px]">
              <Link to="/">Home</Link>
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
                </div>
              </div>

              <Link to="/shop">Shop</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/shop/weekly" className="text-md">
              Weekly Discount
            </Link>
            <MdKeyboardArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
