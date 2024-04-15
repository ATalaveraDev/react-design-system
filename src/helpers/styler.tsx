import { ComponentType, createElement } from 'react';

const styler = (component: ComponentType<any>, props: any) => {
  return createElement(component, props);
};

export default styler;