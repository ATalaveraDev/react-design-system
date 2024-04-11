import { FC, SVGProps } from 'react';

interface CircleType extends SVGProps<SVGElement> {
  color?: string;
  d?: string;
}

const Circle: FC<CircleType> = ({color, d}) => {
  const colorAtttr = color ?? getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
  const sizeAttr = d ? +d : 25; 
  const viewBoxAttr = `0 0 ${sizeAttr} ${sizeAttr}`;

  return (
    <svg viewBox={viewBoxAttr} width={sizeAttr} height={sizeAttr} fill={colorAtttr}>
      <circle cx={sizeAttr/2} cy={sizeAttr/2} r={sizeAttr/2} />
    </svg>
  );
};

export default Circle;