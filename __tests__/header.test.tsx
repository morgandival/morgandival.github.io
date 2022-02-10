import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', {
      name: /Morgan Di Val/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
