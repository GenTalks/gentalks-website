import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavButton = ({ to, label, onClick }: NavButtonProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className="py-4 font-teachers tracking-wide">
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
