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
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r bg-card">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Mini Games</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Mini Games
          </p>
        </div>
      </div>
    </aside>
  );
}
