import { useState } from "react";

const FAQComp = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto border-b border-sage py-4 tracking-wide text-center sm:text-left">
      <button
        className="py-2 w-full flex flex-row justify-center sm:justify-between items-center text-2xl text-fog text-center sm:text-left gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="flex-1 min-w-0 text-ellipsis overflow-hidden break-words text-center sm:text-left">
          {question}
        </span>
        <span className="whitespace-nowrap">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-lg text-fog transition-all duration-300 ease-in-out text-center sm:text-left">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQComp;
