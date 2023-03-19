import { useEffect, useState } from 'react';

type FetchDataFuncType<T> = (
  startIndex: number,
) => Promise<{ data: T[]; length: number }>;

const useFetch = <T>(fetchData: FetchDataFuncType<T>, startIndex: number) => {
  const [payload, setPayload] = useState<T[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(startIndex)
      .then((response) => {
        console.log(response.data.length);
        setPayload(response.data);
        setTotal(response.length);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchData, startIndex]);

  return [payload, total, isLoading, isError] as const;
};

export default useFetch;
