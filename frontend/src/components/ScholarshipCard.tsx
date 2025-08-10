import React from "react";

interface ScholarshipCardProps {
  title: string;
  organization?: string;
  deadline?: string;
  amount?: string;
  eligibility?: string[];
  applicationtype?: string[];
  applicationUrl?: string;
}

function formatLocalDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  title,
  organization,
  deadline,
  amount,
  eligibility,
  applicationtype,
  applicationUrl,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{organization || "Unknown company"}</p>

      <p>
        <strong>Application Deadline:</strong>{" "}
        {deadline ? formatLocalDate(deadline) : "N/A"}
      </p>

      <p>
        <strong>Amount:</strong>{" "}
        {amount ? amount.charAt(0).toUpperCase() + amount.slice(1) : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Eligibility:</strong>{" "}
        {eligibility?.length
          ? eligibility.map((eligibility, i) => (
              <span
                key={i}
                className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
              >
                {eligibility}
              </span>
            ))
          : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Application Type:</strong>{" "}
        {applicationtype?.length
          ? applicationtype.map((applicationtype, i) => (
              <span
                key={i}
                className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
              >
                {applicationtype}
              </span>
            ))
          : "N/A"}
      </p>

      {/* Application Link Button */}
      {applicationUrl ? (
        <a
          href={applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
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

export default ScholarshipCard;
