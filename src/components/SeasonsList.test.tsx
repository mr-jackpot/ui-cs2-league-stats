import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SeasonsList } from './SeasonsList';
import type { Season } from '../types/api';

const mockSeasons: Season[] = [
  {
    competition_id: 'comp-1',
    competition_name: 'ESEA S55 EU Open',
    match_count: 10,
  },
  {
    competition_id: 'comp-2',
    competition_name: 'ESEA S54 EU Open',
    match_count: 8,
  },
];

const defaultProps = {
  seasonStatsMap: {},
  loadingStatsMap: {},
};

describe('SeasonsList', () => {
  it('renders empty state when no seasons', () => {
    render(<SeasonsList seasons={[]} onSelectSeason={() => {}} {...defaultProps} />);

    expect(screen.getByText('No ESEA seasons found')).toBeInTheDocument();
  });

  it('renders seasons list when seasons exist', () => {
    render(<SeasonsList seasons={mockSeasons} onSelectSeason={() => {}} {...defaultProps} />);

    expect(screen.getByText('Seasons')).toBeInTheDocument();
    expect(screen.getByText('ESEA S55 EU Open')).toBeInTheDocument();
    expect(screen.getByText('ESEA S54 EU Open')).toBeInTheDocument();
  });

  it('renders match counts', () => {
    render(<SeasonsList seasons={mockSeasons} onSelectSeason={() => {}} {...defaultProps} />);

    expect(screen.getByText('10 matches')).toBeInTheDocument();
    expect(screen.getByText('8 matches')).toBeInTheDocument();
  });

  it('renders season count', () => {
    render(<SeasonsList seasons={mockSeasons} onSelectSeason={() => {}} {...defaultProps} />);

    expect(screen.getByText('2 competitions')).toBeInTheDocument();
  });

  it('calls onSelectSeason when View is clicked', async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();

    render(<SeasonsList seasons={mockSeasons} onSelectSeason={handleSelect} {...defaultProps} />);

    const viewButtons = screen.getAllByRole('button', { name: /View/i });
    await user.click(viewButtons[0]);

    expect(handleSelect).toHaveBeenCalledWith(mockSeasons[0]);
  });
});
