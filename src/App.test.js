import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page content', () => {
  render(<App />);
  expect(screen.getByText(/Latest Arrivals/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
});
