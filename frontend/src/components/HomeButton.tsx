import { Link } from 'react-router-dom';
import gtLogo from '../assets/icons/gt_steam.png';

interface HomeButtonProps {
  onClick?: () => void;
}

const HomeButton = ({ onClick }: HomeButtonProps) => {
    return (
        <Link to="/" onClick = {onClick}>
        <img
          src={gtLogo}  
          alt="GenTalks Home"
          className="h-16 w-16 rounded-full hover:opacity-90 border-2 border-evergreen transition duration-200 tracking-wide"
        />
      </Link>
    )
};
export default HomeButton;
