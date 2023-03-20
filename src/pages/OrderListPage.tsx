import { Button } from '@chakra-ui/react';
import { useRealtimeFetch } from '@/lib/hooks/useRealtimeFetch';
import { usePagenation } from '@/lib/hooks/usePagenation';
import { useFilter } from '@/lib/hooks/useFilter';
import { API_URL } from '@/constants/url';
import OrderList from '@/components/OrderList';
import Pagenation from '@/components/Pagenation';
import { ORDER_LIST_QUERY, INTERVAL } from '@/constants/query';
import { LENGTH_PER_PAGE } from '@/constants/pagenation';
import { TODAY } from '@/constants/today';

const OrderListPage = () => {
  const { isLoading, isFetching, isError, data } = useRealtimeFetch(
    [ORDER_LIST_QUERY],
    API_URL,
    INTERVAL,
  );
  const { isOnlyToday, toggleFilter } = useFilter();

  const { fromCursor, movePage } = usePagenation(LENGTH_PER_PAGE);

  const filteredData = data?.filter((eachData) => {
    if (isOnlyToday) return eachData.transaction_time.split(' ')[0] === TODAY;
    else return true;
  });

  const currentPageData = filteredData?.slice(
    fromCursor,
    fromCursor + LENGTH_PER_PAGE,
  );

  return (
    <>
      <div>
        <Button onClick={toggleFilter}>오늘만 보기</Button>
        <h1>OrderList</h1>
        {isFetching && <span>Fetching...</span>}
        {isLoading && <span>Loading...</span>}
        {isError && <span>Err occured...</span>}
        <br />
        {data && (
          <Pagenation
            lengthPerPage={LENGTH_PER_PAGE}
            totalLength={filteredData?.length}
            pagenate={movePage}
          />
        )}
        {data && <OrderList data={currentPageData} />}
      </div>
    </>
  );
};

export default OrderListPage;
