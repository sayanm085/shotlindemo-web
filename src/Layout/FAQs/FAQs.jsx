import React, { useState, memo } from "react";
import clsx from "clsx";


// Reusable FAQItem Component (Optimized with React.memo)
const FAQItem = memo(({ question, answer, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex flex-col rounded-xl border border-[#001170] backdrop-blur-md py-5 px-5 "
    style={{
      background: "linear-gradient(rgba(0, 13, 255, 0.04) 0%, rgba(0, 3, 55, 0.25) 130%)",
    }}
    aria-expanded={isOpen}
  >
    {/* Question */}
    <div className="w-full flex justify-between items-center">
      <h3 className="text-base sm:text-lg text-white sora-regular">{question}</h3>
      <i className={clsx("fa-solid text-white", isOpen ? "fa-minus" : "fa-plus")}></i>
    </div>

    {/* Answer (Only shows when open) */}
    {isOpen && <p className="w-full pt-4 text-[#b9b9b9] text-sm sora-regular">{answer}</p>}
  </div>
));

// Main FAQs Component (Optimized with React.memo)
const FAQs = memo(({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="py-5 bg-[#05071A] flex justify-center w-full">
      <div className="w-4/5 py-5 flex flex-col items-center">
        {/* Header */}
        <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border border-[#ffffff5d]">
          FAQs
        </p>

        {/* Title */}
        <h2 className="text-2xl ds:text-3xl sm:text-4xl md:text-[2.7rem] text-white sora-regular text-center py-3 w-full max-w-[550px]">
          We’ve got the{" "}
          <span className="instrument-serif-regular-italic">answers</span> to your questions
        </h2>

        {/* FAQs List */}
        <div className="w-full max-w-[800px] flex flex-col gap-7 py-6">
          {data.map(({ FAQsQuestion, FAQsAnswer }, index) => (
            <FAQItem
              key={index}
              question={FAQsQuestion}
              answer={FAQsAnswer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQs;
