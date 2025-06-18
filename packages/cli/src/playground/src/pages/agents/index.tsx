import {
  AgentCoinIcon,
  AgentIcon,
  Button,
  DataTable,
  EmptyState,
  Header,
  HeaderTitle,
  Icon,
  MainContentLayout,
  MainContentContent,
  MainLayout,
  MainContent,
  MainHeader,
  MainEmpty,
  MainList,
} from '@mastra/playground-ui';

import { Link } from 'react-router';

import { useAgents } from '@/hooks/use-agents';
import { agentsTableColumns } from '@/domains/agents/table.columns';
import { useNavigate } from 'react-router';
import { useNewUI } from '@/hooks/use-new-ui';
import { max } from 'date-fns';

function Agents() {
  const navigate = useNavigate();
  const { agents, isLoading } = useAgents();
  const newUIEnabled = useNewUI();

  const agentListData = Object.entries(agents).map(([key, agent]) => ({
    id: key,
    name: agent.name,
    description: agent.instructions,
    provider: agent?.provider,
    modelId: agent?.modelId,
  }));

  console.log({ agentListData });

  if (isLoading) return null;

  const hasAgents = agentListData.length > 0;

  const agentListItems = agentListData.map(agent => ({
    id: agent.id,
    name: agent.name,
    to: `/agents/${agent.id}/chat`,
    columns: [
      <>
        <AgentIcon />
        {agent?.modelId}
      </>,
    ],
  }));

  const agentListColumns = [{ key: 'model', label: 'Model', minWidth: '10rem', maxWidth: '15rem' }];

  return newUIEnabled ? (
    <MainLayout>
      <MainHeader variant="forList">
        <AgentIcon /> Agents
      </MainHeader>

      {hasAgents ? (
        <MainContent variant="list">
          <MainList items={agentListItems} linkComponent={Link} columns={agentListColumns} />
        </MainContent>
      ) : (
        <MainEmpty predefinedFor="agents" />
      )}
    </MainLayout>
  ) : (
    <MainContentLayout>
      <Header>
        <HeaderTitle>Agents</HeaderTitle>
      </Header>

      {!hasAgents ? (
        <MainContentContent isCentered={true}>
          <EmptyState
            iconSlot={<AgentCoinIcon />}
            titleSlot="Configure Agents"
            descriptionSlot="Mastra agents are not configured yet. You can find more information in the documentation."
            actionSlot={
              <Button
                size="lg"
                className="w-full"
                variant="light"
                as="a"
                href="https://mastra.ai/en/docs/agents/overview"
                target="_blank"
              >
                <Icon>
                  <AgentIcon />
                </Icon>
                Docs
              </Button>
            }
          />
        </MainContentContent>
      ) : (
        <MainContentContent>
          <DataTable
            columns={agentsTableColumns}
            data={agentListData}
            onClick={row => navigate(`/agents/${row.id}/chat`)}
          />
        </MainContentContent>
      )}
    </MainContentLayout>
  );
}

export default Agents;
