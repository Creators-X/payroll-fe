import Button from "./Button";

const OnBoardData = ({ img, title, description, onPrev, onNext }) => {
  return (
    <div className="w-full max-w-[676px] mx-auto p-[20] h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-[400px] max-h-[400px]">
        <img src={img} alt="payment_info" className="w-full h-full" />
      </div>
      <div className="w-full p-4 flex flex-col gap-2 max-w-[500px] text-center">
        <h1 className="md:text-5xl text-3xl text-Black font-medium">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="mt-6 p-[20px] w-full flex flex-wrap justify-between md:items-center gap-4">
        {onPrev && (
          <div className="md:mr-auto mx-auto">
            <Button text={"Prev"} onClick={onPrev} />
          </div>
        )}
        <div className="md:ml-auto mx-auto">
          {onNext && <Button text={"Next"} onClick={onNext} />}
        </div>
      </div>
    </div>
  );
};

export default OnBoardData;
