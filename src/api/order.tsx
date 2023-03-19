import { API_URL } from '@/constants/url';
import { apiClient } from '@/api/apiClient';

export const fetchOrderData = async () => {
  try {
    const response = await apiClient.get(API_URL);
    return response;
  } catch (error) {
    throw new Error('데이터가 없습니다.');
  }
};
