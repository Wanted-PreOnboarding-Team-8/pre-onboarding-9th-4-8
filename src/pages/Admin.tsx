import { useSearchParams } from 'react-router-dom';
import { fetchOrderData } from '@/api/order';
import Paging from '@/components/Paging';
import { IOrderData } from '@/interface/orderData';
import useFetch from '@/lib/hooks/useFetch';

const Admin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const [payload, isLoading, isError] = useFetch<IOrderData>(
    fetchOrderData,
    (page - 1) * 50,
  );
  console.log(payload);

  const handlePageChange = (pageNumber: number) => {
    setSearchParams({ page: String(pageNumber) });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <ul>
        {payload &&
          payload.map((item) => {
            return <li key={item.id}>{item.id}</li>;
          })}
      </ul>
      <Paging
        page={page}
        totalItemsCount={payload.length}
        itemsCountPerPage={50}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Admin;
