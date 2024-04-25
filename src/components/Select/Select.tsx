import { ButtonHTMLAttributes, FC, SelectHTMLAttributes, useState } from 'react';
import './Select.css';

type Option = { value: string, text: string };

type SelectProps = {
  options: Option[];
  onChange?: (value: string) => void;
} & SelectHTMLAttributes<HTMLSelectElement> & ButtonHTMLAttributes<HTMLButtonElement>;

const Select: FC<SelectProps> = ({options, value, onChange, ...props}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selected = options.find(option => option.value === value);

  const selectHandler = (value: string) => {
    onChange && onChange(value);
    setIsDropdownOpen(false);
  };
  
  return <>
      <button 
        className="select-button"
        role="combobox"
        aria-controls="default_select_namespace_options"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        {...props}
      >
        {selected?.text}
      </button>
      <ul
        className="select-options"
        id="default_select_namespace_options"
        role="listbox"
        aria-multiselectable="false"
      >
        {options.map((option, index) => <li key={`${option.value}-${index}`} role="option" value={index}>
          <label onClick={() => selectHandler(option.value)}>{option.text}</label>
        </li>)}
      </ul>
  </>;
};

export default Select;