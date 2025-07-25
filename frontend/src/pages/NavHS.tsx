import { Link } from 'react-router-dom';
import { RiSuitcaseLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";

const NavHS = () => {
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
          to="/financial-aid"
          className="flex items-center gap-2 px-5 py-3 border-2 border-fog rounded-lg hover:bg-laurel hover:text-cream transition font-teachers bg-cream"
        >
          <FaMoneyCheckAlt size={18} />
          Financial Aid
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
      <h2 className="text-5xl font-teachers font-semibold pl-16 mt-12">Navigating high school</h2>
    </section>
  );
};

export default NavHS;
