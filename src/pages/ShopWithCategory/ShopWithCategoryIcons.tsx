import { PiSquaresFourBold } from "react-icons/pi";
import { 
  FaHeadphones, 
  FaMobileAlt, 
  FaLaptop, 
  FaTabletAlt,
  FaTv,
  FaCamera,
  FaGamepad,
  FaClock
} from "react-icons/fa";

export default function ShopWithCategoryIcons() {
  const categories = [
    { icon: <PiSquaresFourBold size={40} />, name: "Show All" },
    { icon: <FaHeadphones size={40} />, name: "Headphones" },
    { icon: <FaMobileAlt size={40} />, name: "Phones" },
    { icon: <FaLaptop size={40} />, name: "Laptops" },
    { icon: <FaTabletAlt size={40} />, name: "Tablets" },
    { icon: <FaTv size={40} />, name: "TVs" },
    { icon: <FaCamera size={40} />, name: "Cameras" },
    { icon: <FaGamepad size={40} />, name: "Gaming" },
    { icon: <FaClock size={40} />, name: "Smart Watches" }
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="icon flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="text-gray-700 hover:text-blue-500">
              {category.icon}
            </div>
            <p className="text-sm mt-3 text-center font-medium">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}