import logo from "../../assets/images/logo.svg";
import ToggleButton from "../ui/buttonMode";
import SelectFont from "../ui/selectFont";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { LuLogOut } from "react-icons/lu";
import Modal from "../ui/Modal";

export default function Nav({ setSelectedFont }) {
  const [username, setUsername] = useState("");
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user?.user_metadata?.display_name) {
          setUsername(data.user.user_metadata.display_name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  const Logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {modal && <Modal modal={modal} setModal={setModal} logout={Logout} />}
      <nav className="flex justify-between items-center gap-2 w-full">
        <div className="flex flex-1 items-center justify-center gap-1 sm:gap-4">
          <span className="flex-1">
            <img src={logo} alt="logo" className="w-full" />
          </span>
          <span>Hello {username}!</span>
        </div>
        <div className="flex items-center gap-10 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <SelectFont setSelectedFont={setSelectedFont} />
          </div>
          <button
            className="flex items-center gap-2.5 sm:gap-4 bg-red-500 py-1.5 px-2 text-white rounded-lg cursor-pointer"
            onClick={() => {
              setModal(true);
            }}
          >
            <h3>Logout</h3>
            <LuLogOut className="text-lg" />
          </button>
        </div>
      </nav>
    </>
  );
}
