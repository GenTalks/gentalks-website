import { Link } from "react-router-dom";
import gtLogo from "../assets/icons/gt_steam.png";

interface GenDiscordProps {
  onClick?: () => void;
}

const GenDiscordButton = ({ onClick }: GenDiscordProps) => {
  return (
    <Link to="/" onClick={onClick}>
      <div className="border-4 border-chocolate max-w-md mx-auto rounded-3xl bg-cream px-6 py-6 flex flex-row items-center space-x-6 hover:shadow-lg transition-all tracking-wide">
        <img
          src={gtLogo}
          alt="GenTalks Home"
          className="h-20 w-20 border-2 border-chocolate rounded-full scale-125"
        />
        <h3 className="font-bosk text-laurel text-3xl text-center">
          GenTalks Discord
        </h3>
      </div>
    </Link>
  );
};

export default GenDiscordButton;
