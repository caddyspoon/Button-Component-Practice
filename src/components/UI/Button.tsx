import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  reset?: boolean; // reset을 선택적 프로퍼티로 변경
}

const Button = ({ children, onClick, className = "", reset = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${reset ? classes.reset : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
