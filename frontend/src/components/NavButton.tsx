import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavButton = ({ to, label, onClick }: NavButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className="text-fog text-lg px-8 py-4 hover:text-laurel font-teachers">
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
