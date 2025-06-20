import { cn } from '@/lib/utils';

export function MainHeader({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <header
      className={cn('flex w-full items-center border-b border-border1 h-[40px] px-[20px] py-[6px] gap-[18px]', {})}
      style={{
        ...style,
        //  border: '2px solid red'
      }}
    >
      {children}
    </header>
  );
}
type MainHeaderTitleProps = {
  children: React.ReactNode;
};

export const MainHeaderTitle = ({ children }: MainHeaderTitleProps) => {
  return <h1 className="font-medium text-white text-ui-lg leading-ui-lg">{children}</h1>;
};
