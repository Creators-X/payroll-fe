import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Buttons = () => {
  return (
    <div className="my-4 flex justify-end">
      <div className="flex align-middle">
        <button className="bg-transparent">
          <FaChevronLeft />
        </button>
        <button className="w-[32px] h-[32px] rounded bg-foundation-blue-b-300 text-white mx-1.5">
          1
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          2
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          3
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          4
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          5
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          ...
        </button>
        <button className="w-[32px] h-[32px] rounded bg-[#F9F9F9] text-[#B2B2B2] mr-1.5">
          10
        </button>
        <button className="bg-transparent">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
