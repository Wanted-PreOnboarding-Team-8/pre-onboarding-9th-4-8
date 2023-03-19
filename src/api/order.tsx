import { API_URL } from '@/constants/url';
import { apiClient } from '@/api/apiClient';

export const fetchOrderData = async (startIndex: number) => {
  try {
    const response = await apiClient.get(API_URL);
    const pageRequest = response.data.slice(startIndex, startIndex + 50);
    const total = response.data.length;
    return { data: pageRequest, length: total };
  } catch (error) {
    throw new Error('데이터가 없습니다.');
  }
};
