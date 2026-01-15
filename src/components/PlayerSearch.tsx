interface PlayerSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export function PlayerSearch({ value, onChange, onSubmit, loading }: PlayerSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        placeholder="Search player by nickname..."
        className="input input-bordered flex-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? <span className="loading loading-spinner"></span> : 'Search'}
      </button>
    </form>
  );
}
