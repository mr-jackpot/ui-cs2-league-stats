import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { HomePage, PlayerPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base-200">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/:playerId" element={<PlayerPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
