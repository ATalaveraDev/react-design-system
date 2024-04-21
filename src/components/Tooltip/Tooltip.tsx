import { HTMLAttributes, Ref, forwardRef } from 'react';
import './Tooltip.css';

type TooltipProps = {
  tailPosition?: 'top' | 'bottom' | 'left' | 'right';
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = forwardRef((data: TooltipProps, ref: Ref<HTMLDivElement>) => {
  let tooltipPosition = `triangle ${data.tailPosition ?? 'bottom'}`;

  return <>
    <div className="tooltip" ref={ref}>
      {data.children}
      <span className={tooltipPosition}></span>
    </div>
  </>
});

export default Tooltip;