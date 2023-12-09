import Header from "./Header";
import Sidebar from "./SideBar";
import { useState } from "react";

const AppLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full h-screen grid layout relative">
      {showSideBar && (
        <div className="w-full h-screen absolute z-[1] bg-black/40" />
      )}
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="w-full h-screen flex flex-col gap-7 overflow-y-auto md:p-7 p-2 bg-foundation-blue-b-50">
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
