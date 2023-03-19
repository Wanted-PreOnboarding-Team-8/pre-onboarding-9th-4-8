import { useEffect, useState } from 'react';
import apiClient from '@/api';

const useFetch = <T>(defaultValue: T, url: string): [T, boolean, boolean] => {
  const [payload, setPayload] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) => res.data)
      .then((res) => setPayload(res))
      .catch((e) => {
        console.error(e);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [payload, isLoading, isError];
};

export default useFetch;
