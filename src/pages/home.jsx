import Header from "../components/static/header";
import Main from "../components/main/main";

import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFont, setSelectedFont] = useState("font-inconsolata");

  return (
    <div
      className={`px-6 pt-6 pb-18 flex flex-col gap-8 max-w-3xl mx-auto ${selectedFont}`}
    >
      <Header
        setSearchQuery={setSearchQuery}
        setSelectedFont={setSelectedFont}
      />
      <Main searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
