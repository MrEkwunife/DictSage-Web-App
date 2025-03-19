import Nav from "./nav";
import SearchInput from "../ui/searchInput";

const Header = ({ setSearchQuery, setSelectedFont }) => {
  return (
    <header className="flex flex-col gap-5">
      <Nav setSelectedFont={setSelectedFont} />
      <SearchInput setSearchQuery={setSearchQuery} />
    </header>
  );
};

export default Header;
