import { cn } from '@/lib/utils';

export function TextWithIcon({
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
      className={cn(
        'flex justify-start text-icon3 items-center gap-1 text-ui-sm w-[10rem] text-left',
        '[&>svg]:h-icon-default [&>svg]:w-icon-default',
        className,
      )}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
}
