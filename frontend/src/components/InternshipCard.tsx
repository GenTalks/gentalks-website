import React from "react";

interface InternshipCardProps {
  title: string;
  company?: string;
  location?: string;
  compensation?: string;
  industries?: string[];
  pros?: string[];
  cons?: string[];
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
  pros,
  cons,
  applicationUrl,
  datePosted,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{company || "Unknown company"}</p>

      {/* Add Location */}
      <p>
        <strong>Location:</strong> {location || "N/A"}
      </p>

      {/* Add Date Posted */}
      <p>
        <strong>Date Posted:</strong>{" "}
        {datePosted ? formatLocalDate(datePosted) : "N/A"}
      </p>

      <p>
        <strong>Compensation:</strong>{" "}
        {compensation
          ? compensation.charAt(0).toUpperCase() + compensation.slice(1)
          : "N/A"}
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

      {/* Pros tags */}
      {pros && pros.length > 0 && (
        <div className="mt-2">
          <strong>Pros:</strong>
          <ul className="list-disc list-inside">
            {pros.map((pro, idx) => (
              <li key={idx}>{pro.charAt(0).toUpperCase() + pro.slice(1)}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons tags */}
      {cons && cons.length > 0 && (
        <div className="mt-2">
          <strong>Cons:</strong>
          <ul className="list-disc list-inside">
            {cons.map((con, idx) => (
              <li key={idx}>{con.charAt(0).toUpperCase() + con.slice(1)}</li>
            ))}
          </ul>
        </div>
      )}

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

export default InternshipCard;
