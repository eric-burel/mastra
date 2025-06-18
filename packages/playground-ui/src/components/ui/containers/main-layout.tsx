import { cn } from '@/lib/utils';

export function MainLayout({
  children,
  variant = 'default',
  className,
  style,
}: {
  children: React.ReactNode;
  variant?: 'default' | '2x2grid';
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <main
      className={cn(
        `grid grid-rows-[auto_1fr] overflow-y-auto h-full px-8`,
        {
          'grid-cols-[1fr_1fr] grid-rows-[auto_1fr] gap-x-12 gap-y-12 px-10': variant === '2x2grid',
        },
        className,
      )}
      style={{ ...style }}
    >
      {children}
    </main>
  );
}
