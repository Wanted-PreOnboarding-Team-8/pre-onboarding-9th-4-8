import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';
import { SortParamType } from '@/interface/main';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sort: SortParamType = 'idAsc',
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sort],
    queryFn: () =>
      getOrderData(pageNum - 1, date, sort).then((res) => res.data),
    refetchInterval: 5000,
  });
};

export default useGetOrderData;
