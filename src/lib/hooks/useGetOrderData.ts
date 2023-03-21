import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';
import { StatusType } from '@/interface/main';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sort = 'idAsc',
  status: StatusType | null,
  query: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sort, status, query],
    queryFn: () =>
      getOrderData(pageNum - 1, date, sort, status, query).then(
        (res) => res.data,
      ),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
