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

    expect(screen.getByText('CS2 League Stats')).toBeInTheDocument();
  });

  it('renders a link to the home page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: 'CS2 League Stats' });
    expect(link).toHaveAttribute('href', '/');
  });

  it('has correct styling classes', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const navbar = screen.getByRole('link', { name: 'CS2 League Stats' }).parentElement;
    expect(navbar).toHaveClass('navbar');
  });
});
