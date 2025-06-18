import { cn } from '@/lib/utils';

export function MainContent({
  children,
  className,
  isCentered = false,
  isDivided = false,
  hasLeftServiceColumn = false,
  style,
  width = 'narrow',
  variant = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // content is centered in the middle of the page e.g. for empty state
  isCentered?: boolean;
  // content is split into two columns equal width columns
  isDivided?: boolean;
  // used when the left column is a service column (e.g. agent history nav)
  hasLeftServiceColumn?: boolean;
  width?: 'narrow' | 'full';
  variant?: 'default' | 'twoColumns' | 'list' | 'empty';
}) {
  const isNarrow = width === 'narrow';

  if (variant === 'list') {
    return (
      <div className={cn(`grid overflow-y-scroll h-full pb-[5rem]`, className)} style={{ ...style }}>
        <div
          className="h-auto w-full max-w-[60rem] mx-auto px-7"
          style={{
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        `grid overflow-y-auto h-full`,
        `overflow-x-auto min-w-[min-content]`,
        {
          'items-start content-start': !isCentered && !isDivided && !hasLeftServiceColumn,
          'grid place-items-center': isCentered,
          'grid-cols-[1fr_1fr]': isDivided && !hasLeftServiceColumn,
          'grid-cols-[auto_1fr_1fr]': isDivided && hasLeftServiceColumn,
          'grid-cols-[auto_1fr]': !isDivided && hasLeftServiceColumn,
          '': variant === 'default',
          'grid-cols-[1fr_1fr] grid-rows-[1fr]': variant === 'twoColumns',
          'content-center justify-items-center pb-10': variant === 'empty',
        },
        className,
      )}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
