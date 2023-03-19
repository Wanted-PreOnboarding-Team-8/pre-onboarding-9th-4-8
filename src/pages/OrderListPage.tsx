import React from 'react';
import { Badge, Grid, Heading } from '@chakra-ui/react';
import { IOrder } from '@/interface/order';
import useFetch from '@/lib/hooks/useFetch';
import { MOCK_API_URL } from '@/constants/url';
import DataTable from '@/components/table/DataTable';
import { IColumnData } from '@/interface/table';

const OrderListPage = () => {
  const [orderList, isLoading, isError] = useFetch<IOrder[]>([], MOCK_API_URL);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error!!</>;

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

  return (
    <Grid>
      <Heading as="h2" size="lg">
        당일 거래 내역
      </Heading>
      <DataTable data={orderList} columnData={columnData} />
    </Grid>
  );
};

export default OrderListPage;
