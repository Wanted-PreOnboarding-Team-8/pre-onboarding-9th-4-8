import { Switch, Button, Select, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { TODAY } from '@/constants/config';
import useParams from '@/lib/hooks/useParams';

export const TodayOnlyFilter = () => {
  const { selectedDate, onSetParams } = useParams();

  const onTrigger = () =>
    onSetParams({
      pageValue: 1,
      dateValue: selectedDate === TODAY ? '' : TODAY,
    });

  return (
    <>
      <Button colorScheme={'blue'} variant={'ghost'} onClick={onTrigger}>
        오늘의 주문보기
      </Button>
      <Switch
        colorScheme="blue"
        size="lg"
        isChecked={selectedDate === TODAY}
        onChange={onTrigger}
      ></Switch>
    </>
  );
};

export const OrderStatusFilter = () => {
  const { onSetParams } = useParams();

  const onTrigger = (selected: React.ChangeEvent<HTMLSelectElement>) =>
    onSetParams({
      pageValue: 1,
      orderStatusValue:
        selected.target.value === 'complete'
          ? 'complete'
          : selected.target.value === 'incomplete'
          ? 'incomplete'
          : 'all',
    });

  return (
    <Select onChange={(selected) => onTrigger(selected)}>
      <option value="all">all</option>
      <option value="complete">complete</option>
      <option value="incomplete">incomplete</option>
    </Select>
  );
};

export const NameSearchFilter = () => {
  const { onSetParams } = useParams();
  const inputValue = useRef<string | undefined>();

  const onTrigger = () => {
    if (typeof inputValue.current !== 'undefined')
      onSetParams({
        pageValue: 1,
        nameValue: inputValue.current,
      });
  };

  return (
    <>
      <Input
        w="xsm"
        placeholder="이름을 검색하세요."
        onChange={(e) => (inputValue.current = e.target.value)}
      />
      <Button onClick={onTrigger}>찾기</Button>
    </>
  );
};
