import { useState } from "react";

const FAQComp = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-2/3 border-b border-sage py-4 tracking-wide">
      <button
        className="w-full flex justify-between items-center font-semibold text-2xl text-fog"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="ml-2">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-lg text-fog transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQComp;
