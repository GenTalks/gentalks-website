import React from "react";

interface InternshipCardProps {
  title: string;
  company?: string;
  location?: string;
  compensation?: string;
  industries?: string[];
  applicationUrl?: string;
  datePosted?: string;
}

function formatLocalDate(dateString: string) {
  const utcDate = new Date(dateString + "T00:00:00Z");
  return utcDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  company,
  location,
  compensation,
  industries,
  applicationUrl,
  datePosted,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{company || "Unknown company"}</p>

      <p><strong>Location:</strong> {location || "N/A"}</p>
      <p><strong>Date Posted:</strong> {datePosted ? formatLocalDate(datePosted) : "N/A"}</p>

      <p>
        <strong>Compensation:</strong>{" "}
        {compensation ? compensation[0].toUpperCase() + compensation.slice(1) : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Industries:</strong>{" "}
        {industries?.length
          ? industries.map((industry, i) => (
              <span
                key={i}
                className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
              >
                {industry}
              </span>
            ))
          : "N/A"}
      </p>

      {applicationUrl ? (
        <a
          href={applicationUrl}
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-laurel text-cream rounded hover:bg-darkLaurel transition"
        >
          Apply Now
        </a>
      ) : (
        <p className="mt-4 italic">No application link available</p>
      )}
    </div>
  );
};

export default InternshipCard;
