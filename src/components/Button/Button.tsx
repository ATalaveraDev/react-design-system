import { ButtonHTMLAttributes, FC, useEffect, useRef } from 'react';
import './Button.css';
import React from 'react';
import styler from '../../helpers/styler';

const sizes = ['small', 'large'] as const;
type Size = typeof sizes[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  bgcolor?: string;
  color?: string;
  size?: Size;
};

const Button: FC<ButtonProps> = (data) => {
  const {bgcolor, color, size, children} = data;
  let className = '';

  const isValid = (size: Size) => {
    if (!sizes.includes(size)) {
      throw new Error('Invalid type provided to size attribute');
    }

    return true;
  };
  
  if (size && isValid(size)) {
    className += ` ${size}`;
  }

  let style = '';

  if (bgcolor) {
    style += `background-color: ${bgcolor};`;
  }

  if (color) {
    style += `color: ${color};`;
  }

  const MyButton: React.FC<any> = ({ children }) => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      ref.current!.setAttribute('style', style)
    }, []);
    
    return <button className={className} {...data} ref={ref}>{children}</button>;
  };

  const dynamicComponent = styler(MyButton, { children, style, className });

  return <>{dynamicComponent}</>
};

export default Button;