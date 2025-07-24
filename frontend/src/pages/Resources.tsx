import DiscordBanner from '../components/DiscordBanner';
import { FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";
import { RiSuitcaseLine, RiGuideLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className="bg-laurel text-cream">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          GenTalks Resources
        </h1>
        <p className="w-1/2 text-xl text-center font-teachers">
          Discover tools and guidance tailored to support your journey. From academic insights to career resources, explore resources that meet your needs.
        </p>
      </section>

      <section className="w-full flex flex-col py-12 space-y-6 fon-teachers bg-cream text-fog track-wide mb-16">
        <div className="items-left">
          <h1 className="w-full pl-48 text-left text-5xl font-semibold mt-8">
            Featured Resources
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-auto">
          <div className="pl-8 w-full lg:w-1/2">
            <h1 className="font-semibold text-4xl text-center">
              Approaching UC Essays
            </h1>
            <p className="px-12 py-8 font-teachers font-normal text-center text-xl mt-2">
              Want advice on tackling the UC essay prompts?
            </p>
            
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/415/001/large_2x/matcha-set-hand-drawn-illustrations-vector.jpg"
            alt="matcha"
            className="pr-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-auto">
          <div className="pl-8 w-full lg:w-1/2">
            <h1 className="font-semibold text-4xl text-center">
              FAFSA & CSS Profile, Simplified
            </h1>
            <p className="px-12 py-8 font-teachers font-normal text-center text-xl mt-2">
              Reading all those financial terms must be confusing. Don't worry, GenTalks is here to help!
            </p>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/415/001/large_2x/matcha-set-hand-drawn-illustrations-vector.jpg"
            alt="matcha"
            className="pr-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>
      </section>

      
      <section className="flex flex-col py-12 tracking-wide bg-laurel text-cream px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bosk text-center">Resources for Every Step</h1>
            <p className="w-2/3 font-teachers text-xl text-center">
              Wherever you're at, we've got something for you. From school to scholarships to adulting, explore tools made just for you.
            </p>
          </div>

          <div className="grid gap-8 tracking-wide grid-cols-1 md:grid-cols-3">
            {/* Financial Aid */}
              <Link
                to="/financial-aid"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <FaMoneyCheckAlt size={48} />
                <h1 className="mt-4 text-xl font-semibold">Financial Aid</h1>
                <p className="pt-6">Explore FAFSA, grants, and budgeting tips for students.</p>
              </Link>

              {/* Internships */}
              <Link
                to="/internships"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <RiSuitcaseLine size={48} />
                <h1 className="mt-4 text-xl font-semibold">Internships</h1>
                <p className="pt-6">Learn how to find internships, write resumes, and apply with confidence.</p>
              </Link>

              {/* Scholarships */}
              <Link
                to="/scholarships"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <FaUserGraduate size={48} />
                <h1 className="mt-4 text-xl font-semibold">Scholarships</h1>
                <p className="pt-6">Discover merit-based and identity-based scholarships, and how to win them.</p>
              </Link>

              {/* Navigating High School */}
              <Link
                to="/navigating-high-school"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <IoSchoolOutline size={48} />
                <h1 className="mt-4 text-xl font-semibold">Navigating High School</h1>
                <p className="pt-6">Course selection, time management, and how to survive & thrive in high school.</p>
              </Link>

              {/* College Prep */}
              <Link
                to="/college-prep"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <LuSprout size={48} />
                <h1 className="mt-4 text-xl font-semibold">College Prep</h1>
                <p className="pt-6">All things college: applications, essays, choosing the right school, and more.</p>
              </Link>

              {/* How to Adult */}
              <Link
                to="/how-to-adult"
                className="bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start hover:scale-[1.02] transition-transform duration-200"
              >
                <RiGuideLine size={48} />
                <h1 className="mt-4 text-xl font-semibold">How to Adult</h1>
                <p className="pt-6">Learn about taxes, jobs, health care, cooking, and real-world life skills.</p>
              </Link>
        </div>
        </div>
      </section>
      <DiscordBanner />  
    </section>
  );
};

export default Resources;
