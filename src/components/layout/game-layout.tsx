import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants/routes';

interface GameLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function GameLayout({ children, title, description }: GameLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        <Link to={ROUTES.HOME}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfa
          </Button>
        </Link>
      </div>

      <div className="rounded-lg border bg-card p-6">
        {children}
      </div>
    </div>
  );
}
