import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button
      onClick={() => setIsToggled(!isToggled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
        isToggled ? "bg-[#A445ED]" : "bg-gray-300"
      }`}
    >
      <span
        className={`relative h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          isToggled ? "translate-x-6" : "translate-x-1"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
