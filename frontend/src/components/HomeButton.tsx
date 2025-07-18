import { Link } from 'react-router-dom';
import gtLogo from '../assets/icons/gt_regular.png';

const HomeButton = () => {
    return (
        <Link to="/">
        <img
          src={gtLogo}  
          alt="GenTalks Home"
          className="h-10 w-10 rounded-full hover:opacity-80 transition duration-200"
        />
      </Link>
    )
};
export default HomeButton;
