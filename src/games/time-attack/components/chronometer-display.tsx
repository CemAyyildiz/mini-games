import { formatTime } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';
import { TIME_ATTACK_CONFIG } from '@/lib/constants/game-constants';

interface ChronometerDisplayProps {
  currentTime: number;
  isRunning: boolean;
}

export default function ChronometerDisplay({ currentTime, isRunning }: ChronometerDisplayProps) {
  const targetSeconds = TIME_ATTACK_CONFIG.TARGET_TIME / 1000;

  return (
    <div className="text-center space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Hedef Süre</p>
        <p className="text-2xl font-semibold text-muted-foreground">
          {targetSeconds.toFixed(2)}s
        </p>
      </div>

      <div className={cn(
        'text-8xl font-bold tabular-nums transition-colors',
        isRunning ? 'text-primary animate-pulse' : 'text-foreground'
      )}>
        {formatTime(currentTime)}
      </div>

      <p className="text-sm text-muted-foreground">
        {isRunning ? 'Kronometreyi tam 10.00 saniyede durdurun!' : 'Başlamak için butona tıklayın'}
      </p>
    </div>
  );
}
