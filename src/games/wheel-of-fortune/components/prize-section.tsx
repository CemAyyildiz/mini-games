import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatScore } from '@/lib/utils/format';

interface PrizeSectionProps {
  totalWinnings: number;
  spinCount: number;
}

export default function PrizeSection({ totalWinnings, spinCount }: PrizeSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Toplam Kazanç</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-primary">
            {formatScore(totalWinnings)} ₺
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Çevirme Sayısı</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-primary">
            {spinCount}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
