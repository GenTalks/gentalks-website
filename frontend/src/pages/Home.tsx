import gtLogoTp from "../assets/icons/gt_steam_tp.png";
import DiscordBanner from "../components/DiscordBanner";
import MentorCarousel from "../components/MentorCarousel";
import ExploreButton from "../components/ExploreButton";
import FAQComp from "../components/FAQComp";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden tracking-wide">
      <div className="relative w-full h-[100vh">
        <img
          src={gtLogoTp}
          alt="CAPYBARA"
          className="max-w-[50%] max-h-[50%] object-cover"
          style={{ objectPosition: "90% 10%" }}
        />
        <div className="absolute inset-0 bg-laurel opacity-70" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center font-teachers text-cream space-y-6 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-right self-end mr-[8rem] lg:mr-[20rem]">
            GenTalks
          </h1>
          <h3 className="text-md sm:text-2xl md:text-3xl lg:text-6xl text-right self-end mr-[6rem] lg:mr-[15rem]">
            Grow with us
          </h3>
        </div>
      </div>

      <section className="bg-cream text-fog py-20 px-8 font-teachers">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Innovation Meets Impact
            </h2>

            <div className="border-laurel border-2 bg-creaam text-laurel rounded-full scale-125 hover:bg-laurel hover:text-cream">
              <ExploreButton to="/community" label="GenTalks" />
            </div>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed">
            GenTalks is empowering a student-led community through mentorship,
            storytelling, and accessible resources as we aim to create the next
            generation of changemakers.
          </p>
        </div>

        <div className="w-3/4 border-b border-laurel py-4 pt-20 mx-auto" />
      </section>

      <section className="bg-cream py-12 px-8 font-teachers">
        <div className="flex justify-center text-fog">
          <h2 className="text-2xl lg:text-4xl font-bold text-center">
            GenStats
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-center text-laurel items-center text-4xl font-bosk pt-16 gap-8 md:gap-0">
          <div className="w-full md:w-1/3 py-8">
            5+ <br />
            <span className="text-lg font-teachers">Mentors</span>
          </div>
          <div className="w-full md:w-1/3 py-8">
            0+ <br />
            <span className="text-lg font-teachers">GenTalks booked</span>
          </div>
          <div className="w-full md:w-1/3 py-8">
            80+ <br />
            <span className="text-lg font-teachers">Community members</span>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 bg-laurel">
        <MentorCarousel />
      </section>

      <section className="relative w-full overflow-hidden py-40 px-4 sm:px-8 bg-cream">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <div className="w-full lg:w-1/2 font-teachers flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-20">
            <h1 className="text-5xl font-bold mb-12 text-fog">
              Frequently Asked Questions
            </h1>
            <div className="inline-block border-laurel border-2 bg-creaam text-laurel rounded-full scale-125 hover:bg-laurel hover:text-cream lg:ml-6">
              <ExploreButton to="/faqs" label="all FAQs" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-4 font-teachers items-center">
            <FAQComp
              question="What am I able to get mentored on?"
              answer="At GenTalks, we foster a positive environment designed to empower the academic community."
            />
            <FAQComp
              question="Do I have to pay for GenTalks' services?"
              answer="Never. Our program will always be free."
            />
            <FAQComp
              question="How can I join the community?"
              answer="Our Discord community is linked right below."
            />
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 px-8 bg-laurel">
        <DiscordBanner />
      </section>
    </div>
  );
};

export default Home;
