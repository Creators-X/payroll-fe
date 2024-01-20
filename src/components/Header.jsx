import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import profileImg from "../assets/images/profile.png";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ setShowSideBar, showSideBar }) => {
  const { admin } = useSelector((store) => store.adminReducer);
  return (
    <div className="w-full grid sm:grid-cols-2 grid-cols-1  items-center gap-[10px] bg-white border-foundation-blue-b-75 border p-4 rounded-xl flex-wrap ">
      <div className="w-full">
        <h1 className="md:text-[28px] text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex gap-4 items-center w-full sm:justify-end justify-between">
        <button className="p-2 rounded-lg bg-foundation-blue-b-50 md:flex hidden">
          <FaRegBell size={20} />
        </button>
        <div className="flex gap-2 items-center">
          <img
            src={profileImg}
            alt="profile_img"
            className="md:w-[48px] w-[30px] h-[30px] md:h-[48px] rounded-[50%]"
          />
          <h4 className="md:text-lg text-base">{admin.username}</h4>
          <button>
            <FaChevronDown size={20} />
          </button>
        </div>
        <button
          className="md:hidden flex"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <FaBarsStaggered size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
