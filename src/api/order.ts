import { ITEMS_PER_PAGE } from '@/constants/units';
import { StatusType } from '@/interface/main';
import apiClient from './apiClient';

export const getOrderData = async (
  offset: number,
  date: string | null,
  sort: string,
  status: StatusType | null,
) => {
  return await apiClient({
    method: 'get',
    url: '/mock/order',
    params: {
      offset,
      date,
      sort,
      status,
      limit: ITEMS_PER_PAGE,
    },
  });
};
