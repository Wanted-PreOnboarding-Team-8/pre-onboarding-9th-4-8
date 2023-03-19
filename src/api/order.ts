import { API_URL } from '@/constants/url';
import { apiClient } from '@/api/apiClient';

export const fetchOrderData = async (startIndex: number, date?: string) => {
  try {
    const response = await apiClient.get(API_URL);
    let data = response.data;

    if (date !== 'all') {
      data = data.filter(
        (item: { transaction_time: string }) =>
          item.transaction_time.substring(0, 10) === date,
      );
    }

    const pageRequest = data.slice(startIndex, startIndex + 50);
    const total = data.length;
    return { data: pageRequest, length: total };
  } catch (error) {
    throw new Error('데이터가 없습니다.');
  }
};
