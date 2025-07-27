import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { IoVideocamOutline } from "react-icons/io5";

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
        <div className="border border-fog rounded-lg p-4 font-teachers text-fog bg-cream shadow hover:shadow-md transition">
            <div className="flex flex-col items-center space-y-6">
                <img
                    src={mentorImage}
                    className="w-32 h-32 rounded-xl object-cover"
                />
            </div>
            <h1 className="text-xl font-semibold flex justify-center items-center gap-2 text-fog">
                {mentorname}
            </h1>
            <span className="text-fog">
                <a href={linkedin}>
                    <FaLinkedin size={24} />
                </a>
            </span>
            <span className="text-fog text-right pr-8">
                <a href={calendly}>
                    <IoVideocamOutline size={24} />
                    <p className="text-fog font-semibold text-lg">
                        Book
                    </p>
                </a>
            </span>

            <p className="text-lg text-fog">
                {role}
            </p>
            <div className="p-4">

                <p>
                    <strong>Categories:</strong>{' '}
                    {categories?.length
                        ? categories.map(ind => ind.charAt(0).toUpperCase() + ind.slice(1)).join(', ')
                        : 'N/A'}
                </p>
            </div>
            <div className="p-4">
                <p >
                    <strong>Topics:</strong>{' '}
                    {topics?.length
                        ? topics.map(ind => ind.charAt(0).toUpperCase() + ind.slice(1)).join(', ')
                        : 'N/A'}
                </p>
            </div>


            <div className="p-8">
                <p className="text-md">
                    {desc || 'No description'}
                </p>
            </div>

        </div>
    )
}

export default MentorBooking