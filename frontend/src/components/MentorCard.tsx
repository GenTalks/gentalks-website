import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";

interface MentorCardProps {
  id?: string;             
  image: string;
  name: string;
  title: string;
  linkedin?: string;
  calendly?: string;
  categories?: string[];
  tutoring?: string[];
}

const MentorCard: React.FC<MentorCardProps> = ({
  id,
  image,
  name,
  title,
  linkedin,
  calendly,
  categories,
  tutoring,
}) => {
  return (
    <div className="relative rounded-lg p-4 shadow-md font-teachers text-fog bg-cream hover:border-cream hover:shadow-lg transition w-[650px]">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Image */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={image}
            alt={`${name} profile`}
            className="w-32 h-32 rounded-xl object-cover"
          />
        </div>

        {/* Info section */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">

            {/* Name + LinkedIn */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} className="text-laurel rounded-md" />
                  </a>
                )}
              </div>
              <p className="text-xl pl-1 mt-3">{title}</p>
            </div>

            {/* Book button */}
            {calendly && (
              <a
                href={calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-chocolate/80 text-cream py-3 px-4 rounded-full"
              >
                <IoVideocamOutline size={24} />
                <span className="text-md font-semibold">Book</span>
              </a>
            )}
          </div>

          {/* Categories */}
          <div className="mt-2">
            <strong>Categories:</strong>{" "}
            {categories?.length ? (
              categories.map((cat, i) => (
                <span
                  key={i}
                  className="inline-block bg-laurel text-cream px-2 py-1 rounded-md text-sm mr-1"
                >
                  {cat}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">N/A</span>
            )}
          </div>

          {/* Tutoring */}
          <div className="mt-2">
            <strong>Tutoring:</strong>{" "}
            {tutoring?.length ? (
              tutoring.map((topic, i) => (
                <span
                  key={i}
                  className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
                >
                  {topic}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">N/A</span>
            )}
          </div>
        </div>
      </div>

      {/* Mentor ID at bottom-left */}
      <div className="absolute bottom-2 right-2 text-xs text-cream">
        ID: {id}
      </div>
    </div>
  );
};

export default MentorCard;
