import { Link } from 'react-router-dom';

interface MentorButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const MentorButton = ({ to, label, onClick }: MentorButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className="bg-sage text-cream text-lg px-6 py-4 rounded-[30px] hover:bg-laurel font-teachers">
        {label}
      </button>
    </Link>
  );
};

export default MentorButton;
