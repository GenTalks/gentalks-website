import React from "react";

interface ScholarshipCardProps {
  title: string;
  organization_name?: string;
  deadline?: string;
  amount?: string;
  eligibility?: string; // comma-separated string
  application_type?: string; // comma-separated string
  application_link?: string;
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

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  title,
  organization_name,
  deadline,
  amount,
  eligibility,
  application_type,
  application_link,
}) => {
  // Make sure we always have an array
  const eligibilityArray = Array.isArray(eligibility) ? eligibility : [];
  const applicationTypeArray = Array.isArray(application_type) ? application_type : [];

  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{organization_name || "Unknown organization"}</p>

      <p>
        <strong>Deadline:</strong> {deadline ? formatLocalDate(deadline) : "N/A"}
      </p>

      <p>
        <strong>Amount:</strong> {amount || "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Eligibility:</strong>{" "}
        {eligibilityArray.length
          ? eligibilityArray.map((item, i) => (
            <span
              key={i}
              className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
            >
              {item}
            </span>
          ))
          : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Application Type:</strong>{" "}
        {applicationTypeArray.length
          ? applicationTypeArray.map((item, i) => (
            <span
              key={i}
              className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
            >
              {item}
            </span>
          ))
          : "N/A"}
      </p>

      {application_link ? (
        <a
          href={application_link}
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
