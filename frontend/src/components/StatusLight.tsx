import React from "react";

type StatusType = "open" | "reviewing" | "closed";

interface StatusLightProps {
  status: StatusType;
  className?: string;
}

const StatusLight: React.FC<StatusLightProps> = ({ status, className }) => {
  const statusConfig: Record<
    StatusType,
    { text: string; bg: string }
  > = {
    open: {
      text: "Open",
      bg: "bg-moss", 
    },
    reviewing: {
      text: "Reviewing",
      bg: "bg-canary",
    },
    closed: {
      text: "Closed",
      bg: "bg-mahogany",
    },
  };

  const { text, bg } = statusConfig[status];

  return (
    <div
      className={`inline-block items-center gap-2 px-4 py-2 rounded-full ${bg} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className="w-2.5 h-2.5 rounded-full bg-cream-100"
        aria-hidden="true"
      />
      <span className="text-cream">
        Application Status: {text}
      </span>
    </div>
  );
};

export default StatusLight;
