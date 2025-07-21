import { Link } from 'react-router-dom';

interface MentorButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const MentorButton = ({ to, label, onClick }: MentorButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className="bg-laurel text-cream text-lg px-6 py-4 rounded-[30px] hover:opacity-90 font-teachers tracking-wide">
        {label}
      </button>
    </Link>
  );
};

export default MentorButton;
