import React from "react";

interface CollegePrepCardProps {
  title: string;
  author?: string;
  tags?: string[];
  resourceUrl?: string;
  datePosted?: string;
}

const CollegePrepCard: React.FC<CollegePrepCardProps> = ({
  title,
  author,
  tags,
  resourceUrl,
  datePosted,
}) => {
  return (
    <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p>
        <strong>by:</strong> {author || "N/A"}
      </p>

      {/* Add Date Posted*/}
      <p>
        Date Posted:{" "}
        {datePosted ? new Date(datePosted).toLocaleDateString() : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Tags:</strong>{" "}
        {tags?.length
          ? tags.map((tags, i) => (
              <span
                key={i}
                className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
              >
                {tags}
              </span>
            ))
          : "N/A"}
      </p>

      {/* Application Link Button */}
      {resourceUrl ? (
        <a
          href={resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-laurel text-cream rounded hover:bg-darkLaurel transition"
        >
          Learn more
        </a>
      ) : (
        <p className="mt-4 italic">No resource link available</p>
      )}
    </div>
  );
};

export default CollegePrepCard;
