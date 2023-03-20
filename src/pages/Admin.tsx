import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { fetchOrderData } from '@/api/order';
import Paging from '@/components/Paging';
import { IOrderData } from '@/interface/orderData';
import useFetch from '@/lib/hooks/useFetch';
import OrderTable from '@/components/OrdarTable';
import { defaultDate } from '@/lib/utils/date';

const Admin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const date = searchParams.get('date') || 'all';

  const [payload, total, isLoading, isError] = useFetch<IOrderData>(
    fetchOrderData,
    (page - 1) * 50,
    date,
  );

  const handlePageChange = (pageNumber: number) => {
    setSearchParams({ date: date, page: String(pageNumber) });
  };

  useEffect(() => {
    if (!searchParams.get('date') && !searchParams.get('page')) {
      setSearchParams({ date: defaultDate, page: '1' });
    }
  }, [searchParams, setSearchParams]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <Center>
        <Text fontSize="5xl">
          <Link to={`/admin?date=${defaultDate}&page=1`}>데이터 : {date}</Link>
        </Text>
      </Center>
      <Center>
        <Text fontSize="5xl">
          <Link to="/admin?date=all&page=1">전체데이터</Link>
        </Text>
      </Center>
      <OrderTable orderData={payload} page={page} />
      <Paging
        page={page}
        totalItemsCount={total}
        itemsCountPerPage={50}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Admin;
