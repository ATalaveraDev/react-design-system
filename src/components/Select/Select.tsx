import { Ref, SelectHTMLAttributes, forwardRef } from 'react';
import './Select.css';

type SelectProps = {
  options: { value: string, text: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef((data: SelectProps, ref: Ref<HTMLSelectElement>) => {
  return <select ref={ref} {...data}>
    {data.options.map((option, index) => <option key={`${option.value}-${index}`}>{option.text}</option>)}
  </select>;
});

export default Select;