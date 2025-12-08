import { Card, CardContent } from '@/components/ui/card';
import { formatScore } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';

interface ScoreDisplayProps {
  score: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
};

export default function ScoreDisplay({
  score,
  label = 'Skor',
  size = 'md',
  className,
}: ScoreDisplayProps) {
  return (
    <Card className={cn('text-center', className)}>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-2">{label}</p>
        <p className={cn('font-bold text-primary', SIZE_CLASSES[size])}>
          {formatScore(score)}
        </p>
      </CardContent>
    </Card>
  );
}
