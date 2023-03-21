import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  orderStatus: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, orderStatus],
    queryFn: () =>
      getOrderData(pageNum - 1, date, orderStatus).then((res) => res.data),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
