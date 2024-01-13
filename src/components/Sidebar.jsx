import { AiOutlineClose } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { MdSupport } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { FaWallet } from "react-icons/fa6";
import { LuLayoutPanelLeft, LuClipboardList } from "react-icons/lu";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const getSidebarItems = () => {
    return [
      {
        name: "Overview",
        icon: <LuLayoutPanelLeft size={25} />,
        href: "/home",
      },
      {
        name: "Employees’ Records",
        icon: <LuClipboardList size={25} />,
        href: "/employee-record",
      },
      {
        name: "Salary Management",
        icon: <FaWallet size={25} />,
        href: "/salary-management",
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
          <button
            className="p-2 bg-slate-200 z-[2] text-xl absolute right-2 top-2 rounded-[50%]"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <AiOutlineClose size={20} />
          </button>
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
            <Link
              to="/support"
              className="flex text-white text-xl gap-4 w-full items-center justify-start p-[15px]"
            >
              <MdSupport size={25} /> Support
            </Link>
            <Link
              to=""
              className="flex text-white text-xl gap-4 w-full items-center justify-start p-[15px]"
            >
              <IoLogOut size={25} /> Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
