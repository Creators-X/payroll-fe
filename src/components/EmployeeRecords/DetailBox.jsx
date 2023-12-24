const DetailBox = ({ title, value }) => {
  return (
    <div className="mt-6">
      <div className="w-[100%] border border-foundation-blue-b-300 rounded-lg px-5 py-[7px] box-border my-2.5">
        <div className="text-[#A4A4A4] text-sm">{title}</div>
        <div>{value} </div>
      </div>
    </div>
  );
};

export default DetailBox;
