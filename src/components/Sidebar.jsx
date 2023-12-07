import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { MdSupport } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Logo from "../assets/images/logo.svg";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const getSidebarItems = () => {
    return [
      {
        name: "Home",
        icon: <AiOutlineHome size={25} />,
        href: "/home",
      },
      {
        name: "User Profile",
        icon: <AiOutlineUser size={25} />,
        href: "/user-profile",
      },
      {
        name: "Add User",
        icon: <AiOutlineUserAdd size={25} />,
        href: "/add-user",
      },
    ];
  };
  const sidebarItems = getSidebarItems();
  const location = useLocation();
  return (
    <div
      className={`w-[80%] md:w-full h-screen blue-linear md:flex md:flex-col ${
        showSideBar ? "absolute flex flex-col z-[2] " : "hidden"
      }`}
    >
      <div className="w-full relative">
        {showSideBar && (
          <Button
            className="p-[15px] bg-slate-200 z-[2] text-xl absolute right-0"
            label={<AiOutlineClose size={25} />}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-[45px] py-[15px] relative min-h-screen">
        <div className="w-full max-w-[170px] h-[100px] mx-auto px-[20px]">
          <img src={Logo} alt="logo" className="w-full h-full " />
        </div>
        <div className="flex flex-col gap-[104px] p-4">
          <div className="flex flex-col gap-1">
            {sidebarItems.map((item, index) => (
              <Link to={item.href} key={index}>
                <div
                  key={index}
                  className={`w-full flex gap-4 p-[15px] items-center cursor-pointer rounded-[12px] hover:bg-[#fff] hover:text-foundation-blue-b-300 font-bold  ${
                    location.pathname === item.href
                      ? "border-l-slate-700  bg-white text-foundation-blue-b-300"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-start flex-col gap-1">
            <Link
              to="/settings"
              className="flex text-white text-xl gap-4 w-full items-center justify-start p-[15px]"
            >
              <FiSettings size={25} /> Settings
            </Link>
            <p className="flex text-white text-xl gap-4 w-full items-center justify-start p-[15px]">
              <MdSupport size={25} /> Support
            </p>
            <p className="flex text-white text-xl gap-4 w-full items-center justify-start p-[15px]">
              <IoLogOut size={25} /> Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
