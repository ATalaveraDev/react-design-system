import { FC, HTMLAttributes } from 'react';
import './Tooltip.css';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tailPosition?: 'top' | 'bottom' | 'left' | 'right';
};

const Tooltip: FC<TooltipProps> = ({children, tailPosition}) => {
  let tooltipPosition = `triangle ${tailPosition ?? 'bottom'}`;

  return <>
    <div className="tooltip">
      {children}
      <span className={tooltipPosition}></span>
    </div>
  </>
};

export default Tooltip;