import { IOrderItem, SortOrderType } from '@/interface/main';

export const filterByDate = (
  data: IOrderItem[],
  date: string,
): IOrderItem[] => {
  return data.filter((item) => item.transaction_time.split(' ')[0] === date);
};

export const filterByStatus = (
  data: IOrderItem[],
  status: boolean,
): IOrderItem[] => {
  return data.filter((item) => item.status === status);
};

export const filterByQuery = (data: IOrderItem[], query: string) => {
  return data.filter((item) =>
    item.customer_name.match(new RegExp(query, 'i')),
  );
};

export const sortById = (
  data: IOrderItem[],
  orderBy: SortOrderType,
): IOrderItem[] => {
  data.sort((a, b) => (orderBy === 'Asc' ? a.id - b.id : b.id - a.id));
  return data;
};

export const sortByDateTime = (
  data: IOrderItem[],
  orderBy: SortOrderType,
): IOrderItem[] => {
  data.sort((a, b) =>
    orderBy === 'Asc'
      ? new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
      : new Date(b.transaction_time).getTime() -
        new Date(a.transaction_time).getTime(),
  );
  return data;
};
