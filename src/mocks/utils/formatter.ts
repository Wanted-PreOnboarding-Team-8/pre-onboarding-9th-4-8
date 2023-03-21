import { IOrderItem } from '@/interface/main';
import { formatDate } from '@/lib/utils/formattingHelper';

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

export const formatDollarToNumber = (str: string) => Number(str.split('$')[1]);
