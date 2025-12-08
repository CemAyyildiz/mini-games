import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAccuracyLevel } from '../utils/time-calculation';
import { formatTime, formatPercentage } from '@/lib/utils/format';

interface ResultPanelProps {
  result: TimeAttackResult | null;
  bestAccuracy: number;
  attempts: number;
}

export default function ResultPanel({ result, bestAccuracy, attempts }: ResultPanelProps) {
  if (!result) return null;

  const accuracyLevel = getAccuracyLevel(result.difference);

  return (
    <div className="space-y-4">
      <Card className="border-4">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-xs uppercase tracking-widest">
            <span>◆ LAST RESULT ◆</span>
            <Badge 
              variant={result.isSuccess ? 'default' : 'secondary'}
              style={{ backgroundColor: accuracyLevel.color }}
              className="text-white uppercase tracking-wider"
            >
              {accuracyLevel.label}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="pixel-corners border-2 border-primary p-3 bg-primary/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">YOUR TIME</p>
              <p className="text-xl font-bold">{formatTime(result.stoppedTime)}</p>
            </div>
            <div className="pixel-corners border-2 border-secondary p-3 bg-secondary/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">DIFF</p>
              <p className="text-xl font-bold">{formatTime(result.difference)}</p>
            </div>
            <div className="pixel-corners border-2 border-accent p-3 bg-accent/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">ACCURACY</p>
              <p className="text-xl font-bold">{formatPercentage(result.accuracy)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="border-4 border-primary">
          <CardHeader>
            <CardTitle className="text-xs uppercase tracking-widest">★ BEST SCORE ★</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary animate-pulse">
              {formatPercentage(bestAccuracy)}
            </p>
          </CardContent>
        </Card>

        <Card className="border-4 border-secondary">
          <CardHeader>
            <CardTitle className="text-xs uppercase tracking-widest">• ATTEMPTS •</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">
              {attempts}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
