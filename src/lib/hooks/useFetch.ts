import { useEffect, useState } from 'react';

type FetchDataFuncType<T> = (startIndex: number) => Promise<{ data: T[] }>;

const useFetch = <T>(fetchData: FetchDataFuncType<T>, startIndex: number) => {
  const [payload, setPayload] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(startIndex)
      .then((response) => {
        setPayload(response.data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchData, startIndex]);

  return [payload, isLoading, isError] as const;
};

export default useFetch;
