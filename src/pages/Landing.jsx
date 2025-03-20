import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center  text-[#8F19E8]">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-8 left-8 md:top-14 md:left-14 md:w-16"
      />
      <div className="flex flex-col gap-8 items-center justify-center max-w-xl md:max-w-2xl px-8 md:px-0">
        <h1 className="text-5xl md:text-7xl font-bold">DictSage</h1>
        <p className="text-center text-lg md:text-2xl text-[#888888]">
          DictSage is a sleek and responsive dictionary web app that fetches
          word definitions, phonetics, synonyms, and examples in real time using
          an API, providing a seamless and modern word lookup experience.
        </p>
        <button
          className="mt-6 px-6 py-3 border border-[#8F19E8] bg-[#8F19E8] text-white text-lg rounded-lg hover:bg-transparent transition hover:text-black cursor-pointer"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
