import { Ref, SelectHTMLAttributes, forwardRef } from 'react';
import './Select.css';

type SelectProps = {
  options: { value: string, text: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef((data: SelectProps, ref: Ref<HTMLSelectElement>) => {
  return <>
    <div>
      <button role="combobox" value="Select" aria-controls="listbox" aria-haspopup="listbox" tabIndex={0} aria-expanded="false"></button>
    </div>
    <ul role="listbox" id="options">
      {data.options.map(option => <li role="option" data-value={option.value}>{option.text}</li>)}
    </ul>
  </>;
});

export default Select;