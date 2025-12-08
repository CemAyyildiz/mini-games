import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: '1',
    username: 'Oyuncu1',
    gameId: 'wheel-of-fortune',
    score: 15000,
    timestamp: Date.now() - 3600000,
    rank: 1,
  },
  {
    id: '2',
    username: 'Oyuncu2',
    gameId: 'time-attack',
    score: 9800,
    timestamp: Date.now() - 7200000,
    rank: 2,
  },
  {
    id: '3',
    username: 'Oyuncu3',
    gameId: 'wheel-of-fortune',
    score: 12500,
    timestamp: Date.now() - 10800000,
    rank: 3,
  },
];

const RANK_ICONS = {
  1: <Trophy className="h-6 w-6 text-yellow-500" />,
  2: <Medal className="h-6 w-6 text-gray-400" />,
  3: <Award className="h-6 w-6 text-amber-600" />,
};

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Lider Tablosu</h1>
        <p className="text-muted-foreground">
          En yüksek skorlara sahip oyuncular
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tüm Zamanlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {MOCK_LEADERBOARD.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10">
                    {entry.rank <= 3 ? (
                      RANK_ICONS[entry.rank as keyof typeof RANK_ICONS]
                    ) : (
                      <span className="text-xl font-bold text-muted-foreground">
                        {entry.rank}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{entry.username}</p>
                    <p className="text-sm text-muted-foreground">
                      {entry.gameId === 'wheel-of-fortune'
                        ? 'Çark-ı Felek'
                        : 'Zaman Saldırısı'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="text-lg font-bold">
                    {entry.score.toLocaleString('tr-TR')}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
