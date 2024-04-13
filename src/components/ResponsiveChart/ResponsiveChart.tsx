import { FC, ReactElement, useMemo } from 'react';

import * as d3 from 'd3';

import useDimensions from './useDimensions';

const CHART_DEFAULTS = {
  height: 290,
  marginTop: 50,
  marginRight: 90,
  marginLeft: 90
};

type EnrichedChildren = {
  renderX?: (range: number[]) => ReactElement;
  renderY?: (range: number[]) => ReactElement;
}

const ResponsiveChart: FC<EnrichedChildren> = ({renderX, renderY}) => {
  const [ref, dimensions] = useDimensions(CHART_DEFAULTS);

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 0]).range([0, dimensions.boundedWidth]);
  }, [dimensions.boundedWidth]);

  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 0]).range([0, dimensions.boundedHeight]);
  }, [dimensions.boundedHeight]);

  return <div className="wrapper" ref={ref} style={{height: '300px'}}>
    <svg width={dimensions.width} height={dimensions.height}>
      <g transform={`translate(${[dimensions.marginLeft, dimensions.marginTop].join(',')})`}>
        <rect width={dimensions.boundedWidth} height={dimensions.boundedHeight} fill="lavender" />
        <g transform={`translate(${[0, dimensions.boundedHeight].join(',')})`}>
          {renderX && renderX(xScale.range())}
          {renderY && renderY(yScale.range())}
        </g>
      </g>
    </svg>
  </div>;
};

export default ResponsiveChart;