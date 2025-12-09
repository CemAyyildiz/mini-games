import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/layout/main-layout';
import Home from './pages/home';
import WheelOfFortunePage from './pages/wheel-of-fortune-page';
import TimeAttackPage from './pages/time-attack-page';
import MakeTenPage from './pages/make-ten-page';
import Leaderboard from './pages/leaderboard';
import { ROUTES } from './lib/constants/routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.WHEEL_OF_FORTUNE} element={<WheelOfFortunePage />} />
            <Route path={ROUTES.TIME_ATTACK} element={<TimeAttackPage />} />
            <Route path={ROUTES.MAKE_TEN} element={<MakeTenPage />} />
            <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
