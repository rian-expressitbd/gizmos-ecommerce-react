import { Link } from "react-router-dom";

export default function PagesDropdown() {
     {/* Pages dropdown */}
  return (
   
    <div className="relative group whitespace-nowrap h-[60px]">
      <Link to="" className="text-white h-[60px] flex items-center">
        Pages
      </Link>
      <div className="absolute top-full left-0 mt-0 w-[200px] bg-white shadow-xl border rounded-sm py-4 p-3 hidden group-hover:flex group-hover:pointer-events-auto flex-col z-50 text-black dark:bg-black dark:text-white">
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
  );
}
