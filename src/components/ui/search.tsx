import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

export const Search = ({
  onSearch,
  className,
}: {
  onSearch: (searchTerm: string) => void;
  className?: string;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchButton = () => {
    onSearch(searchTerm);
  };

  return (
    <div
      className={twMerge(
        "flex w-full relative rounded",
        "focus-within:ring-1 focus-within:ring-blue-500",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => e.key === "Enter" && handleSearchButton()}
        className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-l rounded-r-none
                   focus:outline-none focus:border-blue-500
                   text-gray-900 dark:text-white bg-white dark:bg-gray-700
                   placeholder-gray-500 dark:placeholder-gray-400"
      />

      <Button
        title="Search"
        onClick={handleSearchButton}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`px-4 py-2 bg-blue-500 text-white rounded-l-none rounded-r hover:bg-blue-600 
                   focus:outline-none border border-l-0 ${
                     isFocused
                       ? "border-blue-500 dark:border-blue-500"
                       : "border-gray-300 dark:border-gray-600"
                   }`}
      >
        <BiSearch className="h-4 w-4" />
      </Button>
    </div>
  );
};
