import { Switch, Button } from '@chakra-ui/react';
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
