import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, Trophy, Timer } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { ROUTES } from '@/lib/constants/routes';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Ana Sayfa',
    path: ROUTES.HOME,
    icon: <Home className="h-5 w-5" />,
  },
  {
    label: 'Çark-ı Felek',
    path: ROUTES.WHEEL_OF_FORTUNE,
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    label: 'Zaman Saldırısı',
    path: ROUTES.TIME_ATTACK,
    icon: <Timer className="h-5 w-5" />,
  },
  {
    label: 'Lider Tablosu',
    path: ROUTES.LEADERBOARD,
    icon: <Trophy className="h-5 w-5" />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r-4 bg-card pixel-corners">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b-4 px-6 bg-primary/10">
          <Link to={ROUTES.HOME} className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-sm font-bold text-primary">MINI GAMES</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 text-xs font-medium transition-all pixel-corners uppercase tracking-wider',
                  isActive
                    ? 'bg-primary text-primary-foreground retro-shadow'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:translate-x-1'
                )}
              >
                {item.icon}
                <span className="text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t-4 p-4 bg-primary/5">
          <p className="text-[8px] text-muted-foreground text-center uppercase tracking-widest">
            © 2025 MINI GAMES
          </p>
        </div>
      </div>
    </aside>
  );
}
