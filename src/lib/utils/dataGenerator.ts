import { IOrderItem, SortOrderType } from '@/interface/main';

export const filterByDate = (
  data: IOrderItem[],
  date: string,
): IOrderItem[] => {
  return data.filter((item) => item.transaction_time.split(' ')[0] === date);
};

export const sortById = (
  data: IOrderItem[],
  orderBy: SortOrderType,
): IOrderItem[] => {
  data.sort((a, b) => (orderBy === 'Asc' ? a.id - b.id : b.id - a.id));
  return data;
};
