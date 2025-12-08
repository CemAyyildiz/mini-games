import GameCard from '@/components/common/game-card';
import { GAME_IDS } from '@/lib/constants/game-constants';
import { ROUTES } from '@/lib/constants/routes';

const GAMES: BaseGame[] = [
  {
    id: GAME_IDS.WHEEL_OF_FORTUNE,
    name: 'Çark-ı Felek',
    description: 'Çarkı çevir, şansını dene! Farklı ödüller kazanma şansını yakala.',
    icon: '🎡',
    path: ROUTES.WHEEL_OF_FORTUNE,
    difficulty: 'easy',
    isActive: true,
  },
  {
    id: GAME_IDS.TIME_ATTACK,
    name: 'Zaman Saldırısı',
    description: 'Kronometreyi tam 10.00 saniyede durdurabilir misin? Reflekslerini test et!',
    icon: '⏱️',
    path: ROUTES.TIME_ATTACK,
    difficulty: 'medium',
    isActive: true,
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-widest animate-pulse text-primary">
          ►► MINI GAMES ARCADE ◄◄
        </h1>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          [ INSERT COIN TO START ]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
