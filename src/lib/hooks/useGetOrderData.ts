import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sort: string | null,
  status: string | null,
  customer: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sort, status, customer], // currentSort 추가
    queryFn: () =>
      getOrderData(pageNum - 1, date, sort, status, customer).then(
        (res) => res.data,
      ),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
