import { Button, Stack } from '@chakra-ui/react';
import useParams from '@/lib/hooks/useParams';
import { ITEMS_PER_PAGE } from '@/constants/units';
import { generateZeroToNArr } from '@/lib/utils/generator';
import useGetOrderData from '@/lib/hooks/useGetOrderData';

const TablePagination = () => {
  const { pageNumber, selectedDate, onSetParams } = useParams();
  const { data } = useGetOrderData(pageNumber, selectedDate);

  return (
    <Stack spacing={2} direction="row" align="center">
      {generateZeroToNArr(
        Math.ceil(data.orderInfo.totalCount / ITEMS_PER_PAGE),
      ).map((num) => (
        <Button
          type="button"
          colorScheme="blue"
          size="sm"
          key={num}
          onClick={() => onSetParams({ pageValue: num + 1 })}
          variant={pageNumber === num + 1 ? 'solid' : 'outline'}
        >
          {num + 1}
        </Button>
      ))}
    </Stack>
  );
};

export default TablePagination;
