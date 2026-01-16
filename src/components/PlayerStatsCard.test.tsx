import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlayerStatsCard } from './PlayerStatsCard';
import type { PlayerStats } from '../types/api';

const mockStats: PlayerStats = {
  player_id: '123',
  competition_id: 'comp-1',
  competition_name: 'ESEA S55 EU Open',
  matches_played: 10,
  wins: 7,
  losses: 3,
  win_rate: 70,
  kills: 150,
  deaths: 100,
  assists: 50,
  kd_ratio: 1.5,
  adr: 85.5,
  headshot_pct: 48.2,
  mvps: 15,
  multi_kills: {
    triples: 5,
    quads: 2,
    aces: 1,
  },
};

describe('PlayerStatsCard', () => {
  it('renders competition name', () => {
    render(<PlayerStatsCard stats={mockStats} />);
    expect(screen.getByText('ESEA S55 EU Open')).toBeInTheDocument();
  });

  it('renders key stats', () => {
    render(<PlayerStatsCard stats={mockStats} />);

    expect(screen.getByText('1.50')).toBeInTheDocument(); // K/D ratio
    expect(screen.getByText('85.5')).toBeInTheDocument(); // ADR
    expect(screen.getByText('70%')).toBeInTheDocument(); // Win rate
    expect(screen.getByText('48.2%')).toBeInTheDocument(); // HS %
  });

  it('renders match statistics', () => {
    render(<PlayerStatsCard stats={mockStats} />);

    expect(screen.getByText('10 matches played')).toBeInTheDocument();
    expect(screen.getByText('7W')).toBeInTheDocument(); // Wins
    expect(screen.getByText('3L')).toBeInTheDocument(); // Losses
    expect(screen.getByText('15')).toBeInTheDocument(); // MVPs
  });

  it('renders kill/death/assist stats', () => {
    render(<PlayerStatsCard stats={mockStats} />);

    expect(screen.getByText('150')).toBeInTheDocument(); // Kills
    expect(screen.getByText('100')).toBeInTheDocument(); // Deaths
    expect(screen.getByText('50')).toBeInTheDocument(); // Assists
  });

  it('renders multi-kill stats', () => {
    render(<PlayerStatsCard stats={mockStats} />);

    expect(screen.getByText('5')).toBeInTheDocument(); // Triples
    expect(screen.getByText('2')).toBeInTheDocument(); // Quads
    expect(screen.getByText('1')).toBeInTheDocument(); // Aces
    expect(screen.getByText('3K')).toBeInTheDocument();
    expect(screen.getByText('4K')).toBeInTheDocument();
    expect(screen.getByText('ACE')).toBeInTheDocument();
  });
});
