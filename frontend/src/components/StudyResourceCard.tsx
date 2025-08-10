import React from "react";

interface StudyResourceCardProps {
  title: string;
  subject?: string;
  resourceUrl?: string;
  dateCreated?: string;
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

const StudyResourceCard: React.FC<StudyResourceCardProps> = ({
  title,
  subject,
  resourceUrl,
  dateCreated,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Add Date Created */}
      <p>
        <strong>Date Created:</strong>{" "}
        {dateCreated ? formatLocalDate(dateCreated) : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Subject:</strong>{" "}
        {subject ? (
          <span className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1">
            {subject}
          </span>
        ) : (
          "N/A"
        )}
      </p>

      {/* Resource Link Button */}
      {resourceUrl ? (
        <a
          href={resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-laurel text-cream rounded hover:bg-darkLaurel transition"
        >
          View resource
        </a>
      ) : (
        <p className="mt-4 italic">No link available</p>
      )}
    </div>
  );
};

export default StudyResourceCard;
