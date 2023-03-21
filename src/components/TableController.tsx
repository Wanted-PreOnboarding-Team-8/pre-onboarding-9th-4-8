import { Icon, HStack, VStack, Img, Button } from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import useSetParams from '@/lib/hooks/useSetParams';
import { TODAY } from '@/constants/config';
import { StatusType } from '@/interface/main';
import reset from '@/common/icons/reset.svg';
import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';
import FilterTitle from './FilterTitle';

const TableController = () => {
  const { currentDate, currentStatus, onSetParams, onResetParams } =
    useSetParams();

  return (
    <HStack>
      <VStack>
        <FilterTitle title={'reset'} alignSelf={'center'} />
        <Button onClick={onResetParams} background="none">
          <Img src={reset} alt="reset" />
        </Button>
      </VStack>
      <VStack>
        <FilterTitle title={'Search for name'} />
        <SearchBar
          onChange={(query: string) =>
            onSetParams({
              queryValue: query,
            })
          }
        />
      </VStack>
      <VStack>
        <FilterTitle title={'Status'} />
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
        <FilterTitle title={'Show'} />
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
