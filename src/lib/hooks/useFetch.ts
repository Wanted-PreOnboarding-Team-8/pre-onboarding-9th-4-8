import { useEffect, useState } from 'react';

type FetchDataFunc<T> = () => Promise<{ data: T[] }>;

const useFetch = <T>(fetchData: FetchDataFunc<T>) => {
  const [payload, setPayload] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((response) => {
        setPayload(response.data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchData]);

  return [payload, isLoading, isError];
};

export default useFetch;
