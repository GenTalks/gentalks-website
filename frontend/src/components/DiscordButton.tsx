import { Link } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";

const DiscordButton = () => {
  return (
    <Link
      to="https://discord.gg/dXBPVHgwaq"
      target="_blank"
      rel="noopener noreferrer"
      className="border-cream border-2 inline-flex items-center gap-3 bg-laurel text-cream text-lg font-teachers px-6 py-3 rounded-full hover:border-laurel hover:bg-cream hover:text-laurel transition"
    >
      <FaDiscord size={24} />
      join discord
    </Link>
  );
};

export default DiscordButton;
