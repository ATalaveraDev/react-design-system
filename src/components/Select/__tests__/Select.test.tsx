import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../Select';

test('should be possible to set native properties which are not defined in props like disabled', () => {
  render(<Select options={[{ value: 'option-1', text: 'Option 1' }]} value="option-1" disabled />)

  expect(screen.getByRole('combobox')).toBeDisabled();
});