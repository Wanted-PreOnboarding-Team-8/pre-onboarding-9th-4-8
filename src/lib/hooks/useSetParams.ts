import { useSearchParams } from 'react-router-dom';
import { IOnSetParams, SortParamType, StatusType } from '@/interface/main';
import { PARAMS } from '@/constants/param';
import { TODAY } from '@/constants/config';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(PARAMS.PAGE)) || 1;
  const currentDate = searchParams.get(PARAMS.DATE) || TODAY;
  const currentSort = (searchParams.getAll(PARAMS.SORT) as SortParamType[]) || [
    'idAsc',
  ];
  const currentStatus = searchParams.get(PARAMS.STATUS) as
    | StatusType
    | undefined;
  const currentQuery = searchParams.get(PARAMS.QUERY) as StatusType;

  const onSetParams = ({
    pageValue,
    dateValue,
    sortValue,
    statusValue,
    queryValue,
    event,
  }: IOnSetParams) => {
    if (pageValue !== undefined)
      searchParams.set(PARAMS.PAGE, String(pageValue));
    if (dateValue !== undefined)
      searchParams.set(PARAMS.DATE, String(dateValue));
    if (sortValue !== undefined) {
      if (sortValue.id !== undefined) {
        searchParams.set(PARAMS.SORT, sortValue.id);
      } else {
        searchParams.delete(PARAMS.SORT);
      }
      if (sortValue.transactionTime !== undefined) {
        searchParams.append(PARAMS.SORT, sortValue.transactionTime);
      }
    }
    if (statusValue === undefined) {
      searchParams.delete(PARAMS.STATUS);
    } else {
      searchParams.set(PARAMS.STATUS, String(statusValue));
    }
    if (queryValue !== undefined) {
      searchParams.set(PARAMS.QUERY, String(queryValue));
    }
    if (event) searchParams.set(PARAMS.DATE, String(event.target.value));

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return {
    currentPage,
    currentDate,
    currentSort: currentSort.join(),
    currentStatus,
    currentQuery,
    onSetParams,
  };
};

export default useSetParams;
