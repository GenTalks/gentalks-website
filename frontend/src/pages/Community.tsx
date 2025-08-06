import DiscordBanner from "../components/DiscordBanner";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuSprout } from "react-icons/lu";
import { RiNotification4Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import DiscordButton from "../components/DiscordButton";

const Community = () => {
  return (
    <section className="text-fog bg-cream">
      <section className="py-16 px-6 space-y-24 tracking-wide">
        {/*Featured Announcement*/}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <TfiAnnouncement size={36} className="text-fog" />
            <h2 className="text-4xl font-teachers text-center">
              Community Announcements
            </h2>
          </div>
          <div className="border-fog border-2 bg-cream text-fog p-8 rounded-xl shadow-lg font-teachers text-lg leading-relaxed mt-8">
            <div className="text-left px-4 font-semibold tracking-widest">
              date posted: August 1, 2025
            </div>

            <hr className="my-4 border-t-2 border-fog" />

            <div className="px-4 text-left tracking-wide">
              it's hard launch day! hello everyone, we're the developer team at
              GenTalks, and we're still working on the website. a little bit
              about GenTalks -- we want to help high schoolers build their
              future. click the button below to join our Discord community,
              whether you're a high school student or you just want to support
              our journey! thank you everyone so much for growing with us 😉
            </div>

            <div className="mt-4">
              <DiscordButton />
            </div>
            {/*Other reference button
            <div className="px-4 py-2 inline-block rounded-full border-cream border-2 bg-laurel text-cream hover:border-laurel hover:bg-cream hover:text-laurel mt-6 tracking-wide">
              
            </div>
            */}
          </div>
        </div>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-caramel text-fog px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 flex flex-col items-center gap-6">
            <h1 className="text-4xl font-teachers text-center">grow with us</h1>
            <p className="w-2/3 font-teachers text-xl text-center">
              our discord community is a vibrant online space for growth, where
              members uplift each other and share valuable insights on careers
              and life.
            </p>
            <DiscordButton />
          </div>

          <div className="grid gap-8 tracking-wide grid-cols-1 md:grid-cols-3">
            {/* Resources */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <LuSprout size={48} />
              <h1 className="mt-4 text-xl font-semibold">
                exclusive resources
              </h1>
              <p className="pt-6">
                access unique tools and a supportive community available only at
                GenTalks
              </p>
              <div className="px py-2 inline-block hover:text-laurel underline mt-4 tracking-wide">
                <a href="/resources">view resources</a>
              </div>
            </div>

            {/* Notification */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <RiNotification4Line size={48} />
              <h1 className="mt-4 text-xl font-semibold">access community events</h1>
              <p className="pt-6">
                get real time updates and access our community events and webinars
                events!
              </p>
            </div>

            {/* Mentorship */}
            <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <FaChalkboardTeacher size={48} />
              <h1 className="mt-4 text-xl font-semibold">mentorship program</h1>
              <p className="mt-4">
                access insight and guidance from peers and alumni casually or through our mentorship program.
              </p>
              <div className="px py-2 inline-block hover:text-laurel underline mt-4 tracking-wide">
                <a href="/book-a-mentor">book a mentor</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream text-fog w-full flex flex-col items-center py-8 space-y-6 track-wide">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-auto">
          <div className="pl-8 w-full lg:w-1/2">
            <h1 className="font-semibold font-teachers text-4xl text-center">
              student ambassador program
            </h1>
            <p className="font-teachers font-normal text-center text-xl mt-4 px-8 mb-8">
              we will soon be opening student ambassador program applications.
              stay tuned and join our discord for the latest updates!
            </p>
          </div>
          <img
            src="https://cdn.corenexis.com/file/c/89269482.png"
            alt="matcha"
            className="pr-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-auto">
          <div className="pr-8 w-full lg:w-1/2">
            <h1 className="text-4xl font-semibold font-teachers text-center">
              mentor program
            </h1>
            <p className="font-teachers font-normal text-center text-xl mt-4 px-8 mb-8">
              we will soon be opening mentor program applications. stay tuned
              and join our discord for the latest updates!
            </p>
          </div>
          <img
            src="https://cdn.corenexis.com/file/c/31586122.png"
            alt="matcha"
            className="pl-8 w-full lg:w-1/2 rounded-xl shadow-lg mt-4 lg:mt-0"
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 px-8 bg-caramel">
        <DiscordBanner />
      </section>
    </section>
  );
};

export default Community;
