import React from 'react';
import { IOrder } from '@/interface/order';
import useFetch from '@/lib/hooks/useFetch';
import { MOCK_API_URL } from '@/constants/url';

const OrderListPage = () => {
  const [orderList, isLoading, isError] = useFetch<IOrder[]>([], MOCK_API_URL);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error!!</>;

  return <div>Order List</div>;
};

export default OrderListPage;
