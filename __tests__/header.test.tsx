import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', {
      name: /Morgan Di Val/i,
    });

    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');

    expect(heading).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
