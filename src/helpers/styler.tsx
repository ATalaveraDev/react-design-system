import { ComponentType, createElement } from 'react';

let counter = 0;

const styler = (component: ComponentType<any>, props: any) => {
  if (counter === 0) {
    const styleTag = document.createElement('style');
    styleTag.id = 'custom-styles';
    document.head.appendChild(styleTag);
  }

  counter++;

  const newProps = {
    ...props,
    styleid: `part-${counter}`
  };

  if (newProps.style) {
    const node = document.getElementById('custom-styles');
    node!.innerHTML += `.${newProps.styleid}{${newProps.style}}\n`;
  }

  return createElement(component, newProps);
};

export default styler;