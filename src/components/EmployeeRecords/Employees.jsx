import Button from "../Button";
import Buttons from "./Buttons";
import Records from "./Records";
const Employees = ({ onChangeState }) => {
  const handleChange = () => {
    onChangeState("addEmployee");
  };
  return (
    <>
      <header>
        <h2 className="text-[24px] font-medium text-foundation-blue-b-300">
          Employees&apos; Records
        </h2>
      </header>
      <main className="mt-2.5 bg-white px-5 py-4 rounded-xl">
        <Records onChangeState={onChangeState} />
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
