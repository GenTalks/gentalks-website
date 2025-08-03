import gtLogoTp from "../assets/icons/gt_steam_tp.png";
import DiscordBanner from "../components/DiscordBanner";
import MentorCarousel from "../components/MentorCarousel";
import ExploreButton from "../components/ExploreButton";
import FAQComp from "../components/FAQComp";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden tracking-wide bg-caramel text-fog">
      <div className="bg-basil relative w-full h-[100vh">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center font-teachers text-cream space-y-6 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-right self-end mr-[8rem] lg:mr-[20rem]">
            GenTalks
          </h1>
          <h3 className="text-md sm:text-2xl md:text-3xl lg:text-6xl text-right self-end mr-[6rem] lg:mr-[15rem]">
            Grow with us
          </h3>
        </div>

        <img
          src={gtLogoTp}
          alt="CAPYBARA"
          className="rounded-full max-w-[25%] max-h-[25%] object-cover"
        />
      </div>

      <section className="bg-cream text-fog py-20 px-8 font-teachers">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              innovation meets impact.
            </h2>

            <div className="border-laurel border-2 bg-cream text-laurel rounded-full scale-125 hover:border-basil hover:bg-basil hover:text-cream">
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
            our community at a glance
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-center text-laurel items-center text-4xl font-teachers pt-16 gap-8 md:gap-0">
          <div className="w-full md:w-1/3 py-8">
            5+ <br />
            <span className="text-lg font-teachers">mentors</span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/415/001/large_2x/matcha-set-hand-drawn-illustrations-vector.jpg"
              alt="matcha"
              className="w-full rounded-xl shadow-lg scale-75"
            />
          </div>
          <div className="w-full md:w-1/3 py-8">
            1+ <br />
            <span className="text-lg font-teachers">gentalks booked</span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/415/001/large_2x/matcha-set-hand-drawn-illustrations-vector.jpg"
              alt="matcha"
              className="w-full rounded-xl shadow-lg scale-75"
            />
          </div>
          <div className="w-full md:w-1/3 py-8">
            150+ <br />
            <span className="text-lg font-teachers">community members</span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/415/001/large_2x/matcha-set-hand-drawn-illustrations-vector.jpg"
              alt="matcha"
              className="w-full rounded-xl shadow-lg scale-75"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-laurel">
        <MentorCarousel />
      </section>

      <section className="relative w-full overflow-hidden py-40 px-4 sm:px-8 bg-cream">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <div className="w-full lg:w-1/2 font-teachers flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-20">
            <h1 className="text-5xl font-bold mb-12 text-fog">
              frequently asked questions
            </h1>
            <div className="inline-block border-laurel border-2 bg-creaam text-laurel rounded-full scale-125 hover:border-basil hover:bg-basil hover:text-cream lg:ml-6">
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

      <section className="relative w-full overflow-hidden py-20 px-8 bg-caramel">
        <DiscordBanner />
      </section>
    </div>
  );
};

export default Home;
