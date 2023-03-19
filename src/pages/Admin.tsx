import { useSearchParams } from 'react-router-dom';
import { fetchOrderData } from '@/api/order';
import Paging from '@/components/Paging';
import { IOrderData } from '@/interface/orderData';
import useFetch from '@/lib/hooks/useFetch';
import OrderTable from '@/components/OrdarTable';

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <OrderTable orderData={payload} />
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
