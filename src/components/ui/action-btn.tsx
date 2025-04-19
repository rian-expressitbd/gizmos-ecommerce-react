import React, { useState } from "react";
import { IconType } from "react-icons";
import { CiMenuKebab } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { Dropdown, DropdownContent, DropdownTrigger } from "./dropdown";
import { Icon } from "./icon";

interface ActionItem {
  label: string;
  icon: IconType;
  onClick: () => void;
  className?: string;
}

interface ActionBtnProps {
  items: ActionItem[];
  buttonClassName?: string;
}

export const ActionBtn: React.FC<ActionBtnProps> = ({
  items,
  buttonClassName,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsDropdownOpen(false);
  };

  return (
    <Dropdown
      isDropdownOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}
      align="right"
    >
      <DropdownTrigger>
        <button
          className={twMerge(
            "rounded-full p-1.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700/50",
            buttonClassName,
          )}
        >
          <Icon
            icon={CiMenuKebab}
            className="h-4 w-4 text-gray-600 dark:text-gray-400"
          />
        </button>
      </DropdownTrigger>

      <DropdownContent className="max-w-[200px] bg-white py-1 shadow-lg dark:bg-gray-800 dark:shadow-gray-800/10">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item.onClick)}
            className={twMerge(
              "flex  items-center gap-2 px-3 py-1 text-left text-xs",
              "hover:bg-gray-100 dark:hover:bg-gray-700/50",
              "text-gray-700 dark:text-gray-200",

              item.className,
            )}
          >
            <Icon icon={item.icon} size={18} />
            {item.label}
          </button>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};
