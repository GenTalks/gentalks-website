import React, { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";
import MentorBookingCard from "../components/MentorBookingCard";


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
    <section className="min-h-screen bg-cream text-fog px-6 py-10 flex">
      <h1 className="text-4xl font-teachers pl-16">book a mentor</h1>
      <div className="flex-1"></div>

      {/* Right side for cards */}
      <div className="flex flex-col gap-6 w-1/2 overflow-y-auto max-h-screen">
        {mentors
          .slice()
          .reverse() // so newest mentor is on top
          .map((item) => (
            <MentorBookingCard
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
