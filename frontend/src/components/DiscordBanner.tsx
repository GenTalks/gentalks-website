import gtLogo from "../assets/icons/gt_steam.png";
import DiscordButton from "../components/DiscordButton";

const JoinDiscordSection = () => {
  return (
    <section className="border-4 border-cream bg-laurel text-cream py-16 px-8 rounded-3xl max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 shadow-lg flex-wrap">
      <div className="flex-shrink-0">
        <img
          src={gtLogo}
          alt="GenTalks Logo"
          className="rounded-full border-caramel border-4 w-64 h-64 object-contain"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-6 max-w-3xl text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bosk">Join Gentalks!</h2>
        <p className="text-lg md:text-xl leading-relaxed font-teachers">
          An online space for growth, where members uplift each other and share valuable insights on careers and life.
        </p>
        <DiscordButton />
      </div>
    </section>
  );
};

export default JoinDiscordSection;
