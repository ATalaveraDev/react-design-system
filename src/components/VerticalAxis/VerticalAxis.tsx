import * as d3 from 'd3';
import { FC, SVGProps, useMemo } from 'react';

interface VerticalAxisProps extends SVGProps<SVGElement> {
  domain?: [number, number];
  range: number[];
  color?: string;
  tickColor?: string;
  tickWidth?: string | number;
};

interface HorizontalTickProps extends SVGProps<SVGElement> {
  value: number;
  yOffset: number;
  width: number;
  color: string;
}

const HorizontalTick: FC<HorizontalTickProps> = ({value, yOffset, width, color}) => {
  return (
    <g transform={`translate(0, -${yOffset})`}>
      <line x2={-width} stroke={color} />
      <text key={value} style={{fontSize: '10px', textAnchor: 'middle', transform: `translate(-${width+10}px, 2.5px)`}}>{value}</text>
    </g>
  );
};


const VerticalAxis: FC<VerticalAxisProps> = ({domain=[0, 10], range=[5, 145], color, tickColor='currentColor', tickWidth=10}) => {
  const ticks = useMemo(() => {
    const yScale = d3.scaleLinear().domain(domain).range(range);

    const height = range[1] - range[0];
    const tickPx = 30;
    const numberOfTicks = Math.max(1, Math.floor(height / tickPx));

    return yScale.ticks(numberOfTicks).map(value => ({value, yOffset: yScale(value)}));
  }, [domain.join('-'), range.join('-')]);

  return (
    <svg style={{overflow: 'visible'}}>
      <path d={['M', -tickWidth*2, 0, 'h', (tickWidth as number)*2, 'V', -range[1], 'h', -tickWidth].join(' ')} fill="none" stroke={color ?? 'currentColor'} />
      {ticks.map(({value, yOffset}) => {
        return <HorizontalTick key={value} value={value} yOffset={yOffset} color={tickColor} width={+tickWidth}  />
      })}
    </svg>
  );
};

export default VerticalAxis;