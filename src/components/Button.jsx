const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-foundation-blue-b-300 min-w-[191px] p-[15px] items-center justify-center rounded-[12px] text-white"
    >
      {children}
    </button>
  );
};

export default Button;
