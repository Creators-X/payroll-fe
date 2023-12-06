import paymentInfo from "../assets/images/paymentInfo.png";
import Button from "../components/Button";

const OnBoarding = () => {
  return (
    <div className="w-full max-w-[676px] mx-auto p-[20] h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-[400px] max-h-[400px]">
        <img src={paymentInfo} alt="payment_info" className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col gap-2 max-w-[500px] text-center">
        <h1 className="text-5xl text-Black font-medium">Payment Management</h1>
        <p>
          Our payment management system is designed to seamlessly integrate into
          your experience. With a focus on simplicity and security, we ensure
          that every transaction is smooth and stress-free.
        </p>
      </div>
      <div className="mt-6 p-[20px] w-full flex justify-between">
        <Button text={"Next"} />
      </div>
    </div>
  );
};

export default OnBoarding;
