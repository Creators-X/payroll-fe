import { LuChevronRight } from "react-icons/lu";

const Records = ({ onChangeState }) => {
  const data = [{}, {}, {}, {}, {}, {}];
  const handleShowDetails = () => {
    onChangeState("details");
  };
  return (
    <div>
      <header className="grid grid-cols-5  gap-4 mb-6 text-foundation-blue-b-300 font-medium">
        <span className="">Fullname</span>
        <span className="">Position</span>
        <span className="">Email Address</span>
        <span className="">Phone Number</span>
        <span className="">Salary Amount</span>
      </header>
      <div>
        {data.map((item, index) => (
          <div
            className="grid grid-cols-5 mb-6 text-base font-normal relative"
            key={index}
          >
            <span>Babalola Idris Temitope</span>
            <span>Frontend Engineer</span>
            <span>hedristemitope2001@gmail.com</span>
            <span>08161126466</span>
            <span>N 1,000,000,000</span>
            <div
              className=" text-[#D2D2D2]  absolute right-10 top-[1%] cursor-pointer"
              onClick={handleShowDetails}
            >
              <LuChevronRight size={23} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;
