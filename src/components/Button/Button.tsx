import { ButtonHTMLAttributes, FC } from 'react';
import './Button.css';

const sizes = ['small', 'large'] as const;
type Size = typeof sizes[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  bgcolor?: string;
  size?: Size;
};

const Button: FC<ButtonProps> = (data) => {
  const {bgcolor, size, children} = data;
  let btnStyles = ``;
  let className = '';

  const sheets = document.styleSheets;
  const lastStyleSheet = sheets[sheets.length - 1];


  if (bgcolor) {
    btnStyles += `background-color: ${bgcolor};`;
  }

  const isValid = (size: Size) => {
    if (!sizes.includes(size)) {
      throw new Error('Invalid type provided to size attribute');
    }

    return true;
  };
  
  if (size && isValid(size)) {
    className += ` ${size}`;
  }

  if (btnStyles) {
    btnStyles = `.custom {
      ${btnStyles}
    }`
    lastStyleSheet.insertRule(btnStyles, lastStyleSheet.cssRules.length);
    className += ' custom';
  }


  return <button className={className} {...data}>{children}</button>
};

export default Button;