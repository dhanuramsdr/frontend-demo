import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div
      className=" flex items-center min-w-15 border-2 border-gray-400 px-4 rounded-2xl space-x-3 hover:shadow-lg hover:shadow-violet-300 hover:border-violet-300/30  transition-all 
        duration-300
        bg-white"
    >
      <Search />
      <input
        type="search"
        className=" min-w-5 focus:ring-0 outline-none border-none"
        placeholder="Search here"
      />
    </div>
  );
};

export default SearchBar;
