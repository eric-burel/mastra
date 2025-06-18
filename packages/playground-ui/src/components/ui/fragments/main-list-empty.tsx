import { ReactNode } from 'react';

import { Txt } from '../../../ds/components/Txt';
import { AgentCoinIcon, WorkflowCoinIcon, AgentIcon, WorkflowIcon, AgentNetworkCoinIcon } from '@/ds/icons';
import { NetworkIcon } from 'lucide-react';
import { Button } from '../../../ds/components/Button';
import { cn } from '@/lib/utils';

const predefinedContent = {
  agents: {
    icon: <AgentCoinIcon />,
    title: 'Configure Agents',
    description: 'Mastra agents are not configured yet. You can find more information in the documentation.',
    actions: [
      {
        label: 'Docs',
        href: 'https://mastra.ai/en/docs/agents/overview',
        icon: <AgentIcon />,
      },
    ],
  },
  workflows: {
    icon: <WorkflowCoinIcon />,
    title: 'Configure Workflows',
    description: 'Mastra workflows are not configured yet. You can find more information in the documentation.',
    actions: [
      {
        label: 'Docs',
        href: 'https://mastra.ai/en/docs/workflows/overview',
        icon: <WorkflowIcon />,
      },
    ],
  },
  networks: {
    icon: <AgentNetworkCoinIcon />,
    title: 'Configure Agent Networks',
    description: 'Mastra agent networks are not configured yet. You can find more information in the documentation.',
    actions: [
      {
        label: 'Docs',
        href: 'https://mastra.ai/en/reference/networks/agent-network',
        icon: <NetworkIcon />,
      },
    ],
  },
};

type Action = {
  label: string;
  href: string;
  icon?: ReactNode;
};

export type MainEmptyProps = {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: Action[];
  predefinedFor?: keyof typeof predefinedContent;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
};

export const MainListEmpty = ({
  icon: customIcon,
  title: customTitle,
  description: customDescription,
  actions: customActions,
  className,
  style,
  predefinedFor,
  children,
}: MainEmptyProps) => {
  const content = predefinedFor ? predefinedContent[predefinedFor] : null;
  const icon = content?.icon || customIcon;
  const title = content?.title || customTitle;
  const description = content?.description || customDescription;
  const actions = content?.actions || customActions;

  return (
    <div className={cn('flex w-[340px] flex-col items-center justify-center text-center', className)} style={style}>
      <div className="h-auto [&>svg]:w-[126px]">{icon}</div>
      <div className="text-icon6 pt-[34px] font-serif text-[1.75rem] font-semibold">{title}</div>
      <Txt variant="ui-lg" className="text-icon3">
        {description}
      </Txt>

      {actions && actions.length > 0 && (
        <div className="flex flex-col items-center gap-4 pt-9 w-full">
          {actions.map((action, index) => (
            <Button size="lg" className="w-full" variant="light" as="a" href={action.href} target="_blank">
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};
