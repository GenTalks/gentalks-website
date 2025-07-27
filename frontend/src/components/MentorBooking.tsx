import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';

interface MentorBookingCardProps {
    mentorImage: string;
    mentorname: string;
    linkedin?: string;
    calendly?: string;
    role?: string;
    categories?: string[];
    topics?: string[];
    desc?: string;
}

const MentorBooking: React.FC<MentorBookingCardProps> = ({
    mentorImage,
    mentorname,
    linkedin,
    calendly,
    role,
    categories,
    topics,
    desc,
}) => {
    return (
        <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream hover:border-cream hover:shadow-lg transition w-[650px]">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0 flex justify-center">
                    <img
                        src={mentorImage}
                        alt={mentorname}
                        className="w-32 h-32 rounded-xl object-cover"
                    />
                </div>

                {/* Info section */}
                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                        {/* Name + LinkedIn */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold">{mentorname}</h2>
                                {linkedin && (
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={28} className="text-laurel rounded-md" />
                                    </a>
                                )}
                            </div>
                            <p className="text-xl pl-1 mt-3">{role}</p>
                        </div>

                        {/* Book button (Calendly) */}
                        {calendly && (
                            <a
                                href={calendly}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-capybara text-cream py-3 px-4 rounded-full"
                            >
                                <IoVideocamOutline size={24} />
                                <span className="text-md font-semibold">Book</span>
                            </a>
                        )}
                    </div>


                    {/* Tags */}
                    <div>
                        <p className="mt-2 leading-loose">
                            <strong>Categories:</strong>{' '}
                            {categories?.length
                                ? categories.map((cat, i) => (
                                    <span
                                        key={i}
                                        className="inline-block bg-laurel text-cream px-2 py-1 rounded-md text-sm mr-1"
                                    >
                                        {cat}
                                    </span>
                                ))
                                : 'N/A'}
                        </p>
                        <p className="mt-2 leading-[2.5rem]">
                            <strong>Topics:</strong>{' '}
                            {topics?.length
                                ? topics.map((topic, i) => (
                                    <span
                                        key={i}
                                        className="inline-block bg-laurel/10 text-laurel px-2 py-1 rounded-md text-sm mr-1"
                                    >
                                        {topic}
                                    </span>
                                ))
                                : 'N/A'}
                        </p>
                    </div>
                </div>

            </div>
            {/* Description */}
            <div>
                <p className="text-md p-4">{desc || 'No description provided.'}</p>
            </div>
        </div>
    );
};

export default MentorBooking;
