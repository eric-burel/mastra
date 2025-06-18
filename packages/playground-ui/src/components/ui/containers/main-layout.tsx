import { cn } from '@/lib/utils';

export function MainLayout({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <main
      className={cn(
        'bg-surface2 mb-3 mr-3 rounded-lg border border-border1 overflow-y-auto grid grid-rows-[auto_1fr] ',
        className,
      )}
      style={{
        ...style,
        //  border: '2px solid red'
      }}
    >
      {children}
    </main>
  );
}
