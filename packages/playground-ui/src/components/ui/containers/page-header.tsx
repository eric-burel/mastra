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
    <header className={cn(`px-[16px] py-[8px] col-span-2  flex justify-between items-center`, className)} style={style}>
      {children}
    </header>
  );
}
