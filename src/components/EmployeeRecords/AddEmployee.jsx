import BackButton from "../BackButton";
import Button from "../Button";
import { useEffect, useState } from "react";
import SuccessModal from "../SuccessModal";
import Select from "react-select";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../store/actions";
import { addEmployee, getUserBank } from "../../store/actions/employeeActions";

const AddEmployee = ({ onChangeState }) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const state = useSelector((state) => state.employeeReducer);
  const [error, setError] = useState("");

  const handleShowRecords = () => {
    onChangeState("records");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // firstName, lastName, email, bankInfo
    const payload = {
      firstname: state.firstname,
      lastname: state.lastname,
      email: state.email,
      bankInfo: {
        position: state.position,
        phoneNumber: state.phoneNumber,
        salary: state.salary,
        bonus: state.bonus,
        total: state.total,
        bankName: state.bankName,
        acctNo: state.acctNo,
      },
    };

    dispatch(addEmployee(payload));
  };
  const handleClose = () => {
    dispatch({ type: CLOSE_MODAL });
    onChangeState("records");
  };
  const handleChange = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };
  const handleSelect = (selectedOption) => {
    const { value } = selectedOption;
    dispatch({ type: "bankCode", payload: value });
    dispatch(getUserBank(state.acctNo, value));
  };
  useEffect(() => {
    const getAllbanks = async () => {
      try {
        const response = await axios.get("https://nubapi.com/banks");
        const { data } = response;
        const dataArr = Object.entries(data).map(([key, value]) => ({
          value: key,
          label: value,
        }));
        if (response.status === 200) {
          setOptions(dataArr);
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong pls check your internet");
        }
      } finally {
        setLoading(false);
      }
    };

    getAllbanks();
  }, []);
  return (
    <div>
      <header>
        <BackButton onClick={handleShowRecords}>Add New Employee</BackButton>
        <div>Fill in the following details to add new employee</div>
      </header>
      <main>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Personal Information
              </h2>
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter First Name"
                value={state.firstname}
                onChange={(e) => handleChange(e, "firstname")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Last Name"
                value={state.lastname}
                onChange={(e) => handleChange(e, "lastname")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Position"
                value={state.position}
                onChange={(e) => handleChange(e, "position")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Email"
                value={state.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Phone Number"
                value={state.phoneNumber}
                onChange={(e) => handleChange(e, "phoneNumber")}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Salary Information
              </h2>
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Salary Amount"
                value={state.salary}
                onChange={(e) => handleChange(e, "salary")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Monthly Bonus"
                value={state.bonus}
                onChange={(e) => handleChange(e, "bonus")}
              />
              <input
                required
                className="w-[100] mb-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Total Amount Received Monthly"
                value={state.total}
                onChange={(e) => handleChange(e, "total")}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-semibold mb-2">
                Bank Information
              </h2>

              <Select
                options={options}
                isLoading={loading}
                onChange={handleSelect}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "0",
                    height: "64px",
                  }),
                }}
              />
              {error && (
                <p
                  style={{ textTransform: "capitalize" }}
                  className="text-red-600"
                >
                  {error}
                </p>
              )}

              <input
                required
                className="w-[100]  mt-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                type="text"
                placeholder="Enter Account Number"
                value={state.acctNo}
                onChange={(e) =>
                  dispatch(getUserBank(e.target.value, state.bankCode))
                }
              />
              {state.acctNoErr && (
                <p
                  style={{ textTransform: "capitalize" }}
                  className="text-red-600"
                >
                  {state.acctNoErr}
                </p>
              )}
              {state.acctName && (
                <input
                  required
                  className="w-[100] mt-5 h-[64px] rounded placeholder:text-[#989898] p-4 outline-none"
                  type="text"
                  placeholder="Enter Account Name"
                  value={state.acctName}
                  readOnly
                />
              )}

              {state.getBank && (
                <div className="mt-5 grid place-items-center">
                  {" "}
                  <Spinner />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button loading={state.adding}>
              {state.adding ? <Spinner /> : "Add Employee"}
            </Button>
          </div>
        </form>
      </main>
      {Object.keys(state.newEmployee).length > 0 && (
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
