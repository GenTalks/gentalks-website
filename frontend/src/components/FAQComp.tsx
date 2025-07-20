import { useState } from "react";

const FAQComp = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-1/2 border-b border-fog py-4">
      <button
        className="w-full flex justify-between items-center font-semibold text-lg text-fog"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="ml-2">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-sm text-fog transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQComp;
