import { cn } from '@/lib/utils';
import { MainListEmpty } from '../fragments/main-list-empty';
import { TextWithIcon } from './text-with-icon';

type Column = {
  key: string;
  label: string;
  minWidth?: string;
  maxWidth?: string;
};

type Item = {
  id: string;
  name: string;
  icon?: React.ReactNode;
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
  emptyStateFor?: 'networks' | 'agents' | 'mcpServers' | 'workflows';
  isLoading?: boolean;
};

export function MainList({ className, style, items, columns, linkComponent, emptyStateFor, isLoading }: MainListProps) {
  const LinkComponent = linkComponent || 'a';
  const emptyStateDefined = emptyStateFor && ['networks', 'agents', 'workflows', 'mcpServers'].includes(emptyStateFor);

  console.log('emptyStateDefined', emptyStateDefined);

  if (isLoading) {
    return 'Loading...';
  } else if (items && items.length === 0) {
    return emptyStateDefined ? (
      <div className="grid h-full justify-center items-center">
        <MainListEmpty predefinedFor={emptyStateFor} className={className} style={style} />
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
      <li className="items-center h-table-header border-b-sm border-border1 flex text-icon3 text-ui-sm font-normal uppercase px-5">
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
          <li key={id} className="px-5 min-h-[44px] items-center flex border-b-sm border-border1 hover:bg-surface3">
            <LinkComponent to={to} className="flex gap-2 items-center w-full ">
              <div className="flex gap-2 items-center">
                {item.icon}
                <div className="py-1">
                  <span className="text-icon6 font-medium text-ui-md leading-ui-md">{item.name}</span>
                  {item.description && (
                    <p className="truncate max-w-[100ch] text-icon3 text-ui-xs text-[0.875rem] pb-1 ">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              {columns?.length && (
                <div className="ml-auto">{columns?.map(column => <TextWithIcon>{column}</TextWithIcon>)}</div>
              )}
            </LinkComponent>
          </li>
        );
      })}
    </ul>
  );
}
