import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils/cn';

interface GameCardProps {
  game: BaseGame;
  className?: string;
}

const DIFFICULTY_COLORS = {
  easy: 'bg-green-500',
  medium: 'bg-yellow-500',
  hard: 'bg-red-500',
};

const DIFFICULTY_LABELS = {
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
};

export default function GameCard({ game, className }: GameCardProps) {
  return (
    <Link to={game.path} className="block">
      <Card
        className={cn(
          'hover:shadow-lg transition-shadow cursor-pointer h-full',
          !game.isActive && 'opacity-60 cursor-not-allowed',
          className
        )}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="text-4xl">{game.icon}</div>
            <Badge
              variant="secondary"
              className={cn('text-white', DIFFICULTY_COLORS[game.difficulty])}
            >
              {DIFFICULTY_LABELS[game.difficulty]}
            </Badge>
          </div>
          <CardTitle className="mt-4">{game.name}</CardTitle>
          <CardDescription>{game.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {!game.isActive && (
            <p className="text-sm text-muted-foreground italic">Yakında...</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
