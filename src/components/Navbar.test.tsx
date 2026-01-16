import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders the app title', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('CSScout')).toBeInTheDocument();
  });

  it('renders a link to the home page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // The link contains both "CS" logo mark and "CSScout" text
    const link = screen.getByRole('link', { name: /CSScout/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('has correct styling classes', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('sticky', 'glass');
  });
});
