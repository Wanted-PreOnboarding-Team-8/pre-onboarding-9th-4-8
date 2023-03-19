import { TODAY } from '@/constants/order';
import { IOrder } from '@/interface/order';

const filterByToday = (orderList: IOrder[]): IOrder[] => {
  const filtered = orderList.filter(
    (order) => order.transaction_time.split(' ')[0] === TODAY,
  );
  return filtered;
};

export { filterByToday };
