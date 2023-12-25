import { useState } from "react";

import Employees from "../../components/EmployeeRecords/Employees";
import AddEmployee from "../../components/EmployeeRecords/AddEmployee";
import EmployeeDetails from "../../components/EmployeeRecords/EmployeeDetails";

const EmployeeRecord = () => {
  const [state, setState] = useState("records");
  return (
    <section>
      {state === "records" && <Employees onChangeState={setState} />}
      {state === "addEmployee" && <AddEmployee onChangeState={setState} />}
      {state === "details" && <EmployeeDetails onChangeState={setState} />}
    </section>
  );
};

export default EmployeeRecord;
