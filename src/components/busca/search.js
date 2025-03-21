import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch, isOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    onSearch(newSearchQuery);
  };

  return (
    <div className="flex items-center m-0 rounded-md bg-ligth-white mt-6 h-12 pl-4 py-2">
      <label className="flex flex-row-reverse" aria-label="Campo de Busca">
        <input
          type="search"
          placeholder={isOpen ? "Buscar" : ""}
          className="text-base bg-transparent w-full text-white focus:outline-none"
          value={searchQuery}
          onChange={handleInputChange}
          aria-label="Busca"
        />
        <BsSearch className="text-white w-8 h-5 text-lg" />
      </label>
    </div>
  );
};

export default SearchBar;
