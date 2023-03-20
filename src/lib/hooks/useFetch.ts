import { useQuery } from 'react-query';

type FetchDataFuncType<T> = (
  startIndex: number,
  date: string,
) => Promise<{ data: T[]; length: number }>;

const useFetch = <T>(
  fetchData: FetchDataFuncType<T>,
  startIndex: number,
  date: string,
) => {
  const {
    data: { data: payload = [], length: total } = { data: [], length: 0 },
    isLoading,
    isError,
  } = useQuery(
    ['fetchData', startIndex, date],
    async () => {
      const response = await fetchData(startIndex, date);
      return response;
    },
    { refetchInterval: 5000 },
  );

  return [payload, total, isLoading, isError] as const;
};

export default useFetch;
