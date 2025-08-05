import DiscordBanner from "../components/DiscordBanner";
import FAQComp from "../components/FAQComp";

const FAQs = () => {
  return (
    <div className="w-full bg-cream">
      <section className="w-full flex flex-col items-center py-16 space-y-6 tracking-wide bg-caramel text-fog">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
          frequently asked questions
        </h1>
        <p className="text-xl font-teachers p-4">
          the questions your dog thinks about in the shower when you're not home
        </p>
      </section>

      <div className="flex flex-col lg:flex-row text-fog bg-cream gap-8">
        <div className="hidden lg:block lg:w-1/4">
          {/* empty space or future component */}
        </div>
        <div className="w-full lg:w-3/4 px-4 space-y-8">
          <section className="w-full flex flex-col space-y-6 tracking-wide bg-cream text-fog py-8 mx-auto">
            <h1 className="font-teachers text-5xl py-8 text-center">
              general questions.
            </h1>

            <div className="font-teachers font-normal text-2xl text-left transform">
              <FAQComp
                question="What is GenTalks?"
                answer="GenTalks is a nonprofit organization committed to empowering the high school community with nurturing conversations about personal and academic growth. Through virtual mentorship calls, we help students get in touch with mentors."
              />
              <FAQComp
                question="Is GenTalks free?"
                answer="GenTalks will NEVER charge for our services. EVER. Pinky promise."
              />
              <FAQComp
                question="Can I still be a community member even if I'm not in high school?"
                answer="erm i actually dunno im just the web dev chat"
              />
              <FAQComp
                question="Does GenTalks have any open positions right now?"
                answer="As of right now, GenTalks does not have any openings. For the most accurate information, check our community page for the latest update."
              />
            </div>
          </section>

          <section className="w-full flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog py-4 mx-auto">
            <h1 className="font-teachers text-5xl py-8 text-center">
              students.
            </h1>

            <div className="font-teachers font-normal text-2xl text-left transform">
              <FAQComp
                question="Do I have to pay to be mentored at GenTalks?"
                answer="Never! Not now not ever."
              />
              <FAQComp
                question="What am I able to get mentored on?"
                answer="At GenTalks, our goal is to foster discussions focused on both personal and academic growth. We aim to blend professional insights with genuine conversations."
              />
              <FAQComp
                question="I don't know what mentor to pick. How can I decide on one?"
                answer="The Web Development Team is currently working on a feature that will streamline choosing a mentor. Here's some questions to consider: 'Is this mentor in a position I want more insight about?', 'Do they align in a field I'm interested in?' Feel free to try out different mentors -- you can always change your mind after completing a session!"
              />
              <FAQComp
                question="What if the mentor I want isn't available?"
                answer="We have amazing mentors all around who try their best to make themselves available and accessible to students. However, all mentorship is done on a volutneer basis so if a mentor is not available, we recommend finding someone that is available or joining our Discord."
              />
              <FAQComp
                question="What if I want to work with a mentor over a long period of time?"
                answer="Long term mentorship is not encouraged at GenTalks. tom pls help me in writing this i beg u :prayge:"
              />
              <FAQComp
                question="Can I request an extension to my GenTalk?"
                answer="idk."
              />
              <FAQComp
                question="I'm not from the U.S. or Canada region. Can I still book a GenTalk?"
                answer="Our mentors will likely have most of their career experience based on their careers in the North American region which may differ when compared to other regions in the world. If you wish to continue, please be aware of time zone differences."
              />
            </div>
          </section>

          <section className="w-full flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog py-4 mx-auto">
            <h1 className="font-teachers text-5xl py-8 text-center">
              mentors.
            </h1>

            <div className="font-teachers font-normal text-2xl text-left transform">
              <FAQComp
                question="What is mentoring at GenTalks like?"
                answer="At GenTalks, we offer a coffee-chat style of mentorship -- casual yet authentic conversations where students can learn from experienced mentors. Mentors have the freedom to choose who they engage with and what topics they'd like to discuss. They also have full control over their schedules and can take breaks whenever they need."
              />
              <FAQComp
                question="What sector or industry is GenTalks focused on?"
                answer="help im just a puny web dev pls dont find me :prayge:"
              />
              <FAQComp
                question="How is GenTalks different from other mentorship programs?"
                answer="GenTalks is completely free, as we do not monetize in any way. We heavily prioritize convenience and flexibility for our mentorship program. Unlike our older sibling, BobaTalks, our mentorship program specifically focuses on supporting the high school community."
              />
              <FAQComp
                question="I don't have any prior experience mentoring. Can I still apply?"
                answer="Absolutely! Many mentors are eager to help but aren't sure how to begin. Our laid-back approach is perfect for those who want to make an impact without the pressure of formal commitments. It offers a way for mentors to give back while keeping things flexible and enjoyable."
              />
              <FAQComp
                question="What does GenTalks look for in a mentor?"
                answer="i trully duno."
              />
              <FAQComp
                question="Does GenTalks monetize my time mentoring students?"
                answer="Never. We pinky promise the mentors too."
              />
            </div>
          </section>

          <section className="w-full flex flex-col py-8 space-y-6 tracking-wide bg-cream text-fog py-4 mx-auto">
            <h1 className="font-teachers text-5xl py-8 text-center">
              meetings.
            </h1>

            <div className="font-teachers font-normal text-2xl text-left transform pb-12">
              <FAQComp
                question="Can I ask mentors for a referral to their company?"
                answer="At GenTalks, we have a strict no-asking-for-referral rule as this is done to preserve the bandwidth and headspace of our mentors."
              />
              <FAQComp
                question="Can I ask mentors for internships or early career opportunities from mentors or their companies?"
                answer="While we understand the importance of your job search, mentors are here to guide high school students through the complexities of their personal and academic development -- not to provide job referrals. You may check out our 'Internships' tab on our Resources page to aid your internship search. "
              />
              <FAQComp
                question="What if I'm unable to attend a scheduled meeting?"
                answer="We understand. Life happens, we've been there too. If you're unable to attend a scheduled meeting, please notify your mentor as early as possible -- ideally with at least 24 hours' notice. You can reschedule through LinkedIn, Calendly, or email. We understand. Our mentors generously volunteer their time to support you. If plans change, please let them know -- it goes a long way in respecting their effort and commitment."
              />
              <FAQComp
                question="How should I prepare for my scheduled meeting?"
                answer="Take some time to conduct your reserach, compile questions, and have a game plan. While these meetings are casual, they're also an opportunity to get valuable professional feedback and advice. Relax and be yourself -- we want you to feel comfortable!"
              />
            </div>
          </section>
        </div>
      </div>
      <section className="w-full flex flex-col items-center pt-20 space-y-6 tracking-wide bg-caramel py-16">
        <DiscordBanner />
      </section>
    </div>
  );
};

export default FAQs;
