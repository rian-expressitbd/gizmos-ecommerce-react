import { MdKeyboardArrowRight } from "react-icons/md";


export default function NavbarLower() {
  return (
    <div>
      <div className="bg-[#2453D4] text-white p-4">
        <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
           <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>Pages</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Landing</li>
           </ul>
        </div>
         <div className="flex items-center gap-2">
           <p className="text-md">Weekly Discount</p>
           <MdKeyboardArrowRight size={24}/>
         </div>
        </div>
      </div>
    </div>
  )
}
