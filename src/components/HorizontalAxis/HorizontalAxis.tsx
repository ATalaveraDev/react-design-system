import * as d3 from 'd3';
import { FC, SVGProps, useMemo } from 'react';

interface HorizontalAxisProps extends SVGProps<SVGElement> {
  domain?: [number, number];
  range?: [number, number];
  color?: string;
  tickColor?: string;
  tickHeight?: string | number;
};

interface TickProps extends SVGProps<SVGElement> {
  value: number;
  xOffset: number;
  height: number;
  color: string;
}

const Tick: FC<TickProps> = ({value, xOffset, height, color}) => {
  return (
    <g transform={`translate(${xOffset}, 0)`}>
      <line y2={height} stroke={color} />
      <text key={value} style={{fontSize: '10px', textAnchor: 'middle', transform: `translateY(${height + 10}px)`}}>{value}</text>
    </g>
  );
};

const HorizontalAxis: FC<HorizontalAxisProps> = ({domain=[0, 10], range=[10, 290], color, tickColor='currentColor', tickHeight=10}) => {
  const ticks = useMemo(() => {
    const xScale = d3.scaleLinear().domain(domain).range(range);

    const width = range[1] - range[0];
    const tickPx = 30;
    const numberOfTicks = Math.max(1, Math.floor(width / tickPx));

    return xScale.ticks(numberOfTicks).map(value => ({value, xOffset: xScale(value)}));
  }, [domain.join('-'), range.join('-')]);

  return (
    <svg style={{overflow: 'visible'}}>
      <path d={['M', range[0], tickHeight, 'v', -tickHeight, 'H', range[1], 'v', tickHeight].join(' ')} fill="none" stroke={color ?? 'currentColor'} />
      {ticks.map(({value, xOffset}) => {
        return <Tick key={value} value={value} xOffset={xOffset} color={tickColor} height={+tickHeight}  />
      })}
    </svg>
  );
};

export default HorizontalAxis;