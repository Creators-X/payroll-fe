import { CiLock } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
const SettingsBox = ({ onClick }) => {
  return (
    <div
      className="bg-white p-10 border border-[#9DA9C6] flex justify-between items-center rounded-md font-semibold w-[100%] cursor-pointer max-h-[86px]"
      onClick={onClick}
    >
      <span>
        <CiLock size={20} />
      </span>
      <span>Change Password</span>
      <span>
        <FaChevronRight />
      </span>
    </div>
  );
};

export default SettingsBox;
