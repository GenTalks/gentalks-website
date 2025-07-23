import DiscordBanner from "../components/DiscordBanner";
import { TfiAnnouncement } from "react-icons/tfi";
import { LuSprout } from "react-icons/lu";
import { RiNotification4Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";

const Community = () => {
  return (
    <section className="text-cream bg-laurel">
      <section className="py-16 px-6 space-y-24 tracking-wide">
        {/*Featured Announcement*/}
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <TfiAnnouncement size={36} className="text-cream" />
                <h2 className="text-4xl font-bosk text-center">Community Announcements</h2>
              </div>
              <div className="border-cream border-2 bg-laurel text-cream p-8 rounded-xl shadow-lg font-teachers text-lg leading-relaxed mt-8">
                <div className="text-left px-4 font-semibold tracking-widest">
                  Date posted: July 22, 2025
                </div>
  
                <hr className="my-4 border-t-2 border-cream" />
  
                <div className="px-4 text-left tracking-wide">
                  Content page is now ready for launch!
                </div>
  
                {/*Button*/}
                {/*<div className="px-4 py-2 inline-block rounded-full border-cream border-2 bg-laurel text-cream hover:border-laurel hover:bg-cream hover:text-laurel mt-6 tracking-wide">
                  <a href="/apply">
                    Apply here
                  </a>
                </div>*/}
              </div>
            </div>
      </section>
      
      <section className="flex flex-col py-12 tracking-wide bg-laurel text-cream px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h1 className="text-4xl font-bosk text-center">
              Grow with us 
            </h1>
          </div>

          <div className="grid gap-8 tracking-wide grid-cols-1 md:grid-cols-3">
            {/* Resources */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <LuSprout size={48} />
              <h1 className="mt-4 text-xl font-semibold">Exclusive resources</h1>
              <p className="pt-6">
               Access unique tools and a supportive community available only at GenTalks
              </p>
              <div className="px-4 py-2 inline-block rounded-full border-laurel border-2 bg-cream text-laurel hover:border-cream hover:bg-laurel hover:text-cream mt-9 tracking-wide">
                <a href="/resources">
                  View resources
                </a>
              </div>
            </div>
            

            {/* Notification */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <RiNotification4Line size={48} />
              <h1 className="mt-4 text-xl font-semibold">Early event access</h1>
              <p className="pt-6">
                Get exclusive updates and be the first to hear about upcoming events!
              </p>
              <div className="px-4 py-2 inline-block rounded-full border-laurel border-2 bg-cream text-laurel hover:border-cream hover:bg-laurel hover:text-cream mt-16 tracking-wide">
                <a href="https://discord.gg/dXBPVHgwaq">
                  Join Discord
                </a>
              </div>
            </div>

            {/* Mentorship */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <FaChalkboardTeacher size={48} />
              <h1 className="mt-4 text-xl font-semibold">Mentorship program</h1>
              <p className="mt-4">
                Access exclusive insight and guidance from industry professionals through our mentorship program.
              </p>
              <div className="px-4 py-2 inline-block rounded-full border-laurel border-2 bg-cream text-laurel hover:border-cream hover:bg-laurel hover:text-cream mt-10 tracking-wide">
                <a href="/book-a-mentor">
                  Book a mentor
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      
      <section className="w-full flex flex-col items-center py-8 space-y-6 track-wide mb-4">
        <div className="text-xl font-teachers">
          <h1>

          </h1>
        </div>
      </section>

      <DiscordBanner />
        
    </section>
  );
};

export default Community;
