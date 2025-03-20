import { useState } from "react";
import PlayIcon from "../../assets/images/icon-play.svg";

const MainHeader = ({ word, phonetics }) => {
  const audio = phonetics?.find((p) => p.audio)?.audio || "";

  const playAudio = () => {
    if (audio) {
      const sound = new Audio(audio);
      sound.play();
    }
  };

  return (
    <section className="flex justify-between items-center">
      <h1 className="flex flex-col gap-2">
        <span className="text-4xl text-[#2D2D2D] sm:text-5xl font-bold">
          {word}
        </span>
        <span className="text-[#A445ED] text-lg sm:text-xl">
          {phonetics?.find((p) => p.text)?.text || "No pronunciation available"}
        </span>
      </h1>

      <button
        onClick={playAudio}
        className="w-12 h-12 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        disabled={!audio}
      >
        <img src={PlayIcon} alt="Play Icon" />
      </button>
    </section>
  );
};

export default MainHeader;
