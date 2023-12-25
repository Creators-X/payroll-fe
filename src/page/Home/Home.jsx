import StatCard from "../../components/StatCard";

const Home = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      <StatCard
        title={"Number of Employees"}
        value={"N 3,000.00"}
        time={"31st October, 2023"}
        bg={"foundation-blue-b-300"}
      />
      <StatCard
        title={"Total Amount Paid"}
        value={"N 3,000,000.00"}
        time={"Monthly"}
        bg={"foundation-tblue-t-400"}
      />
      <StatCard
        title={"Scheduled Payment Date"}
        value={"30"}
        time={"Monthly"}
        bg={"foundation-blue-b-400"}
      />
    </div>
  );
};

export default Home;
