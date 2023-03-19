import { fetchOrderData } from '@/api/order';
import { IOrderData } from '@/interface/orderData';
import useFetch from '@/lib/hooks/useFetch';

const Admin = () => {
  const [payload, isLoading, isError] = useFetch<IOrderData>(fetchOrderData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return <>{console.log(payload)}</>;
};

export default Admin;
