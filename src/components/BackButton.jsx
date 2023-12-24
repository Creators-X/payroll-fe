import { IoMdArrowBack } from "react-icons/io";

const BackButton = ({ children, onClick }) => {
  return (
    <h2 className="text-[24px] font-medium flex items-center mb-2">
      <IoMdArrowBack size={30} onClick={onClick} className="cursor-pointer" />

      <span className="ml-5">{children}</span>
    </h2>
  );
};

export default BackButton;
