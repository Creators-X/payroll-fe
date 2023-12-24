const Records = () => {
  const data = [{}, {}, {}, {}, {}, {}];
  return (
    <div>
      <header className="grid grid-cols-5 gap-4 mb-6 text-foundation-blue-b-300 font-medium">
        <span className="px-3">Fullname</span>
        <span className="px-3">Position</span>
        <span className="px-3">Email Address</span>
        <span className="px-3">Phone Number</span>
        <span className="px-3">Salary Amount</span>
      </header>
      <div>
        {data.map((item, index) => (
          <div
            className="grid grid-cols-5 gap-4 mb-6 text-base font-normal"
            key={index}
          >
            <span>Fullname mi ni baba</span>
            <span>Position</span>
            <span>Email Address</span>
            <span>Phone Number</span>
            <span>Salary Amount</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;
