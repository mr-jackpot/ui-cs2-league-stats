import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayerList } from './PlayerList';
import type { Player } from '../types/api';

const mockPlayers: Player[] = [
  {
    player_id: '123',
    nickname: 'TestPlayer1',
    avatar: 'https://example.com/avatar1.jpg',
    country: 'US',
  },
  {
    player_id: '456',
    nickname: 'TestPlayer2',
    avatar: 'https://example.com/avatar2.jpg',
    country: 'GB',
  },
];

describe('PlayerList', () => {
  it('renders nothing when players array is empty', () => {
    const { container } = render(
      <PlayerList players={[]} onSelect={() => {}} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders player list when players exist', () => {
    render(<PlayerList players={mockPlayers} onSelect={() => {}} />);

    expect(screen.getByText('TestPlayer1')).toBeInTheDocument();
    expect(screen.getByText('TestPlayer2')).toBeInTheDocument();
    // Flags are rendered as SVGs with title attributes
    expect(screen.getByTitle('US')).toBeInTheDocument();
    expect(screen.getByTitle('GB')).toBeInTheDocument();
  });

  it('renders player avatars', () => {
    render(<PlayerList players={mockPlayers} onSelect={() => {}} />);

    const avatars = screen.getAllByRole('img');
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute('src', 'https://example.com/avatar1.jpg');
  });

  it('calls onSelect when player is clicked', async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();

    render(<PlayerList players={mockPlayers} onSelect={handleSelect} />);

    await user.click(screen.getByText('TestPlayer1'));
    expect(handleSelect).toHaveBeenCalledWith(mockPlayers[0]);
  });
});
