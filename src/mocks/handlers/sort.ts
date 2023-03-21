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
