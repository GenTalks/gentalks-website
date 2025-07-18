import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <Link to="/">
        <img
          src="gt_regular.png"  
          alt="GenTalks Home"
          className="h-10 w-10 rounded-full hover:opacity-80 transition duration-200"
        />
      </Link>
    )
};
export default HomeButton;
