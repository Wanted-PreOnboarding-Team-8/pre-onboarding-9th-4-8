import { IOrderItem } from '@/interface/main';
import { ISortMethods } from '@/interface/mock';

export const sortMethods: ISortMethods = {
  idDESC: (a, b) => b.id - a.id,
  idASC: (a, b) => a.id - b.id,
  timeDESC: (a, b) =>
    new Date(b.transaction_time).getTime() -
    new Date(a.transaction_time).getTime(),
  timeASC: (a, b) =>
    new Date(a.transaction_time).getTime() -
    new Date(b.transaction_time).getTime(),
};

export const filterStatus = (data: IOrderItem[], status: string) => {
  if (status === 'true') {
    return data.filter((item) => item.status === true);
  }

  if (status === 'false') {
    return data.filter((item) => item.status === false);
  }

  return data;
};

export const filterDate = (data: IOrderItem[], date: string) => {
  return data.filter((item) => item.transaction_time.split(' ')[0] === date);
};

export const filterCustomer = (data: IOrderItem[], customer: string) => {
  return data.filter((item) => item.customer_name === customer);
};
