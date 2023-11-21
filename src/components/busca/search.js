import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ open }) => {
  return (
    <div className="flex items-center rounded-md bg-ligth-white mt-6 px-4 py-2">
      <BsSearch className={`text-white text-lg ${!open && 'opacity-0'}`} />
      <input
        type="search"
        placeholder="Search"
        className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
      />
    </div>
  );
};

export default SearchBar;
