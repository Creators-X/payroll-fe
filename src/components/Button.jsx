const Button = ({ children, onClick, loading = false }) => {
  return (
    <button
      onClick={onClick}
      className={`  min-w-[191px] p-[15px] items-center justify-center rounded-[12px] text-white bg-${
        loading ? "foundation-grey-g-400" : "foundation-blue-b-300"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
