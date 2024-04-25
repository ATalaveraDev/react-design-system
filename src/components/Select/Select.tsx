import { Ref, SelectHTMLAttributes, forwardRef, useState } from 'react';
import './Select.css';

type SelectProps = {
  options: { value: string, text: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = (data: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return <>
      <button 
        className="select-button"
        role="combobox"
        aria-controls="default_select_namespace_options"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
      </button>
      <ul
        className="select-options"
        role="listbox"
        id="default_select_namespace_options"
        aria-multiselectable="false"
      >
        {data.options.map((option, index) => <li key={`${option.value}-${index}`} role="option" data-value={option.value}>{option.text}</li>)}
      </ul>
  </>;
};

export default Select;