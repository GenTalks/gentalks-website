import DiscordBanner from '../components/DiscordBanner';

const About = () => {
  return (
    <div>
      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-laurel text-cream">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Our Philosophy
        </h1>
        <p className="w-2/3 text-xl font-teachers text-center">
          GenTalks connects students with resources, mentors, and community to form the Golden Honmoon. 
          Whether you’re navigating personal growth, seeking advice on how to adult, 
          or thinking about your career plans, GenTalks will be there for you.
        </p>
      </section>

      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog mt-4">
        <div className="text-center max-w-3xl px-4 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bosk">
          <h1 className="mb-4">Our Journey</h1>
          <p className="text-lg lg:text-xl font-teachers">
            From the outside, GenTalks is a cozy community aiming to empower students through nurturing conversations.
            It looks like we’ve got everything together – a tight-knit community of future leaders and future makers working together to build a brighter future.
            But it wasn’t always like that.
          </p>
        </div>
      </section>

      <section className="flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog">
        <div>
          <h1 className="text-left text-3xl font-semibold font-teachers pl-8">
            The storm came but it didn’t break us.
          </h1>
          <h1 className="text-right text-3xl font-semibold font-teachers mt-12 pr-8">
            It taught us how to start again.
          </h1>
          <h1 className="text-left text-3xl font-semibold font-teachers mt-12 pl-8">
            We replanted – not in spite of the rain, but because of it.
          </h1>
          <h1 className="text-right text-3xl font-semibold font-teachers mt-12 pr-8">
            We grew.
          </h1>
          <h1 className="text-center text-4xl font-bold font-teachers mt-12">
            And now we invite you to join us. Grow with us.
          </h1>
        </div>
      </section>
      
      <section className="bg-laurel mt-12">
        <DiscordBanner />
      </section>
      
    </div>
  );
};

export default About;
