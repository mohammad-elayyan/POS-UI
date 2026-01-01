import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchInProducts } from "../redux/reducers/productsSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="relative w-1/4 ">
      <Search
        size={16}
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      />
      <input
        type="search"
        className="searchInput"
        placeholder="Search..."
        value={searchTerm}
        onChange={() => {
          setSearchTerm(event.target.value);
          dispatch(searchInProducts(searchTerm));
        }}
      />
    </div>
  );
};

export default SearchBar;
