import gtLogoTp from '../assets/icons/gt_steam_tp.png';
import LearnMoreButton from '../components/LearnMore'

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src={gtLogoTp}
        alt="CAPYBARA"
        className="absolute inset-0 object-cover"
        style={{ top: '-40px', width: 'auto', height: 'auto', objectPosition: '90% 10%'}}
      />

      <div className="absolute inset-0 bg-laurel opacity-70" />

      <div className="relative z-10 w-full flex flex-col items-center py-8 font-teachers space-y-6 text-cream">
        <h1 className="self-end text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-right mr-[8rem] mt-[1rem] lg:mr-[20rem] lg:mt-[5rem]">
          GenTalks
        </h1>
        <h3 className="self-end text-lg sm:text-2xl md:text-2xl lg:text-6xl text-right mr-[5rem] mt-[2rem] lg:mr-[15rem]">
          Grow with us
        </h3>
        <div className="mr-[-36rem] lg:mr-[-56rem] pt-4 scale-125">
          <LearnMoreButton to="/ourstory"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
