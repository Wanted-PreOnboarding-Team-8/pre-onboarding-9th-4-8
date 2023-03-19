import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FILTERS } from '@/constants/order';

const useFilterParams = (): UseFilterReturnType => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fieldParam = searchParams.get('field');
  const pageParam = searchParams.get('page');

  useEffect(() => {
    if (!fieldParam) {
      setSearchParams({ field: 'today', page: '1' });
    }
  }, [fieldParam, setSearchParams]);

  const amendParams = useCallback(
    (obj: { [key: string]: string }) => {
      const searchConfig: { [key: string]: string } = {};

      FILTERS.forEach((filter) => {
        const param = searchParams.get(filter);
        if (!param) return;
        searchConfig[filter] = param;
      });
      setSearchParams({ ...searchConfig, ...obj });
    },
    [searchParams, setSearchParams],
  );
  return [amendParams, fieldParam, pageParam];
};

export default useFilterParams;
