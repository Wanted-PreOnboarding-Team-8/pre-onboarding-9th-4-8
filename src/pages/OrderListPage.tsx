import { useEffect, useState } from 'react';
import { Badge, VStack } from '@chakra-ui/react';
import { IOrder } from '@/interface/order';
import DataTable from '@/components/table/DataTable';
import { IColumnData } from '@/interface/table';
import Pagination from '@/components/pagination/Pagination';
import { getSliceIndexes } from '@/lib/utils/pageHelper';
import DataFilter from '@/components/filter/DataFilter';
import useFilterParams from '@/lib/hooks/useFilterParams';
import useFetch from '@/lib/hooks/useFetch';
import { FIELD } from '@/constants/order';
import { useAppSelector } from '../store/index';

const OrderListPage = () => {
  const { orderList, error } = useAppSelector((state) => state.orders);
  const [amendParams, fieldParam, pageParam] = useFilterParams();

  useFetch(fieldParam);
  const [page, setPage] = useState<number>(pageParam ? parseInt(pageParam) : 1);
  const total = orderList.length;

  const { start, end } = getSliceIndexes(page);

  useEffect(() => {
    amendParams({
      field: fieldParam ? fieldParam : FIELD.today,
      page: `${page}`,
    });
  }, [page, fieldParam, amendParams]);

  const columnData: IColumnData<IOrder>[] = [
    { column: '주문번호', data: (data) => data.id },
    {
      column: '거래시간',
      data: (data) => data.transaction_time,
    },
    {
      column: '주문처리상태',
      data: (data) =>
        data.status === true ? (
          <Badge background={`var(--complete)`} color={`var(--complete-text)`}>
            완료
          </Badge>
        ) : (
          <Badge
            background={`var(--not-complete)`}
            color={`var(--not-complete-text)`}
          >
            예정
          </Badge>
        ),
    },
    { column: '고객번호', data: (data) => data.customer_id },
    { column: '고객이름', data: (data) => data.customer_name },
    { column: '가격', data: (data) => data.currency },
  ];

  if (error) return <>Error!!</>;

  return (
    <VStack p="30">
      <DataFilter />
      <DataTable data={orderList.slice(start, end)} columnData={columnData} />
      {total && <Pagination total={total} page={page} setPage={setPage} />}
    </VStack>
  );
};

export default OrderListPage;
