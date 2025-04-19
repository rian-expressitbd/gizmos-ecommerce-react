import { Search } from "@/components/ui/search";
import { useState } from "react";

export default function Searchs() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <p className="mt-2">Search Term: {searchTerm}</p>
    </div>
  );
}
