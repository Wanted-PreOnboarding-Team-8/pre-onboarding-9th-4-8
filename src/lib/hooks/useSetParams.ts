import { useSearchParams } from 'react-router-dom';
import { IOnSetParams, SortParamType } from '@/interface/main';
import { PARAMS } from '@/constants/param';
import { generateSortQuery } from '../utils/generator';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentDate = searchParams.get('date');
  const currentSort = searchParams.getAll('sort') as SortParamType[];

  const onSetParams = ({
    pageValue,
    dateValue,
    sortValue,
    event,
  }: IOnSetParams) => {
    if (pageValue !== undefined)
      searchParams.set(PARAMS.PAGE, String(pageValue));
    if (dateValue !== undefined)
      searchParams.set(PARAMS.DATE, String(dateValue));
    if (sortValue !== undefined) {
      const sorts = currentSort.length ? currentSort : ['idAsc'];
      const { sortBy } = generateSortQuery(sortValue);
      if (sortBy === 'id') {
        searchParams.set(PARAMS.SORT, sortValue);
        if (sorts[1]) searchParams.append(PARAMS.SORT, sorts[1]);
      } else {
        searchParams.set(PARAMS.SORT, sorts[0]);
        searchParams.append(PARAMS.SORT, sortValue);
      }
    }
    if (event) searchParams.set(PARAMS.DATE, String(event.target.value));

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return {
    currentPage,
    currentDate,
    currentSort: currentSort.join(),
    onSetParams,
  };
};

export default useSetParams;
