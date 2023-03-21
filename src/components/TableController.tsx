import { useEffect, useState } from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';
import useSetParams from '@/lib/hooks/useSetParams';
import { TODAY } from '@/constants/config';

const TableController = () => {
  const { currentDate, onSetParams } = useSetParams();

  const dateValue =
    currentDate && /^(\d{4})-(\d{2})-(\d{2})$/.test(currentDate);

  const [allOrderCheck, setAllOrderCheck] = useState(!dateValue);
  const [todayOrderCheck, setTodayOrderCheck] = useState(dateValue);

  const handleAllOrder = () => {
    onSetParams({ pageValue: 1, dateValue: '' });
    setAllOrderCheck(true);
    setTodayOrderCheck(false);
  };

  const handlTodayOrder = () => {
    onSetParams({ pageValue: 1, dateValue: TODAY });
    setTodayOrderCheck(true);
    setAllOrderCheck(false);
  };

  useEffect(() => {
    setAllOrderCheck(!dateValue);
    setTodayOrderCheck(dateValue);
  }, [dateValue]);

  return (
    <Stack
      direction={['column', 'row']}
      spacing={[1, 5]}
      justify="center"
      p={5}
    >
      <Checkbox
        size="lg"
        colorScheme="green"
        p={1}
        borderWidth={2}
        borderColor="gray.400"
        borderRadius={5}
        isChecked={allOrderCheck}
        onChange={handleAllOrder}
      >
        전체 주문보기
      </Checkbox>
      <Checkbox
        size="lg"
        colorScheme="green"
        p={1}
        borderWidth={2}
        borderColor="gray.400"
        borderRadius={5}
        isChecked={!!todayOrderCheck}
        onChange={handlTodayOrder}
      >
        오늘의 주문보기
      </Checkbox>
    </Stack>
  );
};

export default TableController;
