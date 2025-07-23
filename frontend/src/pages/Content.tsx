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
    <div className="text-cream bg-laurel">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          GenContent
        </h1>
        <p className="text-xl font-teachers">
          Making life a little sweeter one sprout at a time.
        </p>
      </section>

      <section className="py-16 px-6 space-y-24 tracking-wide">
          {/*Instagram Feed*/}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 justify-center py-6 mb-12">
              <FaInstagram size={36} className="text-cream" />
              <h2 className="text-4xl font-bosk text-center">Latest Instagram Posts</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Instagram Post Card Slot 1*/}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border-sage border-8">
                <iframe
                  src="https://www.instagram.com/p/DJ-P14pymAr/embed"
                  width="100%"
                  height="500"
                  allowTransparency={true}
                  allow="encrypted-media"
                  className="rounded-lg shadow-lg"
                  title="Instagram Embed"
                ></iframe>
              </div>
                {/* Instagram Post Card Slot 2*/}
              <div className="bg-cream rounded-xl overflow-hidden shadow-md border-sage border-8">
                <iframe
                  src="https://www.instagram.com/p/DJK1CieyYmv/embed"
                  width="100%"
                  height="500"
                  allowTransparency={true}
                  allow="encrypted-media"
                  className="rounded-lg shadow-lg"
                  title="Instagram Embed"
                ></iframe>
              </div>
              {/* Instagram Post Card Slot 3*/}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border-sage border-8">
                <iframe
                  src="https://www.instagram.com/reel/C-RN1VAunGf/embed"
                  width="100%"
                  height="500"
                  allowTransparency={true}
                  allow="encrypted-media"
                  className="rounded-lg shadow-lg"
                  title="Instagram Embed"
                ></iframe>
              </div>
            </div>
          </div>

          {/* TikTok Feed */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 justify-center py-6 mb-12">
              <FaTiktok size={36} className="text-cream" />
              <h2 className="text-4xl font-bosk text-center">Latest TikToks</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* TikTok Embed Slot 1*/}
              <div className="w-full max-w-md mx-auto my-8">
                <blockquote
                  className="tiktok-embed border-sage border-8 rounded-xl"
                  cite="https://www.tiktok.com/@misojenkitchen/video/7504397042979065118"
                  data-video-id="7504397042979065118"
                  style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                  <section></section>
                </blockquote>
              </div>

              {/* TikTok Embed Slot 2*/}
              <div className="w-full max-w-md mx-auto my-8">
                <blockquote
                  className="tiktok-embed border-sage border-8 rounded-xl"
                  cite="https://www.tiktok.com/@misojenkitchen/video/7419092191965924639"
                  data-video-id="7419092191965924639"
                  style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                  <section></section>
                </blockquote>
              </div>

              {/* TikTok Embed Slot 3*/}
              <div className="w-full max-w-md mx-auto my-8">
                <blockquote
                  className="tiktok-embed border-sage border-8 rounded-xl"
                  cite="https://www.tiktok.com/@misojenkitchen/video/7255096163118992682"
                  data-video-id="7255096163118992682"
                  style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                  <section></section>
                </blockquote>
              </div>
            </div>
          </div>

        </section>
      <DiscordBanner />
        
    </div>
  );
};

export default Media;
