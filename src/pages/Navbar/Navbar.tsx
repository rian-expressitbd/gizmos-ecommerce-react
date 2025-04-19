import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { Separator } from "@/components/ui/separator";
import {  FaRegHeart, FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  return (
    <div>
      <div className="w-[80%] mx-auto mt-[30px] mb-[30px]">
        <div className="flex items-center">
          <div className="logo flex gap-[50px] items-center">
            <img src="/logo.png" alt="" className="w-[50px] h-[50px]" />
            <GiHamburgerMenu size={24}/>
          </div>

          <div className="search mx-auto border-[0.5px] p-3 w-[600px] h-[50px]  rounded-[5px]">
            <div className="flex  items-center">
              <div className="flex gap-[30px] items-center justify-center">
                <Dropdown>
                  <DropdownTrigger>
                    <h3>All Items</h3> 
                   
                  </DropdownTrigger>
                  <DropdownContent className="p-3 w-full min-w-[100px]">Macbook Iphone</DropdownContent>
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
