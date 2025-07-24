import DiscordBanner from '../components/DiscordBanner';
import { FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";
import { RiSuitcaseLine, RiGuideLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";

const FinancialAid = () => {
  return (
    <section className="bg-laurel text-cream">
        <div className="px-4 py-2 inline-block rounded-full border-laurel border-2 bg-cream text-laurel hover:border-cream hover:bg-laurel hover:text-cream mt-10 tracking-wide">
        <a href="/resources">
            Back to resources
        </a>
        </div>
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Financial aid
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
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <FaMoneyCheckAlt size={48} />
              <h1 className="mt-4 text-xl font-semibold">Financial Aid</h1>
              <p className="pt-6">
                Understand the FAFSA, CSS Profile, and how to apply for financial support with confidence.
              </p>
            </div>

            {/* Internships */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <RiSuitcaseLine size={48} />
              <h1 className="mt-4 text-xl font-semibold">Internships</h1>
              <p className="pt-6">
                Discover internships that build your resume and help you explore different career paths early.
              </p>
            </div>

            {/* Scholarships */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <FaUserGraduate size={48} />
              <h1 className="mt-4 text-xl font-semibold">Scholarships</h1>
              <p className="pt-6">
                Learn how to find and win scholarships that can ease the burden of tuition and fees.
              </p>
            </div>

            {/* High School Navigation */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <IoSchoolOutline size={48} />
              <h1 className="mt-4 text-xl font-semibold">Navigating High School</h1>
              <p className="pt-6">
                Tips, tools, and advice to help you succeed academically and socially in high school.
              </p>
            </div>

            {/* College Prep */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <LuSprout size={48} />
              <h1 className="mt-4 text-xl font-semibold">College Prep</h1>
              <p className="pt-6">
                From applications to admissions essays — get college-ready with confidence.
              </p>
            </div>

            {/* How to Adult */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <RiGuideLine size={48} />
              <h1 className="mt-4 text-xl font-semibold">How to Adult</h1>
              <p className="pt-6">
                Learn essential life skills: budgeting, time management, taxes, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <DiscordBanner />
        
    </section>
  );
};

export default FinancialAid;
