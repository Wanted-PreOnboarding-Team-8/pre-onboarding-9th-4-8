import { ITEMS_PER_PAGE } from '@/constants/units';
import { SortParamType } from '@/interface/main';
import apiClient from './apiClient';

export const getOrderData = async (
  offset: number,
  date: string | null,
  sort: string,
) => {
  return await apiClient({
    method: 'get',
    url: '/mock/order',
    params: {
      offset,
      date,
      sort,
      limit: ITEMS_PER_PAGE,
    },
  });
};
