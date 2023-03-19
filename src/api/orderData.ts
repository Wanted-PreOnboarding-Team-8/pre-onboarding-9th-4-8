import apiClient from '@/api';

export const getData = (url: string) => {
  try {
    return apiClient.get(url);
  } catch (e) {
    throw new Error('api요청이 실패했습니다.');
  }
};
