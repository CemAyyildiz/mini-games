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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Son Sonuç</span>
            <Badge 
              variant={result.isSuccess ? 'default' : 'secondary'}
              style={{ backgroundColor: accuracyLevel.color }}
              className="text-white"
            >
              {accuracyLevel.label}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Süreniz</p>
              <p className="text-2xl font-bold">{formatTime(result.stoppedTime)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Fark</p>
              <p className="text-2xl font-bold">{formatTime(result.difference)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">İsabetlilik</p>
              <p className="text-2xl font-bold">{formatPercentage(result.accuracy)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">En İyi İsabetlilik</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">
              {formatPercentage(bestAccuracy)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Deneme Sayısı</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">
              {attempts}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
