import GameLayout from '@/components/layout/game-layout';
import WheelOfFortune from '@/games/wheel-of-fortune';

export default function WheelOfFortunePage() {
  return (
    <GameLayout
      title="Çark-ı Felek"
      description="Çarkı çevir ve ödülünü kazan!"
    >
      <WheelOfFortune />
    </GameLayout>
  );
}
