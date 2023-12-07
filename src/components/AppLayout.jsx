import Sidebar from "./SideBar";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const AppLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full h-screen grid layout relative">
      {showSideBar && (
        <div className="w-full h-screen absolute z-[1] bg-black/40" />
      )}
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="w-full h-screen flex flex-col gap-7 overflow-y-auto bg-black/50 p-[20px]">
        <div className="w-full flex items-center justify-between gap-[10px]">
          <div>Header</div>
          <button
            className="md:hidden flex"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <FaBarsStaggered size={25} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
