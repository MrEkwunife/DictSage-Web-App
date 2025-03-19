import logo from "../../assets/images/logo.svg";
import ToggleButton from "../ui/buttonMode";
import SelectFont from "../ui/selectFont";

export default function Nav({ setSelectedFont }) {
  return (
    <nav className="flex justify-between item">
      <img src={logo} alt="Log" />

      <div className="flex items-center gap-2.5 sm:gap-4">
        <SelectFont setSelectedFont={setSelectedFont} />
        <ToggleButton />
        <figure className="h-10 w-10 rounded-full bg-[#FF5252]"></figure>
      </div>
    </nav>
  );
}
