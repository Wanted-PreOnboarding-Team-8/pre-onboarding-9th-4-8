import { useQuery } from '@tanstack/react-query';
import apiClient from '@/api';
import { IOrderData } from '@/interface/orderData';

export const useRealtimeFetch = (
  queryKey: string[],
  url: string,
  interval: number,
): {
  data: IOrderData[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isFetching, isError } = useQuery(
    queryKey,
    () => apiClient.get(url).then((res) => res.data),
    {
      refetchInterval: interval,
      staleTime: interval,
    },
  );

  return { data, isLoading, isFetching, isError };
};
