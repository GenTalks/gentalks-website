import DiscordBanner from '../components/DiscordBanner';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useEffect } from "react";

const Media = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="text-fog bg-cream">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
          coming soon.
        </h1>
        <p className="text-xl font-teachers text-center">
          Making life a little sweeter one sprout at a time. <br /> <br />
          We're taking suggestions on what this page should be (previously content). Please make recommendations to our devs in the Discord!
        </p>
      </section>
      <DiscordBanner />

    </div>
  );
};

export default Media;
