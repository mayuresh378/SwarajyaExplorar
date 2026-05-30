import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FortList from './pages/FortList';
import FortDetail from './pages/FortDetail';
import MapPage from './pages/MapPage';
import Timeline from './pages/Timeline';
import Passport from './pages/Passport';
import Heroes from './pages/Heroes';

export default function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-amber-50/30">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forts" element={<FortList />} />
              <Route path="/fort/:id" element={<FortDetail />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/passport" element={<Passport />} />
              <Route path="/heroes" element={<Heroes />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </LanguageProvider>
  );
}
