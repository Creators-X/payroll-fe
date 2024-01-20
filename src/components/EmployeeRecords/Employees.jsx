import { useEffect } from "react";
import Button from "../Button";
import Buttons from "./Buttons";
import Records from "./Records";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../store/actions/employeeActions";
import Spinner from "../Spinner/Spinner";
const Employees = ({ onChangeState }) => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (store) => store.employeeReducer
  );
  const handleChange = () => {
    onChangeState("addEmployee");
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <>
      <header>
        <h2 className="text-[24px] font-medium text-foundation-blue-b-300">
          Employees&apos; Records
        </h2>
      </header>
      <main className="mt-2.5 bg-white px-5 py-4 rounded-xl min-h-[100px]">
        {loading && (
          <div className="grid place-items-center w-[100%] h-[100%]">
            <Spinner />
          </div>
        )}
        {employees.length > 0 && <Records onChangeState={onChangeState} />}
        {error && (
          <div className="grid place-items-center w-[100%] h-[100%]">
            {error.message}
          </div>
        )}
      </main>
      <div className="mt-4">
        <Buttons />
        <Button onClick={handleChange}>
          <span className="border-2 rounded-full mr-2	w-[28px] h-[28px] inline-block font-semibold">
            &#43;
          </span>
          <span>Add New Employee</span>
        </Button>
      </div>
    </>
  );
};

export default Employees;
