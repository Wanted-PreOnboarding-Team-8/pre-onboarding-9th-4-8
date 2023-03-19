import { useEffect, useState } from 'react';

type FetchDataFuncType<T> = (
  startIndex: number,
  filterDate?: string | undefined,
) => Promise<{ data: T[]; length: number }>;

const useFetch = <T>(
  fetchData: FetchDataFuncType<T>,
  startIndex: number,
  filterDate?: string | undefined,
) => {
  const [payload, setPayload] = useState<T[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(startIndex, filterDate)
      .then((response) => {
        setPayload(response.data);
        setTotal(response.length);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchData, startIndex, filterDate]);

  return [payload, total, isLoading, isError] as const;
};

export default useFetch;
