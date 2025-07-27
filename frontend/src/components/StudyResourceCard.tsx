import React from 'react';

interface StudyResourceCardProps {
  title: string;
  subject?: string[];
  resourceUrl?: string;
  dateCreated?: string;
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
      
      {/* Add Date Posted*/}
      <p><strong>Date Created:</strong> {dateCreated ? new Date(dateCreated).toLocaleDateString() : 'N/A'}</p>

      <p>
        <strong>Industries:</strong>{' '}
        {subject?.length
          ? subject.map(ind => ind.charAt(0).toUpperCase() + ind.slice(1)).join(', ')
          : 'N/A'}
      </p>

      {/* Application Link Button */}
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
  )
}

export default StudyResourceCard;
