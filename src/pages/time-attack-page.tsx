import GameLayout from '@/components/layout/game-layout';
import TimeAttack from '@/games/time-attack';

export default function TimeAttackPage() {
  return (
    <GameLayout
      title="Zaman Saldırısı"
      description="Kronometreyi tam 10.00 saniyede durdur!"
    >
      <TimeAttack />
    </GameLayout>
  );
}
