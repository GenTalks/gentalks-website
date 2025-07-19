import { Link } from 'react-router-dom';

interface LearnMoreButtonProps {
  to: string;
}

const LearnMoreButton = ({ to }: LearnMoreButtonProps) => {
  return (
    <Link to={to}>
      <button className="bg-cream text-fog border-chocolate border-1 text-lg px-5 py-4 rounded-[30px] hover:text-capybara font-teachers">
        Learn More
      </button>
    </Link>
  );
};

export default LearnMoreButton;
