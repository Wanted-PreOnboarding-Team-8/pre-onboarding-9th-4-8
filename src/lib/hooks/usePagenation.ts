import { useSearchParams } from 'react-router-dom';
import { PAGE_PARAM_KEY } from '@/constants/pagenation';

export const usePagenation = (lengthPerpage: number, filter?: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curPageNumber = searchParams.get(PAGE_PARAM_KEY);

  const movePage = (pageNubmer: number) => {
    setSearchParams(`${PAGE_PARAM_KEY}=${pageNubmer}`);
  };

  const fromCursor = (Number(curPageNumber) - 1) * lengthPerpage;

  return { fromCursor, movePage };
};