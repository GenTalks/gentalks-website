import DiscordBanner from '../components/DiscordBanner';

const FAQs = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-laurel mb-12">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Frequently Asked Questions
        </h1>
        <p className="text-xl font-teachers">
          the questions your pet asks when you're not home
        </p>
      </section>


      <DiscordBanner />
        
    </div>
  );
};

export default FAQs;
