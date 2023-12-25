import BackButton from "../BackButton";
import Button from "../Button";
import { useState } from "react";
import SuccessModal from "../SuccessModal";

const AddEmployee = ({ onChangeState }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleShowRecords = () => {
    onChangeState("records");
  };
  const handleShowDetails = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };
  const handleClose = () => {
    setShowSuccess(false);
    onChangeState("records");
  };
  return (
    <div>
      <header>
        <BackButton onClick={handleShowRecords}>Add New Employee</BackButton>
        <div>Fill in the following details to add new employee</div>
      </header>
      <main>
        <form className="mt-5">
          <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Personal Information
              </h2>
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Full Name"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Position"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Email"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Salary Information
              </h2>
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Salary Amount"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Monthly Bonus"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Total Amount Received Monthly"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Bank Information
              </h2>
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Bank Name"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Account Name"
              />
              <input
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Account Number"
              />
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button onClick={handleShowDetails}>Add Employee</Button>
          </div>
        </form>
      </main>
      {showSuccess && (
        <SuccessModal
          onClick={handleClose}
          text={"Okay"}
          message={"Employee Added Successfully"}
        />
      )}
    </div>
  );
};

export default AddEmployee;
