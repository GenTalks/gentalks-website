import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import NavHSCard from "../components/NavHSCard";

import { RiSuitcaseLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";

export interface CollegePrep {
  _id: string;
  title: string;
  author: string;
  tags: string[];
  resourceUrl: string;
  datePosted: string;
}

const collegeprepQuery = `
  *[_type == "collegeprep"] | order(_createdAt desc) {
    _id,
    title,
    author,
    tags,
    resourceUrl,
    datePosted
  }
`;

const CollegePrep: React.FC = () => {
  const [collegeprep, setCollegePrep] = useState<CollegePrep[]>([])


  useEffect(() => {
    sanityClient
      .fetch(collegeprepQuery)
      .then((data: CollegePrep[]) => {
        const sortedData = data
          .filter((item) => !!item.datePosted) // optional: skip items without date
          .sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());

        console.log('Sorted resources:', sortedData);
        setCollegePrep(sortedData);
      })
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

      {/* Category buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          to="/study-resources"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <FaMoneyCheckAlt size={20} />
          Study Resources
        </Link>

        <Link
          to="/internships"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <RiSuitcaseLine size={20} />
          Internships
        </Link>

        <Link
          to="/scholarships"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <FaUserGraduate size={20} />
          Scholarships
        </Link>

        <Link
          to="/navigating-high-school"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <MdOutlinePsychology size={20} />
          Navigating High School
        </Link>

        <Link
          to="/college-prep"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <IoSchoolOutline size={20} />
          College Prep
        </Link>

        <Link
          to="/how-to-adult"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <GiHeartWings size={20} />
          How to Adult
        </Link>
      </div>

      <h2 className="text-5xl font-teachers font-semibold pl-2 mt-12 mb-4">
        Preparing for college
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-cream text-fog">
        {collegeprep.map((item) => (
          <NavHSCard
            key={item._id}
            title={item.title}
            author={item.author}
            resourceUrl={item.resourceUrl}
            tags={item.tags}
            datePosted={item.datePosted}


          />
        ))}
      </div>
    </section>
  );
};

export default CollegePrep;
