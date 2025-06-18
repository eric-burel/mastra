import { cn } from '@/lib/utils';
import { MainListEmpty } from '../fragments/main-list-empty';

type Column = {
  key: string;
  label: string;
  minWidth?: string;
  maxWidth?: string;
};

type Item = {
  id: string;
  name: string;
  to: string;
  description?: string;
  columns?: React.ReactNode[];
};

type MainListProps = {
  columns?: Column[];
  items?: Item[];
  className?: string;
  style?: React.CSSProperties;
  linkComponent?: any;
  emptyStateFor?: 'networks' | 'agents';
  isLoading?: boolean;
};

export function MainList({ className, style, items, columns, linkComponent, emptyStateFor, isLoading }: MainListProps) {
  const LinkComponent = linkComponent || 'a';
  const emptyStateDefined = emptyStateFor && ['networks', 'agents'].includes(emptyStateFor);

  if (isLoading) {
    return 'Loading...';
  } else if (items && items.length === 0) {
    return emptyStateDefined ? (
      <div className="grid h-full justify-center items-center">
        <MainListEmpty predefinedFor="networks" className={className} style={style} />
      </div>
    ) : null;
  }

  return (
    <ul
      className={cn(``, className)}
      style={{
        ...style,
        // border: '2px solid green'
      }}
    >
      <li className="font-semibold text-[0.875rem] text-text2 px-2 py-3 border-b-sm border-border1 flex">
        <span>Name</span>
        {columns?.length && (
          <div className="ml-auto">
            {columns?.map(column => (
              <span className={cn(`flex min-w-[10rem] text-left w-[10rem]`)}>{column.label}</span>
            ))}
          </div>
        )}
      </li>

      {items?.map(item => {
        const { id, name, to, description, columns } = item;

        if (!id || !name || !to) {
          console.warn('Item is missing required properties:', item);
          return null;
        }

        return (
          <li key={id} className="flex border-b-sm border-border1 py-4 px-2 hover:bg-surface3">
            <LinkComponent to={to} className="flex gap-2 items-center w-full ">
              <div>
                <span className="text-[1rem]">{item.name}</span>
                {item.description && <p className="text-[0.875rem]">{item.description}</p>}
              </div>
              {columns?.length && (
                <div className="ml-auto">
                  {columns?.map(column => (
                    <span className="flex gap-2 items-center w-[10rem] text-left">{column}</span>
                  ))}
                </div>
              )}
            </LinkComponent>
          </li>
        );
      })}
    </ul>
  );
}
