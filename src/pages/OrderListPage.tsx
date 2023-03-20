import { useRealtimeFetch } from '@/lib/hooks/useRealtimeFetch';
import { API_URL } from '@/constants/url';
import OrderList from '@/components/orderList';

const ORDER_LIST_QUERY = 'order_list_query';
const INTERVAL = 5000;

const OrderListPage = () => {
  const { data, isLoading, isFetching, isError } = useRealtimeFetch(
    [ORDER_LIST_QUERY],
    API_URL,
    INTERVAL,
  );

  return (
    <>
      <div>
        <h1>OrderList</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Err occured...</p>}
        {data && <OrderList data={data} />}
      </div>
    </>
  );
};

export default OrderListPage;
