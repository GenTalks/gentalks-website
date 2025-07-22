import DiscordBanner from "../components/DiscordBanner";

const Community = () => {
  return (
    <div className="text-fog bg-cream">
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
        
    </div>
  );
};

export default Community;
