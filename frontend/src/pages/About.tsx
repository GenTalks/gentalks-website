import DiscordBanner from "../components/DiscordBanner";
import { RiCommunityLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { LuSprout } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-caramel text-fog">
      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
          our philosophy
        </h1>
        <p className="w-2/3 text-xl font-teachers text-center">
          GenTalks connects students with resources, mentors, and community to
          form the Golden Honmoon. Whether you’re navigating personal growth,
          seeking advice on how to adult, or thinking about your career plans,
          GenTalks will be there for you.
        </p>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-caramel text-fog px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h1 className="text-5xl font-teachers text-center">our values</h1>
          </div>

          <div className="grid gap-8 tracking-wide grid-cols-1 md:grid-cols-3">
            {/* Community */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <RiCommunityLine size={48} />
              <h1 className="mt-4 text-xl font-semibold">Community</h1>
              <p className="mt-auto pt-6">
                We are committed to being a safe space where students feel
                supported and valued.
              </p>
            </div>

            {/* Empathy */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <LuHeartHandshake size={48} />
              <h1 className="mt-4 text-xl font-semibold">Empathy</h1>
              <p className="pt-6">
                We are committed to lead with compassion and understanding.
              </p>
            </div>

            {/* Accessibility */}
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
              <IoAccessibility size={48} />
              <h1 className="mt-4 text-xl font-semibold">Accessibility</h1>
              <p className="mt-auto pt-6">
                We are committed to providing help to all, regardless of
                background or circumstance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog">
        <div className="text-center max-w-3xl px-4 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-teachers">
          <h1 className="mb-4">our journey</h1>
          <p className="text-lg lg:text-xl font-teachers">
            from the outside, GenTalks is a cozy community aiming to empower
            students through nurturing conversations. it looks like we’ve got
            everything together – a tight-knit community of future leaders and
            future makers working together to build a brighter future. but it
            wasn’t always like that.
          </p>
        </div>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-cream text-fog relative font-teachers space-y-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <h1 className="text-3xl font-semibold text-left w-full lg:w-1/2">
              the storm came but it didn’t break us.
            </h1>
            <img
              src="https://i.pinimg.com/originals/f4/ec/15/f4ec154d18b85efea1c2a49c5bbd29ee.png"
              alt="matcha"
              className="w-full lg:w-1/2 rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <h1 className="text-3xl font-semibold text-right w-full lg:w-1/2">
              it taught us how to start again.
            </h1>
            <img
              src="https://i.pinimg.com/originals/f4/ec/15/f4ec154d18b85efea1c2a49c5bbd29ee.png"
              alt="matcha"
              className="w-full lg:w-1/2 rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <h1 className="text-3xl font-semibold text-left w-full lg:w-1/2">
              we replanted – not in spite of the rain, but because of it.
            </h1>
            <img
              src="https://i.pinimg.com/originals/f4/ec/15/f4ec154d18b85efea1c2a49c5bbd29ee.png"
              alt="matcha"
              className="w-full lg:w-1/2 rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <h1 className="text-3xl font-semibold text-right w-full lg:w-1/2">
              we grew.
            </h1>
            <img
              src="https://i.pinimg.com/originals/f4/ec/15/f4ec154d18b85efea1c2a49c5bbd29ee.png"
              alt="matcha"
              className="w-full lg:w-1/2 rounded-xl shadow-lg"
            />
          </div>

          <div className="text-center mt-auto">
            <h1 className="text-4xl font-bold flex justify-center items-center gap-2 text-fog">
              and now we invite you to join us. grow with us.
              <span className="text-matcha">
                <LuSprout size={40} />
              </span>
            </h1>
            <img
              src="https://i.pinimg.com/originals/f4/ec/15/f4ec154d18b85efea1c2a49c5bbd29ee.png"
              alt="matcha"
              className="w-full rounded-xl shadow-lg scale-75"
            />
          </div>
        </div>
      </section>

      <section className="bg-caramel mt-12 pb-12">
        <DiscordBanner />
      </section>
    </div>
  );
};

export default About;
