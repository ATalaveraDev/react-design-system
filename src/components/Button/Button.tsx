import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import './Button.css';
import styler from '../../helpers/styler';

const sizes = ['small', 'large'] as const;
type Size = typeof sizes[number];

type ButtonProps = { 
  bgcolor?: string | Function;
  color?: string | Function;
  size?: Size;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

const Button = forwardRef((data: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {bgcolor, color, size, ...restProps} = data;

  let className = '';
  let style = '';

  const isValid = (size: Size) => {
    if (!sizes.includes(size)) {
      throw new Error('Invalid type provided for size attribute');
    }

    return true;
  };
  
  if (size) {
    if (isValid(size)) {
      className += ` ${size}`;
    } else {
      throw new Error('Provided invalid size value');
    }
  }

  if (bgcolor) {
    const bgColor = bgcolor instanceof Function ? bgcolor() : bgcolor;
    style += `background-color: ${bgColor};`;
  }

  if (color) {
    const myColor = color instanceof Function ? color() : color;
    style += `color: ${myColor};`;
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