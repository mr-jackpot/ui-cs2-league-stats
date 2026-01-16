import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayerSearch } from './PlayerSearch';

describe('PlayerSearch', () => {
  it('renders search input and button', () => {
    render(
      <PlayerSearch
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        loading={false}
      />
    );

    expect(screen.getByPlaceholderText('Search player...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <PlayerSearch
        value=""
        onChange={handleChange}
        onSubmit={() => {}}
        loading={false}
      />
    );

    await user.type(screen.getByPlaceholderText('Search player...'), 'test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onSubmit when form is submitted', async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    render(
      <PlayerSearch
        value="test"
        onChange={() => {}}
        onSubmit={handleSubmit}
        loading={false}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(
      <PlayerSearch
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        loading={true}
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
    expect(document.querySelector('.loading-spinner')).toBeInTheDocument();
  });
});
