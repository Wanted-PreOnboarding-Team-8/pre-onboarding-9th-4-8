import { useSearchParams } from 'react-router-dom';
import { IOnSetParams } from '@/interface/main';

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;
  const selectedDate = searchParams.get('date');
  const orderStatus = searchParams.get('status');

  const onSetParams = ({
    pageValue,
    dateValue,
    dateSelectEvent,
    orderStatusValue,
  }: IOnSetParams) => {
    if (pageValue !== undefined) searchParams.set('page', String(pageValue));
    if (dateValue !== undefined) searchParams.set('date', String(dateValue));
    if (dateSelectEvent)
      searchParams.set('date', String(dateSelectEvent.target.value));
    if (orderStatusValue !== undefined)
      searchParams.set('status', orderStatusValue);

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return { pageNumber, selectedDate, orderStatus, onSetParams };
};

export default useParams;
