import { FaSearch } from "react-icons/fa";

const SearchInput = ({ setSearchQuery }) => {
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="flex h-12 sm:h-14 gap-1 items-center justify-center px-4 text-lg sm:text-xl bg-[#F4F4F4] rounded-xl border-2 border-transparent focus-within:border-[#A445ED] transition-colors duration-200">
      <input
        type="text"
        placeholder="keyboard"
        className="outline-none bg-transparen text-[#2D2D2D] flex-1 h-full"
        onChange={handleChange}
      />
      <span className="text-[#A445ED] text-xl">
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchInput;
