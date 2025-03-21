import Header from "../components/static/header";
import Main from "../components/main/main";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const [selectedFont, setSelectedFont] = useState("font-inconsolata");

  const checkSessionExpiry = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      toast.error("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    // Check if session is about to expire (e.g., within 5 minutes)
    const expiryTime = new Date(session.expires_at * 1000);
    const currentTime = new Date();
    const timeUntilExpiry = expiryTime - currentTime;

    if (timeUntilExpiry <= 300000) {
      // 5 minutes in milliseconds
      toast.error("Your session is about to expire. Please login again.");
      await supabase.auth.signOut();
      navigate("/login");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await checkSessionExpiry();
        const { data } = await supabase.auth.getUser();
        if (data?.user?.user_metadata?.display_name) {
          setUsername(data.user.user_metadata.display_name);
          console.log(username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    const intervalId = setInterval(checkSessionExpiry, 60000);

    return () => clearInterval(intervalId);
  }, [username]);

  return (
    <div
      className={`px-6 pt-12 pb-18 flex flex-col h-full gap-8 max-w-3xl mx-auto ${selectedFont}`}
    >
      <Header
        setSearchQuery={setSearchQuery}
        setSelectedFont={setSelectedFont}
        username={username}
      />
      <Main searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
