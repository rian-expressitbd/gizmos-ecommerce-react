import { CiCreditCard1 } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-[#F3F6FB] p-3 text-gray-400 hidden lg:block">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <CiCreditCard1 />
          <p className="text-sm ml-2">Welcome to Worldwide Gizmos Store</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <IoLocationSharp />
            <p className="text-sm ml-2">Store Locator</p>
          </div>
          <div className="flex items-center ml-4">
            <MdOutlineLocalShipping />
            <p className="text-sm ml-2">Free shipping & returns</p>
          </div>
          <div className="flex items-center ml-4">
            <FaUserAlt />
            <p className="text-sm ml-2">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
