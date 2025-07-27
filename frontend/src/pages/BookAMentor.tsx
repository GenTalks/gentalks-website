import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import InternshipCard from "../components/InternshipCard";
import MentorBooking from "../components/MentorBooking";


export interface BookAMentor {
  _id: string;
  mentorImage: string;
  mentorname: string;
  linkedin: string;
  calendly: string;
  role: string;
  categories: string[];
  topics: string[];
  desc: string;
}


const mentorQuery = `
  *[_type == "mentorpage"] | order(_createdAt desc) {
    _id,
    mentorImage,
    mentorname,
    linkedin,
    calendly,
    role,
    categories,
    topics,
    desc,
  }
`;


const Internships: React.FC = () => {
  const [mentors, setMentors] = useState<BookAMentor[]>([])


  useEffect(() => {
    sanityClient
      .fetch(mentorQuery)
      .then((data: BookAMentor[]) => {
        const sortedData = data
          .filter((item) => !!item.mentorname)
          .sort((a, b) => new Date(b.mentorname).getTime() - new Date(a.mentorname).getTime());

        console.log('Sorted internships:', sortedData);
        setMentors(sortedData);
      })
      .catch(console.error);
  }, []);




  return (
    <section className="min-h-screen bg-cream text-fog px-6 py-10">

      <h2 className="text-5xl font-teachers font-semibold pl-2 mt-12 mb-4">
        Book a mentor
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-cream text-fog">
        {mentors.map((item) => (
          <MentorBooking
            key={item._id}
            mentorImage={item.mentorImage}
            mentorname={item.mentorname}
            linkedin={item.linkedin}
            calendly={item.calendly}
            role={item.role}
            categories={item.categories}
            topics={item.topics}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};


export default Internships;
