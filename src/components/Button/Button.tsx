import { ButtonHTMLAttributes, FC } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  basic?: boolean;
};

const Button: FC<ButtonProps> = ({basic, children, ...props}) => {
  const btnClassName = basic ? 'basic' : '';

  return <button className={btnClassName} {...props}>{children}</button>
};

export default Button;