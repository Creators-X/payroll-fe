import BackButton from "../BackButton";
import Button from "../Button";
import user from "./../../assets/images/user.png";
import DetailBox from "./DetailBox";
import { CiCamera } from "react-icons/ci";

const EmployeeDetails = ({ onChangeState }) => {
  const handleShowAdd = () => {
    onChangeState("addEmployee");
  };
  const handleDelete = () => {
    console.log("handle Del");
  };
  return (
    <div>
      <header className="flex justify-between items-center">
        <BackButton onClick={handleShowAdd}>Musa Usman</BackButton>
        <Button onClick={handleDelete}>Delete Employee Record</Button>
      </header>
      <main className="grid  lg:grid-cols-2 gap-x-[20px] grid-cols-1 lg:gap-x-[40px] xl:gap-x-[120px] gap-y-[40px] mt-5">
        <div className="bg-white py-5 px-10  rounded-lg row-start-1 row-end-3">
          <h2 className="text-[24px] font-semibold">Profile Information</h2>
          <div className="relative w-[115px] h-[115px]">
            <img
              src={user}
              alt="musa usman"
              className="w-[100%] h-[100%] rounded-xl mt-6"
            />
            <span className="absolute bottom-[-10px] right-[-10px] bg-foundation-blue-b-300 text-white font-semibold  p-2 rounded-sm">
              <CiCamera size={20} />
            </span>
          </div>
          <DetailBox title={"Fullname"} value={"Musa Usman"} />
          <DetailBox title={"Position"} value={"Public Relation Officer"} />
          <DetailBox title={"Phone Number"} value={"08161126466"} />
          <DetailBox
            title={"Email Address"}
            value={"hedristemitope2001@gmail.com"}
          />
          <DetailBox
            title={"Email Address"}
            value={"hedristemitope2001@gmail.com"}
          />
          <DetailBox
            title={"Home Address"}
            value={
              "No 23 Onigbo Street, Off Oyekanmi Steet, Ilorin, Kwara State"
            }
          />
        </div>

        <div className="bg-white py-5 px-10  rounded-lg ">
          <h2 className="text-[24px] font-semibold">Bank Information</h2>

          <DetailBox title={"Account Name"} value={"Musa Usman"} />
          <DetailBox title={"Bank Name"} value={"United Bank of Africa"} />
          <DetailBox title={"Account Number"} value={"8161126466"} />
        </div>
        <div className="bg-white py-5 px-10  rounded-lg ">
          <h2 className="text-[24px] font-semibold">Salary Information</h2>

          <DetailBox title={"Salary Amount"} value={"N 60,000,000"} />
          <DetailBox title={"Monthly Bonus"} value={"N 30,000,000"} />
          <DetailBox title={"Deduction"} value={"N 0.00"} />
          <DetailBox title={"Monthly Payment"} value={"N 90,000,000"} />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetails;
