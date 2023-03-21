import {
  IOrderItem,
  SortParamType,
  SortOrderType,
  SortType,
  SortValueType,
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

export const generateSortInfo = (
  s: SortParamType,
): { sortBy: SortType; orderBy: SortOrderType } => {
  const ascIndex = s.indexOf('Asc');
  const sliceIndex = ascIndex !== -1 ? ascIndex : s.indexOf('Desc');
  const orderBy = ascIndex !== -1 ? 'Asc' : 'Desc';
  const sortBy = s.slice(0, sliceIndex) as SortType;
  return { sortBy, orderBy };
};

export const generateDefaultValueOfSort = (queryString: string) => {
  const query = queryString.split(',');
  let defaultIdSort: SortOrderType | undefined;
  let defaultTimeSort: SortOrderType | undefined;
  query.forEach((s) => {
    const { sortBy, orderBy } = generateSortInfo(s as SortParamType);
    if (sortBy === 'id') defaultIdSort = orderBy;
    if (sortBy === 'transactionTime') defaultTimeSort = orderBy;
  });
  return { defaultIdSort, defaultTimeSort };
};

export const generateSortParams = (
  queryString: string,
  sort: SortType,
  param?: SortParamType,
): SortValueType => {
  const query = queryString.split(',');
  let id: SortParamType | undefined;
  let transactionTime: SortParamType | undefined;
  query.forEach((s) => {
    const { sortBy } = generateSortInfo(s as SortParamType);
    if (sortBy === 'id') id = s as SortParamType;
    if (sortBy === 'transactionTime') transactionTime = s as SortParamType;
  });
  if (sort === 'id') id = param;
  if (sort === 'transactionTime') transactionTime = param;
  return { id, transactionTime };
};
