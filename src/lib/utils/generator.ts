import {
  IOrderItem,
  SortParamType,
  SortOrderType,
  SortType,
} from '@/interface/main';
import { formatDate } from './formattingHelper';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const generateStartAndEndDate = (data: IOrderItem[]) => {
  const dateList = data.map(
    ({ transaction_time }) => new Date(transaction_time),
  );

  const startDate = formatDate(minDate(dateList));
  const endDate = formatDate(maxDate(dateList));

  return { startDate, endDate };
};

export const generateZeroToNArr = (n: number) => Array.from(Array(n).keys());

export const generateSortQuery = (
  s: SortParamType,
): { sortBy: SortType; orderBy: SortOrderType } => {
  const ascIndex = s.indexOf('Asc');
  const sliceIndex = ascIndex !== -1 ? ascIndex : s.indexOf('Desc');
  const orderBy = ascIndex !== -1 ? 'Asc' : 'Desc';
  const sortBy = s.slice(0, sliceIndex) as SortType;
  return { sortBy, orderBy };
};
