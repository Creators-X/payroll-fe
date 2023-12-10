import { useEffect, useState } from "react";

const StatCard = ({ title, value, time, bg }) => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const getBackgroundClass = (bg) => {
      switch (bg) {
        case "foundation-blue-b-300":
          return "bg-foundation-blue-b-300";
        case "foundation-tblue-t-400":
          return "bg-foundation-tblue-t-400";
        case "foundation-blue-b-400":
          return "bg-foundation-blue-b-400";
        default:
          return "bg-black";
      }
    };

    setBackground(getBackgroundClass(bg));
  }, [bg, title, value, time]);

  return (
    <div className={`w-full p-4 rounded-xl ${background}`}>
      <div className="w-full rounded-xl bg-white p-4">
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
