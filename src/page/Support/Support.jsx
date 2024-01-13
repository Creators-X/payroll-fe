import { useState } from "react";

const Support = () => {
  const questions = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consecteturros donec duis",
      answer: "Lorem ipsum dolor sit amet consecteturros donec duis",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consecteturros donec duis",
      answer: "Lorem ipsum dolor sit amet consecteturros donec duis",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consecteturros donec duis",
      answer: "Lorem ipsum dolor sit amet consecteturros donec duis",
    },
  ];
  const [answer, setAnswer] = useState("");
  const handleShow = (e, index) => {
    setAnswer((prev) => (prev === index ? "" : index));
  };
  return (
    <section>
      <header>
        <h2 className="text-[24px] font-medium ">Support</h2>
      </header>
      <main className="max-w-[547px] bg-white rounded-md py-10 px-5 mt-10">
        <h2 className="mb-5 font-semibold text-xl">
          Frequently Asked Questions (FAQS)
        </h2>
        {questions.map((questionEl, index) => (
          <div
            className="py-5 border-b cursor-pointer  border-[#E7EAF1] "
            key={questionEl.id}
          >
            <div
              className="flex justify-between items-center"
              onClick={(e) => handleShow(e, index)}
            >
              <span>{questionEl.question}</span>
              <span className="text-6 border-[1.5px] border-[#112D74] rounded-full text-[#112D74] w-7 h-7 grid place-items-center font-semibold ">
                {answer === index ? "-" : "+"}
              </span>
            </div>
            <div className="mt-2 text-[15px] px-2.5">
              {answer === index && questionEl.answer}
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Support;
