import { Icon, Heading, HStack, VStack } from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import useSetParams from '@/lib/hooks/useSetParams';
import { TODAY } from '@/constants/config';
import { StatusType } from '@/interface/main';
import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';

const TableController = () => {
  const { currentDate, currentStatus, onSetParams } = useSetParams();

  return (
    <HStack>
      <VStack>
        <Heading as="h6" size="xs" alignSelf={'flex-start'}>
          Search for name
        </Heading>
        <SearchBar
          onChange={(query: string) =>
            onSetParams({
              queryValue: query,
            })
          }
        />
      </VStack>
      <VStack>
        <Heading as="h6" size="xs" alignSelf={'flex-start'}>
          Status
        </Heading>
        <FilterMenu
          selectedItem={
            currentStatus
              ? currentStatus === 'complete'
                ? 'Complete'
                : 'Incomplete'
              : currentStatus
          }
          items={[
            { title: 'None' },
            {
              title: 'Complete',
              value: 'complete',
              icon: <Icon as={CheckIcon} w={5} h={5} color="green.500" />,
            },
            {
              title: 'InComplete',
              value: 'incompete',
              icon: <Icon as={WarningIcon} w={5} h={5} color="orange.500" />,
            },
          ]}
          onClickItem={(value?: string) => {
            onSetParams({
              statusValue: value ? (value as StatusType) : undefined,
            });
          }}
        />
      </VStack>
      <VStack>
        <Heading as="h6" size="xs" alignSelf={'flex-start'}>
          Show
        </Heading>
        <FilterMenu
          selectedItem={currentDate === 'all' ? '전체' : '오늘'}
          items={[
            { title: '전체', value: 'all' },
            { title: '오늘', value: TODAY },
          ]}
          onClickItem={(value?: string) => {
            onSetParams({ pageValue: 1, dateValue: value });
          }}
        />
      </VStack>
    </HStack>
  );
};

export default TableController;
