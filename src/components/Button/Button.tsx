import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import './Button.css';
import styler from '../../helpers/styler';

const sizes = ['small', 'large'] as const;
type Size = typeof sizes[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  bgcolor?: string | Function;
  color?: string;
  size?: Size;
};

const Button = forwardRef((data: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {bgcolor, color, size, ...restProps} = data;

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
    const bgColor = bgcolor instanceof Function ? bgcolor() : bgcolor;
    style += `background-color: ${bgColor};`;
  }

  if (color) {
    style += `color: ${color};`;
  }

  const MyButton = forwardRef((props: ButtonProps & {styleid: string}, ref: Ref<HTMLButtonElement>) => {
    const customProps = {
      ...restProps,
      className: `${props.styleid}${className}`
    }
    
    return <button ref={ref} {...customProps}>{customProps.children}</button>;
  });

  const dynamicComponent = styler(MyButton, { children: restProps.children, style, className, ref });

  return <>{dynamicComponent}</>
});

export default Button;