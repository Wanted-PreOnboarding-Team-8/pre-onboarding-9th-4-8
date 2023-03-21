import { useEffect, useState } from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';
import useSetParams from '@/lib/hooks/useSetParams';

const TableCkeckbox = () => {
  const { currentStatus, currentDate, onSetParams } = useSetParams();
  const [isAll, setIsAll] = useState(currentStatus === '');
  const [isCompletedChecked, setIsCompletedChecked] = useState(
    currentStatus === 'true',
  );
  const [isInCompletedChecked, setIsInCompletedChecked] = useState(
    currentStatus === 'fasle',
  );

  const handleComplete = () => {
    onSetParams({
      pageValue: 1,
      dateValue: `${currentDate || ''}`,
      statusValue: 'true',
    });
    setIsCompletedChecked(!isCompletedChecked);
    setIsAll(false);
    setIsInCompletedChecked(false);
  };

  const handleInComplete = () => {
    onSetParams({
      pageValue: 1,
      dateValue: `${currentDate || ''}`,
      statusValue: 'false',
    });
    setIsInCompletedChecked(!isInCompletedChecked);
    setIsAll(false);
    setIsCompletedChecked(false);
  };

  const handleAll = () => {
    onSetParams({
      pageValue: 1,
      dateValue: `${currentDate || ''}`,
      statusValue: '',
    });
    setIsAll(true);
    setIsCompletedChecked(false);
    setIsInCompletedChecked(false);
  };

  useEffect(() => {
    setIsAll(currentStatus === '');
    setIsCompletedChecked(currentStatus === 'true');
    setIsInCompletedChecked(currentStatus === 'false');
  }, [currentDate, currentStatus]);

  return (
    <Stack
      direction={['column', 'row']}
      spacing={[1, 5]}
      justify="center"
      p={5}
    >
      <Checkbox
        size="md"
        colorScheme="green"
        p={1}
        borderWidth={2}
        borderColor="blue.200"
        borderRadius={5}
        isChecked={isAll}
        onChange={handleAll}
      >
        모든 주문 상태보기
      </Checkbox>
      <Checkbox
        size="md"
        colorScheme="green"
        p={1}
        borderWidth={2}
        borderColor="green.200"
        borderRadius={5}
        isChecked={isCompletedChecked}
        onChange={isCompletedChecked ? handleAll : handleComplete}
      >
        완료된 주문 상태보기
      </Checkbox>
      <Checkbox
        size="md"
        colorScheme="green"
        p={1}
        borderWidth={2}
        borderColor="red.200"
        borderRadius={5}
        isChecked={isInCompletedChecked}
        onChange={isInCompletedChecked ? handleAll : handleInComplete}
      >
        대기중인 주문 상태보기
      </Checkbox>
    </Stack>
  );
};

export default TableCkeckbox;
