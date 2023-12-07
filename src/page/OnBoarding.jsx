import { useState } from "react";
import paymentInfo from "../assets/images/paymentInfo.png";
import calendar from "../assets/images/online-calendar-rafiki.png";
import timeManagement from "../assets/images/time-management.png";
import OnBoardData from "../components/OnBoardData";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const onNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const onPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {currentStep === 1 && (
        <OnBoardData
          title={"Payment Management"}
          description={
            "Our payment management system is designed to seamlessly integrate into your experience. With a focus on simplicity and security, we ensure that every transaction is smooth and"
          }
          img={paymentInfo}
          onNext={onNext}
        />
      )}
      {currentStep === 2 && (
        <OnBoardData
          title={"Payment Automation"}
          description={
            "With our payment automation feature, say goodbye to manual payroll processing hassles. Streamline your payroll workflow, save time, and reduce errors with automated payment processing."
          }
          img={calendar}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
      {currentStep === 3 && (
        <OnBoardData
          title={"Accurate and On-Time Payment"}
          description={
            "Our system ensures accurate payments are made to the employees and on-time. Timely and accurate compensation isn't just a promise; it's our way of work. We ensure that workers get their dues promptly."
          }
          img={timeManagement}
          onNext={toLogin}
          onPrev={onPrev}
        />
      )}
      {/* Add other steps here */}
    </div>
  );
};

export default OnBoarding;
