import { API_URL } from '@/constants/url';
import { apiClient } from '@/api/apiClient';
import { filterData } from '@/lib/utils/filter';

export const fetchOrderData = async (startIndex: number, date: string) => {
  try {
    const response = await apiClient.get(API_URL);
    let data = response.data;

    data = filterData(data, date);

    const pageRequest = data.slice(startIndex, startIndex + 50);
    const total = data.length;
    return { data: pageRequest, length: total };
  } catch (error) {
    throw new Error('데이터가 없습니다.');
  }
};
