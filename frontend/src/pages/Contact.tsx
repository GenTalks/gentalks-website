import DiscordBanner from '../components/DiscordBanner';

const Contact = () => {
  return (
    <div className="text-fog bg-cream">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-laurel text-cream">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Contact Us!
        </h1>
        <p className="text-xl font-teachers">
          We're always available to talk and will respond as fast as possible! Feel free to join our community, and connect with us on our socials!
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

export default Contact;
