import { cn } from '@/lib/utils';

export function PageLayout({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(`h-screen bg-surface1 font-sans grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]`, className)}
      style={style}
    >
      {children}
    </div>
  );
}
