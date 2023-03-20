import { HStack, Select, Text, VStack } from '@chakra-ui/react';
import useFilterParams from '@/lib/hooks/useFilterParams';
import { FIELD } from '@/constants/order';

const DataFilter = () => {
  const [amendParams, fieldParam] = useFilterParams();

  const onChangeSelectFields = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === FIELD.today) {
      amendParams({ field: FIELD.today, page: '1' });
    } else {
      amendParams({ field: FIELD.all, page: '1' });
    }
  };

  return (
    <HStack w="80%" p="5" background={`var(--light-grey)`}>
      <VStack>
        <Text fontWeight={'bold'}>거래 내역 조회</Text>
        <Select
          value={fieldParam ? fieldParam : FIELD.today}
          onChange={onChangeSelectFields}
          background={`var(--white)`}
        >
          <option value="today">오늘</option>
          <option value="all">전체</option>
        </Select>
      </VStack>
    </HStack>
  );
};

export default DataFilter;
