import apiClient from '@/api';
import { MOCK_API_URL } from '@/constants/url';
import { IOrder } from '@/interface/order';

const getOrderList = async () => {
  const { data } = await apiClient.get<IOrder[]>(MOCK_API_URL);
  return data;
};
export { getOrderList };
