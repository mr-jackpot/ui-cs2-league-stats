import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md mb-8">
      <Link to="/" className="btn btn-ghost text-xl">
        CS2 League Stats
      </Link>
    </div>
  );
}
