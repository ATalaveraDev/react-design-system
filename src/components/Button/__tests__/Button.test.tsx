import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

test('should have text', () => {
  render(<Button>Click me</Button>);

  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('should display button of type basic', () => {
  render(<Button basic>Basic</Button>);

  expect(screen.getByText('Basic')).toHaveClass('basic');
});