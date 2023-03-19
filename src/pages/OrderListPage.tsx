import { useEffect, useState } from 'react';
import { Badge, Grid, Heading } from '@chakra-ui/react';
import { IOrder } from '@/interface/order';
import DataTable from '@/components/table/DataTable';
import { IColumnData } from '@/interface/table';
import Pagination from '@/components/pagination/Pagination';
import { getSliceIndexes } from '@/lib/utils/pageHelper';
import DataFilter from '@/components/filter/DataFilter';
import { filterByToday, getOrders } from '@/store/slices/orderSlice';
import useFilterParams from '@/lib/hooks/useFilterParams';
import { DELAY } from '@/constants/order';
import { useAppDispatch, useAppSelector } from '../store/index';

const OrderListPage = () => {
  const dispatch = useAppDispatch();
  const { orderList, isLoading, error } = useAppSelector(
    (state) => state.orders,
  );
  const [amendParams, fieldParam, pageParam] = useFilterParams();

  const [page, setPage] = useState<number>(pageParam ? parseInt(pageParam) : 1);
  const total = orderList.length;

  const { start, end } = getSliceIndexes(page);

  useEffect(() => {
    if (!fieldParam) {
      amendParams({ field: 'today', page: '1' });
    }
  }, [fieldParam, amendParams]);

  useEffect(() => {
    amendParams({ page: `${page}` });
  }, [page, amendParams]);

  useEffect(() => {
    const requestOrders = () => {
      dispatch(getOrders()).then(() => {
        if (fieldParam === 'today') dispatch(filterByToday());
      });
    };
    const updateOrders = () => {
      requestOrders();
      setTimeout(updateOrders, DELAY);
    };
    updateOrders();
  }, [fieldParam, dispatch]);

  const columnData: IColumnData<IOrder>[] = [
    { column: '주문번호', data: (data) => data.id },
    {
      column: '거래시간',
      data: (data) => data.transaction_time,
    },
    {
      column: '주문처리상태',
      data: (data) => <Badge>{data.status === true ? '완료' : '예정'}</Badge>,
    },
    { column: '고객번호', data: (data) => data.customer_id },
    { column: '고객이름', data: (data) => data.customer_name },
    { column: '가격', data: (data) => data.currency },
  ];

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error!!</>;

  return (
    <Grid>
      <Heading as="h2" size="lg">
        당일 거래 내역
      </Heading>
      <DataFilter />
      <DataTable data={orderList.slice(start, end)} columnData={columnData} />
      {total && <Pagination total={total} page={page} setPage={setPage} />}
    </Grid>
  );
};

export default OrderListPage;
