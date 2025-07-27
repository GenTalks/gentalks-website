import React from 'react';

interface ScholarshipCardProps {
  title: string;
  organization?: string;
  deadline?: string;
  amount?: string;
  eligibility?: string[];
  applicationtype?: string[];
  applicationUrl?: string;
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
      <p className="italic">{organization || 'Unknown company'}</p>

      <p>
        <strong>Application Deadline:</strong>{' '}
        {deadline ? new Date(deadline).toLocaleDateString() : 'N/A'}
      </p>

      <p>
        <strong>Amount:</strong>{' '}
        {amount ? amount.charAt(0).toUpperCase() + amount.slice(1) : 'N/A'}
      </p>

      <p>
        <strong>Eligibility:</strong>{' '}
        {eligibility?.length
          ? eligibility.map((ind) => ind.charAt(0).toUpperCase() + ind.slice(1)).join(', ')
          : 'N/A'}
      </p>

      <p>
        <strong>Application Type:</strong>{' '}
        {applicationtype?.length
          ? applicationtype.map((ind) => ind.charAt(0).toUpperCase() + ind.slice(1)).join(', ')
          : 'N/A'}
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
