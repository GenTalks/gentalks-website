import React from "react";

interface StudyResourceCardProps {
  title: string;
  author?: string;
  topic?: string;
  resourceUrl?: string;
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

const StudyResourceCard: React.FC<StudyResourceCardProps> = ({
  title,
  author,
  topic,
  resourceUrl,
  datePosted,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="italic">{author || "Unknown author"}</p>

      <p>
        <strong>Date Created:</strong>{" "}
        {datePosted ? formatLocalDate(datePosted) : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Subject:</strong>{" "}
        {topic ? (
          <span className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1">
            {topic}
          </span>
        ) : (
          "N/A"
        )}
      </p>

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
