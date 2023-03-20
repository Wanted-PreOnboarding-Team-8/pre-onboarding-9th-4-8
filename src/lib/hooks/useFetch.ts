import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { DELAY, FIELD } from '@/constants/order';
import { getOrders } from '@/store/slices/orderSlice';

const useFetch = (field: string | null) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestOrders = () => {
      dispatch(
        getOrders({
          field: field ? (field as FieldType) : FIELD.today,
        }),
      );
    };
    let timer: NodeJS.Timeout;
    const updateOrders = () => {
      requestOrders();
      timer = setTimeout(updateOrders, DELAY);
    };
    updateOrders();
    return () => {
      clearTimeout(timer);
    };
  }, [field, dispatch]);
};

export default useFetch;
