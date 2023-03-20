import { useSearchParams, useLocation } from 'react-router-dom';
import { FILTER_PARAM_KEY } from '@/constants/filter';

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOnlyToday =
    searchParams.get(FILTER_PARAM_KEY) === 'true' ? true : false;

  const curParams = useLocation().search.slice(1);

  const toggleFilter = () => {
    if (curParams.includes(FILTER_PARAM_KEY)) {
      setSearchParams(
        `${curParams.split('&')[0]}&${FILTER_PARAM_KEY}=${!isOnlyToday}`,
      );
    } else setSearchParams(`${curParams}&${FILTER_PARAM_KEY}=${!isOnlyToday}`);
  };

  return { isOnlyToday, toggleFilter };
};
