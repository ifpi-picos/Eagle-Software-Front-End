import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ open, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    onSearch(newSearchQuery);
  };

  return (
    <div className="flex items-center m-0 rounded-md bg-ligth-white mt-6 h-12 px-4 py-2">
      <BsSearch className={`text-white flex w-8 h-5 text-lg ${!open && 'opacity-1'}`} />
      <input
        type="search"
        placeholder="Buscar"
        className={`text-base bg-transparent w-full ml-4 text-white focus:outline-none`}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
