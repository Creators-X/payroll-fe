import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="w-full h-screen grid layout relative">
      {showSideBar && (
        <div className="w-full h-screen absolute z-[1] bg-black/40" />
      )}
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="w-full h-screen flex flex-col gap-7 overflow-y-auto md:p-7 p-2 bg-foundation-grey-g-400">
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
