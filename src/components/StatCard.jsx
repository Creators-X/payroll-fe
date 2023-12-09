const StatCard = ({ title, value, time, bg }) => {
  return (
    <div className={`w-full p-4 rounded-xl bg-${bg}`}>
      <div className={`w-full rounded-xl  bg-white p-4`}>
        <div className="flex flex-col gap-6">
          <p className="text-base">{title}</p>
          <h3 className="text-3xl">{value}</h3>
        </div>
        <p className="text-xs"> {time} </p>
      </div>
    </div>
  );
};

export default StatCard;
