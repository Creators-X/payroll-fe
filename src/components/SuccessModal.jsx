import { IoCheckmarkOutline } from "react-icons/io5";
import { LiaTimesCircle } from "react-icons/lia";
const SuccessModal = ({ onClick, message, text }) => {
  return (
    <div className="bg-[rgb(0,0,0,.2)] absolute top-0 bottom-0 left-0 right-0 grid place-items-center">
      <div className="w-[50%] h-[70%] bg-white rounded-xl relative  flex flex-col justify-center items-center">
        <span
          className="absolute top-[32px] right-[32px] cursor-pointer"
          onClick={onClick}
        >
          <LiaTimesCircle size={30} />
        </span>
        <div className="w-[126px] h-[126px] rounded-full text-foundation-blue-b-300 border border-foundation-blue-b-300 grid place-items-center">
          <IoCheckmarkOutline size={50} />
        </div>
        <div className="font-semibold text-2xl max-w-[274px]  text-center text-foundation-blue-b-400 my-5">
          {message}
        </div>
        <button
          className="grid items-center border border-foundation-blue-b-300 rounded-md text-foundation-blue-b-300 bg-transparent h-[48px] w-[194px]"
          onClick={onClick}
        >
          <span>{text}</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
