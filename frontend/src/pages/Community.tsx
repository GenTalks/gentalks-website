import DiscordBanner from "../components/DiscordBanner";
import { TfiAnnouncement } from "react-icons/tfi";

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
      
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-laurel text-cream">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          GenTalks Community
        </h1>
        <p className="text-xl font-teachers">
          Moment makers make moments.
        </p>
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
