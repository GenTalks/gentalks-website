import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

const NavButton = ({ to, label, onClick, className }: NavButtonProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`py-4 px-6 rounded-full font-teachers tracking-wide transition-colors duration-300 hover:text-laurel ${className ?? ''}`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
