import { Link } from "react-router-dom";

interface ExploreButtonProps {
  to: string;
  label: string;
}

const ExploreButton = ({ to, label }: ExploreButtonProps) => {
  return (
    <Link to={to} className="inline-block px-6 py-3 rounded-full">
      Explore {label}
    </Link>
  );
};

export default ExploreButton;
