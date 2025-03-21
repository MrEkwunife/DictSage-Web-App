import { useEffect } from "react";

const Modal = ({ modal, setModal, logout }) => {
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <div className="z-100 fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
      <div className="fixed top-1/2 left-1/2  w-[350px] h-[200px] transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-50 rounded-lg flex justify-between flex-col">
        <span className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium text-center">
            Are you sure you want to signout?
          </h1>
          <div className="flex justify-end"></div>
        </span>
        <div className="flex justify-between">
          <button
            className="h-[40px] bg-gray-500/60 text-white w-[110px] hover:bg-gray-500/70 rounded-lg cursor-pointer"
            onClick={() => {
              setModal(false);
            }}
          >
            Cancel
          </button>
          <button
            className="h-[40px] bg-red-500 text-white w-[110px] hover:bg-red-600 rounded-lg cursor-pointer"
            onClick={() => {
              logout();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
