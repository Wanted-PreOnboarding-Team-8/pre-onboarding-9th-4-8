import { ISortMethods } from '@/interface/mock';

export const sortMethods: ISortMethods = {
  idDESC: (a, b) => b.id - a.id,
  idACS: (a, b) => a.id - b.id,
  timeDESC: (a, b) =>
    new Date(b.transaction_time).getTime() -
    new Date(a.transaction_time).getTime(),
  timeACS: (a, b) =>
    new Date(a.transaction_time).getTime() -
    new Date(b.transaction_time).getTime(),
};
