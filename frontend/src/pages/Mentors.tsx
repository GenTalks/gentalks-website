import DiscordBanner from '../components/DiscordBanner';

const Mentors = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-laurel mb-12">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Book a mentor
        </h1>
        <p className="text-xl font-teachers">
          u get a mentor! AND u get a mentor! buy zero get one free! (legally ofc)
        </p>
      </section>


      <DiscordBanner />
        
    </div>
  );
};

export default Mentors;
