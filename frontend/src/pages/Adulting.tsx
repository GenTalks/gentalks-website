import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdultingCard from "../components/AdultingCard";

import { RiSuitcaseLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { LuBookOpenText } from "react-icons/lu";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";

export interface Adulting {
  id: string;
  title: string;
  author: string;
  tags: string[];
  resource_url: string;
  date_posted: string;
}

const HowToAdult: React.FC = () => {
  const [items, setItems] = useState<Adulting[]>([]);

  useEffect(() => {
    async function loadResources() {
      const { data, error } = await supabase
        .from("how_to_adult")
        .select("*")
        .order("date_posted", { ascending: false });

      if (error) console.error("Error loading resources:", error);
      else setItems(data || []);
    }

    loadResources();
  }, []);

  return (
    <section className="min-h-screen bg-cream text-fog px-6 py-10">
      <div className="mb-8">
        <Link
          to="/resources"
          className="inline-flex items-center px-4 py-2 rounded-full border-2 border-fog hover:bg-fog hover:text-cream transition text-base font-teachers"
        >
          ← Back to resources
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 font-bosk">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/study-resources" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <LuBookOpenText size={20} /> Study Resources
        </Link>
        <Link to="/internships" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <RiSuitcaseLine size={20} /> Internships
        </Link>
        <Link to="/scholarships" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <FaUserGraduate size={20} /> Scholarships
        </Link>
        <Link to="/navigating-high-school" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <MdOutlinePsychology size={20} /> Navigating High School
        </Link>
        <Link to="/college-prep" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <IoSchoolOutline size={20} /> College Prep
        </Link>
        <Link to="/how-to-adult" className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream">
          <GiHeartWings size={20} /> How to Adult
        </Link>
      </div>

      <h2 className="text-5xl font-teachers font-semibold pl-2 mt-12 mb-4">
        How to Adult
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-cream text-fog">
        {items.map((item) => (
          <AdultingCard
            key={item.id}
            title={item.title}
            author={item.author}
            tags={item.tags}
            resourceUrl={item.resource_url}
            datePosted={item.date_posted}
          />
        ))}
      </div>
    </section>
  );
};

export default HowToAdult;
