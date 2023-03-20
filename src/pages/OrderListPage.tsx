import { useRealtimeFetch } from '@/lib/hooks/useRealtimeFetch';
import { usePagenation } from '@/lib/hooks/usePagenation';
import { API_URL } from '@/constants/url';
import OrderList from '@/components/OrderList';
import Pagenation from '@/components/Pagenation';

const ORDER_LIST_QUERY = 'order_list_query';
const INTERVAL = 5000;
const LENGTH_PER_PAGE = 50;

const OrderListPage = () => {
  const { isLoading, isFetching, isError, data } = useRealtimeFetch(
    [ORDER_LIST_QUERY],
    API_URL,
    INTERVAL,
  );

  const { fromCursor, movePage } = usePagenation(LENGTH_PER_PAGE);

  const currentPageData = data?.slice(fromCursor, fromCursor + LENGTH_PER_PAGE);

  return (
    <>
      <div>
        <h1>OrderList</h1>
        {isFetching && <span>Fetching...</span>}
        {isLoading && <span>Loading...</span>}
        {isError && <span>Err occured...</span>}
        <br />
        {data && (
          <Pagenation
            lengthPerPage={LENGTH_PER_PAGE}
            totalLength={data.length}
            pagenate={movePage}
          />
        )}
        {data && <OrderList data={currentPageData} />}
      </div>
    </>
  );
};

export default OrderListPage;
