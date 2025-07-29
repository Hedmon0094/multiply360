import { Infinity } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-foreground ${className}`}>
      <Infinity className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold">Multiply360</span>
    </div>
  );
}
