import type { Season } from '../types/api';

interface SeasonsListProps {
  seasons: Season[];
  onSelectSeason: (season: Season) => void;
}

export function SeasonsList({ seasons, onSelectSeason }: SeasonsListProps) {
  if (seasons.length === 0) {
    return <p className="text-center opacity-70">No ESEA seasons found</p>;
  }

  return (
    <>
      <h3 className="font-semibold mb-2">ESEA Seasons</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Matches</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((season) => (
              <tr key={season.competition_id} className="hover">
                <td>{season.competition_name}</td>
                <td>{season.match_count}</td>
                <td>
                  <button
                    className="btn btn-sm btn-ghost"
                    onClick={() => onSelectSeason(season)}
                  >
                    View Stats
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
