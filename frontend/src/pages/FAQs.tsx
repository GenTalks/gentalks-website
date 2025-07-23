import DiscordBanner from '../components/DiscordBanner';
import FAQComp from '../components/FAQComp';

const FAQs = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog mb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Frequently Asked Questions
        </h1>
        <p className="text-xl font-teachers p-4">
          the questions your dog thinks about in the shower when you're not home
        </p>
      </section>

      <section className="w-2/3 flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog mb-4 mx-auto">
        <h1 className="font-teachers font-bold text-5xl text-left">
          General Questions
        </h1>

        <div className="font-teachers font-normal text-2xl text-left transform -translate-x-40">
          <FAQComp question="What is GenTalks?" answer="GenTalks is a nonprofit organization committed to empowering the high school community with nurturing conversations about personal and academic growth. Through virtual mentorship calls, we help students get in touch with mentors." />
          <FAQComp question="Is GenTalks free?" answer="um *looks both ways* yes your honor *gulp* GenTalks will NEVER charge for our services. EVER. Pinky promise." />
          <FAQComp question="Can I still be a community member even if I'm not in high school?" answer="erm i actually dunno im just the web dev chat" />

        </div>
      </section>

      <section className="w-2/3 flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog mb-4 mx-auto">
        <h1 className="font-teachers font-bold text-5xl text-left">
          Students
        </h1>

        <div className="font-teachers font-normal text-2xl text-left transform -translate-x-40">
          <FAQComp question="What is GenTalks?" answer="GenTalks is a nonprofit organization committed to empowering the high school community with nurturing conversations about personal and academic growth. Through virtual mentorship calls, we help students get in touch with mentors." />
          <FAQComp question="Is GenTalks free?" answer="um *looks both ways* yes your honor *gulp*" />
          <FAQComp question="What is GenTalks?" answer="idk i swear i just told ya but my memory has been erm escaping a little faster today" />

        </div>
      </section>

      <section className="w-2/3 flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog mb-4 mx-auto">
        <h1 className="font-teachers font-bold text-5xl text-left">
          Mentors
        </h1>

        <div className="font-teachers font-normal text-2xl text-left transform -translate-x-40">
          <FAQComp question="What is GenTalks?" answer="GenTalks is a nonprofit organization committed to empowering the high school community with nurturing conversations about personal and academic growth. Through virtual mentorship calls, we help students get in touch with mentors." />
          <FAQComp question="Is GenTalks free?" answer="um *looks both ways* yes your honor *gulp* " />
          <FAQComp question="What is GenTalks?" answer="idk i swear i just told ya but my memory has been erm escaping a little faster today" />

        </div>
      </section>

      <section className="w-full flex flex-col items-center pt-12 space-y-6 tracking-wide bg-laurel">
        <DiscordBanner />
      </section>
      
        
    </div>
  );
};

export default FAQs;
