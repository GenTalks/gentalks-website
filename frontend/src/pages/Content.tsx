import DiscordBanner from "../components/DiscordBanner";

const Media = () => {
  return (
    <div className="text-fog bg-cream">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
          coming soon.
        </h1>
        <p className="text-xl font-teachers text-center">
          We're baking cookies but we burnt the past 30 batches. A non-burnt batch is coming soon!
        </p>
      </section>
      <DiscordBanner />
    </div>
  );
};

export default Media;
