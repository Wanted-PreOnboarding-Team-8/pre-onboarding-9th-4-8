import { useSearchParams, useLocation } from 'react-router-dom';
import { PAGE_PARAM_KEY } from '@/constants/pagenation';
import { FILTER_PARAM_KEY } from '@/constants/filter';

export const usePagenation = (lengthPerpage: number, filter?: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curPageNumber = searchParams.get(PAGE_PARAM_KEY);

  const curParams = useLocation().search.slice(1);

  const movePage = (pageNubmer: number) => {
    if (curParams.includes(FILTER_PARAM_KEY)) {
      setSearchParams(
        `${PAGE_PARAM_KEY}=${pageNubmer}&${curParams.split('&')[1]}`,
      );
    } else setSearchParams(`${PAGE_PARAM_KEY}=${pageNubmer}`);
  };

  const fromCursor = (Number(curPageNumber) - 1) * lengthPerpage;

  return { fromCursor, movePage };
};
