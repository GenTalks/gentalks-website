import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import StudentProjectCard from "../components/StudentProjectCard";

export interface StudentProject {
  id: string;
  title: string;
  creator: string;
  categories: string[];
  project_url: string;
  date_featured: string;
}

const StudentProjects: React.FC = () => {
  const [studentProjects, setStudentProjects] = useState<StudentProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("student_projects")
        .select("*")
        .order("date_featured", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      const filtered = data.filter((p) => !!p.date_featured);
      setStudentProjects(filtered);
    };

    fetchProjects();
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studentProjects.map((item) => (
          <StudentProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            creator={item.creator}
            categories={item.categories}
            projectUrl={item.project_url}
            dateFeatured={item.date_featured}
          />
        ))}
      </div>
    </section>
  );
};

export default StudentProjects;
