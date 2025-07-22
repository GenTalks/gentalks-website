import DiscordBanner from '../components/DiscordBanner';
import { RiCommunityLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-laurel text-cream">
      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Our Philosophy
        </h1>
        <p className="w-2/3 text-xl font-teachers text-center">
          GenTalks connects students with resources, mentors, and community to form the Golden Honmoon. 
          Whether you’re navigating personal growth, seeking advice on how to adult, 
          or thinking about your career plans, GenTalks will be there for you.
        </p>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-laurel text-cream px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h1 className="text-5xl font-bosk text-center">Our values</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 tracking-widest">
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-xl font-teachers font-semibold pl-4 shadow-md w-full md:w-1/3">
              <RiCommunityLine size={40} />
              <h1 className="mt-8">
                Community
              </h1>
            </div>
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-xl font-teachers font-semibold pl-4 shadow-md w-full md:w-1/3">
              <IoAccessibility size={40} />
              <h1 className="mt-8">
                Accessibility
              </h1>
            </div>
            <div className="mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-xl font-teachers font-semibold pl-4 shadow-md w-full md:w-1/3">
              <FaHandHoldingHeart size={40} />
              <h1 className="mt-8">
                Empathy
              </h1>
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog">
        <div className="text-center max-w-3xl px-4 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bosk">
          <h1 className="mb-4">Our Journey</h1>
          <p className="text-lg lg:text-xl font-teachers">
            From the outside, GenTalks is a cozy community aiming to empower students through nurturing conversations.
            It looks like we’ve got everything together – a tight-knit community of future leaders and future makers working together to build a brighter future.
            But it wasn’t always like that.
          </p>
        </div>
      </section>

      <section className="flex flex-col py-12 tracking-wide bg-cream text-fog relative font-teachers space-y-24 px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <h1 className="text-3xl font-semibold text-left w-full lg:w-1/2">
                The storm came but it didn’t break us.
              </h1>
              <img
                src="https://a-static.besthdwallpaper.com/ive-s-wonyoung-in-either-way-mv-i-ve-mine-album-shoot-wallpaper-3554x1999-123576_53.jpg"
                alt="ive"
                className="w-full lg:w-1/2 rounded-xl shadow-lg"
              />
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
              <h1 className="text-3xl font-semibold text-right w-full lg:w-1/2">
                It taught us how to start again.
              </h1>
              <img
                src="https://m.media-amazon.com/images/I/51Sbg8+GByL._UXNaN_FMjpg_QL85_.jpg"
                alt="fiftyfifty"
                className="w-full lg:w-1/2 rounded-xl shadow-lg"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <h1 className="text-3xl font-semibold text-left w-full lg:w-1/2">
                We replanted – not in spite of the rain, but because of it.
              </h1>
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5e/b7/12/5eb712b8-331f-bb2d-d628-cb1d965f869f/196922581403_Cover.jpg/1200x1200bf-60.jpg"
                alt="v"
                className="w-full lg:w-1/2 rounded-xl shadow-lg"
              />
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
              <h1 className="text-3xl font-semibold text-right w-full lg:w-1/2">
                We grew.
              </h1>
              <img
                src="https://i1.sndcdn.com/artworks-000528107493-n92tbz-t500x500.jpg"
                alt="bts"
                className="w-full lg:w-1/2 rounded-xl shadow-lg"
              />
            </div>

            <div className="text-center pt-16">
              <h1 className="text-4xl font-bold">
                And now we invite you to join us. Grow with us.
              </h1>
            </div>

          </div>
        </section>





      
      <section className="bg-laurel mt-12">
        <DiscordBanner />
      </section>
      
    </div>
  );
};

export default About;
