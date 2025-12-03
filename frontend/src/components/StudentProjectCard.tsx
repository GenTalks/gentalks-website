import React from "react";

interface StudentProjectCardProps {
  id?: string;
  title: string;
  creator?: string;
  categories?: string[];
  projectUrl?: string;
  dateFeatured?: string;
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

const StudentProjectCard: React.FC<StudentProjectCardProps> = ({
  id,
  title,
  creator,
  categories,
  projectUrl,
  dateFeatured,
}) => {
  return (
    <div className="relative border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">

      {/* Hidden ID (dev/admin use) */}
      <span className="absolute bottom-2 right-2 text-xs text-cream">
        {id}
      </span>

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{creator || "Unknown creator"}</p>

      <p>
        <strong>Date Featured:</strong>{" "}
        {dateFeatured ? formatLocalDate(dateFeatured) : "N/A"}
      </p>

      <p className="mt-2 leading-[2.5rem]">
        <strong>Categories:</strong>{" "}
        {categories?.length
          ? categories.map((category, i) => (
              <span
                key={i}
                className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
              >
                {category}
              </span>
            ))
          : "N/A"}
      </p>

      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-laurel text-cream rounded hover:bg-darkLaurel transition"
        >
          Project URL
        </a>
      ) : (
        <p className="mt-4 italic">No project url available</p>
      )}
    </div>
  );
};

export default StudentProjectCard;
