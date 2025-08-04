import DiscordBanner from "../components/DiscordBanner";

const Contact = () => {
  return (
    <div className="text-fog bg-cream">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide ">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
          contact us!
        </h1>
        <p className="text-xl font-teachers">
          We're always available to talk and will respond as fast as possible!
          Feel free to join our community, and connect with us on our socials!
        </p>
      </section>

      <section className="w-2/3 flex flex-col py-8 space-y-6 items-center mx-auto tracking-wide">
        <h1 className="text-xl font-teachers py-4">
          Follow us on{" "}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Instagram
          </a>{" "}
        </h1>

        <h1 className="text-xl font-teachers py-4">
          Follow us on{" "}
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            TikTok
          </a>{" "}
        </h1>

        <h1 className="text-xl font-teachers text-left py-4">
          Follow our{" "}
          <a
            href="https://www.linkedin.com/company/gentalks/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            LinkedIn
          </a>{" "}
          page for the latest news and position openings
        </h1>
      </section>

      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide mb-12">
        <p className="text-xl font-teachers mt-8">
          Email us at <strong>gentalks.official@gmail.com</strong> or join our
          Discord community below!
        </p>
      </section>

      <div className="py-16 bg-caramel">
        <DiscordBanner />
      </div>
    </div>
  );
};

export default Contact;
