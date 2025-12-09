// Leaderboard-related global types

interface LeaderboardEntry {
  id: string;
  username: string;
  gameId: string;
  score: number;
  timestamp: number;
  rank: number;
  metadata?: {
    stoppedTime?: number;
    accuracy?: number;
    [key: string]: unknown;
  };
}
