import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import MentorCard from "../components/MentorCard";

export interface Mentor {
  id: string;
  mentor_image: string;
  mentor_name: string;
  linkedin: string;
  calendly: string;
  title: string;
  categories: string[]; 
  tutoring: string[];   
}

const BookAMentor: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const { data, error } = await supabase
        .from("mentors")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setMentors(data);
    };

    fetchMentors();
  }, []);

  return (
    <section className="min-h-screen bg-cream text-fog px-6 py-10 flex">
      <h1 className="text-4xl font-teachers pl-16">book a mentor</h1>
      <div className="flex-1"></div>

      <div className="shadow-md flex flex-col gap-6 w-1/2 overflow-y-auto max-h-screen">
        {mentors.map((m) => (
          <MentorCard
            key={m.id}
            id={m.id}
            image={m.mentor_image}
            name={m.mentor_name}
            title={m.title}
            linkedin={m.linkedin}
            calendly={m.calendly}
            categories={m.categories} 
            tutoring={m.tutoring}     
          />
        ))}
      </div>
    </section>
  );
};

export default BookAMentor;
