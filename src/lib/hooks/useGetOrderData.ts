import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sort: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sort], // currentSort 추가
    queryFn: () =>
      getOrderData(pageNum - 1, date, sort).then((res) => res.data),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
