import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { EditorialBanner } from './components/EditorialBanner';

test('renders learn react link', () => {
  render(<EditorialBanner />);
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});