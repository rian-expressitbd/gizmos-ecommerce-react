import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { useState } from "react";

const Dropdowns = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-4 w-[190px]">
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
        className="dropdown-container"
        align="left" // Align dropdown content to the right (options: left, right, center)
      >
        <DropdownTrigger>
          <button className="p-2 bg-blue-500 text-white rounded">
            Toggle Dropdown
          </button>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="p-2 w-[300px]">
            <li className="py-1 px-2 hover:bg-gray-200">Option 1</li>
            <li className="py-1 px-2 hover:bg-gray-200">Option 2</li>
            <li className="py-1 px-2 hover:bg-gray-200">Option 3</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
