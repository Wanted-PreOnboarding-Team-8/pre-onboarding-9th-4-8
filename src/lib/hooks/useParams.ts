import { useSearchParams } from 'react-router-dom';
import { IOnSetParams } from '@/interface/main';

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;
  const selectedDate = searchParams.get('date');

  const onSetParams = ({ pageValue, dateValue, event }: IOnSetParams) => {
    if (pageValue !== undefined) searchParams.set('page', String(pageValue));
    if (dateValue !== undefined) searchParams.set('date', String(dateValue));
    if (event) searchParams.set('date', String(event.target.value));

    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return { pageNumber, selectedDate, onSetParams };
};

export default useParams;
