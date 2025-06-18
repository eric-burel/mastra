import { cn } from '@/lib/utils';

export function PageHeader({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <header className={cn(`px-2 py-1 col-span-2  flex justify-between items-center`, className)} style={style}>
      {children}
    </header>
  );
}
