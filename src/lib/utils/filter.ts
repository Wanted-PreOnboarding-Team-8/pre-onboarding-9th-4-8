import { IOrderData } from '@/interface/orderData';

export const filterData = (
  data: Array<IOrderData>,
  date: string,
): Array<IOrderData> => {
  let filteredData = data;
  if (date !== 'all') {
    filteredData = filterByDate(filteredData, date);
  }

  return filteredData;
};

const filterByDate = (
  data: Array<IOrderData>,
  date: string,
): Array<IOrderData> => {
  return data.filter(
    (item: { transaction_time: string }) =>
      item.transaction_time.substring(0, 10) === date,
  );
};
