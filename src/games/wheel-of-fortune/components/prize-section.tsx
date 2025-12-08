import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatScore } from '@/lib/utils/format';

interface PrizeSectionProps {
  totalWinnings: number;
  spinCount: number;
}

export default function PrizeSection({ totalWinnings, spinCount }: PrizeSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="border-4 border-primary">
        <CardHeader>
          <CardTitle className="text-xs uppercase tracking-widest">◆ TOPLAM KAZANÇ ◆</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary animate-pulse">
            {formatScore(totalWinnings)} ₺
          </p>
        </CardContent>
      </Card>

      <Card className="border-4 border-secondary">
        <CardHeader>
          <CardTitle className="text-xs uppercase tracking-widest">◆ ÇEVİRME SAYISI ◆</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">
            {spinCount}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
