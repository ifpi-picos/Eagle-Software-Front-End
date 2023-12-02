import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ open }) => {
  return (
    <div className="flex items-center m-0 rounded-md bg-ligth-white mt-6 h-12 px-4 py-2">
      <BsSearch className={`text-white flex w-8 h-5 text-lg ${!open && 'opacity-1'}`} />
      <input
        type="search"
        placeholder="Buscar"
        className={`text-base bg-transparent w-full ml-4 text-white focus:outline-none ${!open && 'hidden'}`}
      />
    </div>
  );
};

export default SearchBar;
