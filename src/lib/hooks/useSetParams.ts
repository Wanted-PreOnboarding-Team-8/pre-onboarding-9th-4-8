import { useSearchParams } from 'react-router-dom';
import { IOnSetParams } from '@/interface/main';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentDate = searchParams.get('date');
  const currentSort = searchParams.get('sort');
  const currentStatus = searchParams.get('status');
  const currentCustomer = searchParams.get('customer');

  const onSetParams = ({
    pageValue,
    dateValue,
    sortValue,
    statusValue,
    customerValue,
    event,
  }: IOnSetParams) => {
    if (pageValue !== undefined) searchParams.set('page', String(pageValue));
    if (dateValue !== undefined) searchParams.set('date', String(dateValue));
    if (sortValue !== undefined) searchParams.set('sort', String(sortValue));
    if (statusValue !== undefined)
      searchParams.set('status', String(statusValue));
    if (customerValue !== undefined)
      searchParams.set('customer', String(customerValue));
    if (event) searchParams.set('date', String(event.target.value));

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return {
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentCustomer,
    onSetParams,
  };
};

export default useSetParams;
