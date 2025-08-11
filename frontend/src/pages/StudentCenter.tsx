import DiscordBanner from "../components/DiscordBanner";
import { TfiAnnouncement } from "react-icons/tfi";
import ExploreButton from "../components/ExploreButton";


const StudentCenter = () => {
  return (
    <section className="text-fog bg-cream font-teachers">
      <section className="py-16 px-6 space-y-24 tracking-wide">
        {/*Featured Announcement*/}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <TfiAnnouncement size={36} className="text-fog" />
            <h2 className="text-4xl font-teachers text-center">
              Student Center Announcements
            </h2>
          </div>
          <div className="border-fog border-2 bg-cream text-fog p-8 rounded-xl shadow-lg font-teachers text-lg leading-relaxed mt-8">
            <div className="text-left px-4 font-semibold tracking-widest">
              date posted: August 10, 2025
            </div>

            <hr className="my-4 border-t-2 border-fog" />

            <div className="px-4 text-left tracking-wide">
              student center is coming soon, please stay tuned!
            </div>

            {/* <div className="mt-4">
              <DiscordButton />
            </div> */}
            {/* Other reference button */}
            {/* <div className="px-4 py-2 inline-block rounded-full border-cream border-2 bg-laurel text-cream hover:border-laurel hover:bg-cream hover:text-laurel mt-6 tracking-wide">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIpOiUV_nKq48-ifvL--rmpPAWVplYJ5Ux57auAAR43GEdmQ/viewform">
                Apply now!
              </a>
            </div> */}

          </div>
        </div>
      </section>

      <section className="bg-cream text-fog w-full flex flex-col items-center py-8 space-y-6 track-wide">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              featured projects
            </h2>

            <div className="border-laurel border-2 bg-cream text-laurel rounded-full scale-125 hover:border-basil hover:bg-basil hover:text-cream">
              <ExploreButton to="/student-projects" label="student projects" />
            </div>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed">
            got an idea? let's help you build your future. submit your idea, whether it's a passion project or
            game you want to make, in the application to get it reviewed and potentially featured
            on the website.
          </p>
        </div>
      </section>

      <div className="w-3/4 border-b border-laurel my-20 mx-auto" />

      <section className="bg-cream text-fog w-full flex flex-col items-center py-8 space-y-6 track-wide">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              student stories
            </h2>

            <div className="border-laurel border-2 bg-cream text-laurel rounded-full scale-125 hover:border-basil hover:bg-basil hover:text-cream">
              <ExploreButton to="/student-stories" label="student stories" />
            </div>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed">
            interested in sharing your story or making a blog post? submit your post idea to be potentially featured on the website!
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 px-8 bg-caramel">
        <DiscordBanner />
      </section>
    </section>
  );
};

export default StudentCenter;
