import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import StudentProjectCard from "../components/StudentProjectCard";


export interface StudentProject {
  _id: string;
  title: string;
  creator: string;
  categories: string[];
  projectUrl: string;
  dateFeatured: string;
}

const studentProjectQuery = `
  *[_type == "studentProject"] | order(_createdAt desc) {
    _id,
    title,
    creator,
    categories,
    projectUrl,
    dateFeatured,
  }
`;

const StudentProjects: React.FC = () => {
  const [studentProjects, setStudentProject] = useState<StudentProject[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(studentProjectQuery)
      .then((data: StudentProject[]) => {
        const sortedData = data
          .filter((item) => !!item.dateFeatured) 
          .sort(
            (a, b) =>
              new Date(b.dateFeatured).getTime() -
              new Date(a.dateFeatured).getTime()
          );

        console.log("Sorted internships:", sortedData);
        setStudentProject(sortedData);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="min-h-screen bg-cream text-fog px-6 py-10">
      <div className="mb-8">
        <Link
          to="/student-center"
          className="inline-flex items-center px-4 py-2 rounded-full border-2 border-fog hover:bg-fog hover:text-cream transition text-base font-teachers"
        >
          ← Back to resources
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 font-teachers">Categories</h1>

      <h2 className="text-5xl font-teachers font-semibold pl-2 mt-12 mb-4">
        Student Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-cream text-fog">
        {studentProjects.map((item) => (
          <StudentProjectCard
            key={item._id}
            title={item.title}
            creator={item.creator}
            categories={item.categories}
            projectUrl={item.projectUrl}
            dateFeatured={item.dateFeatured}
          />
        ))}
      </div>
    </section>
  );
};

export default StudentProjects;
