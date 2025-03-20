import Header from "../components/static/header";
import Main from "../components/main/main";
import { supabase } from "../lib/supabase";

import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const [selectedFont, setSelectedFont] = useState("font-inconsolata");

  const getUsername = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user.user_metadata.display_name) {
      setUsername(data.user.user_metadata.display_name);
    }
  };
  console.log(username);

  return (
    <div
      className={`px-6 pt-12 pb-18 flex flex-col gap-8 max-w-3xl mx-auto ${selectedFont}`}
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
