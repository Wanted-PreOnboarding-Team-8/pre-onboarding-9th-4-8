import { Switch, Text } from '@chakra-ui/react';

export const OrderIdSorter = ({
  sortByOrderId,
  setSortByOrderId,
}: {
  sortByOrderId: boolean;
  setSortByOrderId: any;
}) => {
  const onTrigger = () => {
    setSortByOrderId(!sortByOrderId);
  };
  return (
    <>
      <Text colorScheme={'blue'} variant={'ghost'}>
        내림차순 정렬
      </Text>
      <Switch
        colorScheme="blue"
        size="md"
        defaultChecked={false}
        onChange={onTrigger}
      ></Switch>
    </>
  );
};

export const TransacTimeSorter = ({
  sortByTime,
  setSortByTime,
}: {
  sortByTime: boolean;
  setSortByTime: any;
}) => {
  const onTrigger = () => {
    setSortByTime(!sortByTime);
  };
  return (
    <>
      <Text colorScheme={'blue'} variant={'ghost'}>
        내림차순 정렬
      </Text>
      <Switch
        colorScheme="blue"
        size="md"
        defaultChecked={false}
        onChange={onTrigger}
      ></Switch>
    </>
  );
};
