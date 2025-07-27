import DiscordBanner from '../components/DiscordBanner';

const Contact = () => {
  return (
    <div className="text-cream bg-laurel">
      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-laurel text-cream">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-bosk">
          Contact Us!
        </h1>
        <p className="text-xl font-teachers">
          We're always available to talk and will respond as fast as possible! Feel free to join our community, and connect with us on our socials!
        </p>
        <p className="text-xl font-teachers mt-8">
          Email us at <strong>contact.gentalks@gmail.com</strong> or join our Discord community below!
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
          Follow our {" "}
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

      <section className="w-full flex flex-col items-center py-8 space-y-6 tracking-wide bg-laurel text-cream">
        <p className="text-xl font-teachers mt-8">
          Email us at <strong>contact.gentalks@gmail.com</strong> or join our Discord community below!
        </p>
      </section>

      <DiscordBanner />

    </div>
  );
};

export default Contact;
