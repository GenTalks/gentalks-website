import gtLogoTp from '../assets/icons/gt_steam_tp.png';
import LearnMoreButton from '../components/LearnMore';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[100vh">
        <img
          src={gtLogoTp}
          alt="CAPYBARA"
          className="max-w-[50%] max-h-[50%] object-cover"
          style={{objectPosition: '90% 10%' }}
        />
        <div className="absolute inset-0 bg-laurel opacity-70" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center font-teachers text-cream space-y-6 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-right self-end mr-[8rem] lg:mr-[20rem]">
            GenTalks
          </h1>
          <h3 className="text-md sm:text-xl md:text-2xl lg:text-6xl text-right self-end mr-[5rem] lg:mr-[15rem]">
            Grow with us
          </h3>
          <div className="self-end mr-[8rem] lg:mr-[20rem] lg:pt-4 scale-80lg:scale-125">
            <LearnMoreButton to="/ourstory" />
          </div>
        </div>
      </div>

      <section className="bg-cream text-fog py-20 px-8 font-teachers">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold">What We Do</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            GenTalks empowers students through mentorship, storytelling, and hands-on projects. We bring together a passionate community of learners and changemakers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
