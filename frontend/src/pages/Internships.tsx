import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import InternshipCard from "../components/InternshipCard";

import { RiSuitcaseLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";

export interface Internship {
  _id: string;
  title: string;
  company: string;
  location: string;
  compensation: string;
  industries: string[];
  pros: string[];
  cons: string[];
  applicationUrl: string;
  datePosted: string;
}

const internshipsQuery = `
  *[_type == "internship"] | order(_createdAt desc) {
    _id,
    title,
    company,
    location,
    compensation,
    industries,
    pros,
    cons,
    applicationUrl,
    datePosted  // <-- add here
  }
`;


const Internships: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([])

  useEffect(() => {
    sanityClient
        .fetch(internshipsQuery)
        .then((data: Internship[]) => setInternships(data))
        .catch(console.error);
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
        <Link to="/financial-aid" className="category-link">
          <FaMoneyCheckAlt size={18} /> Financial Aid
        </Link>
        <Link to="/internships" className="category-link">
          <RiSuitcaseLine size={20} /> Internships
        </Link>
        <Link to="/scholarships" className="category-link">
          <FaUserGraduate size={20} /> Scholarships
        </Link>
        <Link to="/navigating-high-school" className="category-link">
          <MdOutlinePsychology size={20} /> Navigating High School
        </Link>
        <Link to="/college-prep" className="category-link">
          <IoSchoolOutline size={20} /> College Prep
        </Link>
        <Link to="/how-to-adult" className="category-link">
          <GiHeartWings size={20} /> How to Adult
        </Link>
      </div>

      <h2 className="text-5xl font-teachers font-semibold pl-2 mt-12 mb-4">
        Internships
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {internships.map((item) => (
          <InternshipCard
            key={item._id}
            title={item.title}
            company={item.company}
            compensation={item.compensation}
            industries={item.industries}
            pros={item.pros}
            cons={item.cons}
            applicationUrl={item.applicationUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Internships;
