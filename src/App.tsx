import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
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
import Quiz from './pages/Quiz';

function PageWrapper({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return <div className={isHome ? '' : 'pt-20'}>{children}</div>;
}

export default function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen" style={{ background: '#0F172A' }}>
            <Navbar />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forts" element={<FortList />} />
                <Route path="/fort/:id" element={<FortDetail />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/passport" element={<Passport />} />
                <Route path="/heroes" element={<Heroes />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </PageWrapper>
          </div>
        </BrowserRouter>
      </UserProvider>
    </LanguageProvider>
  );
}
