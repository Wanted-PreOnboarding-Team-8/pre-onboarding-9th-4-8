import { useState } from 'react';
import { IOrderData } from '@/interface/orderData';

export const usePagenation = (lengthPerpage: number, filter?: string[]) => {
  const [fromCursor, setFromCursor] = useState(0);

  const findLastCursor = (soFarData: IOrderData[]) => {
    // 필터 적용시 적절한 커서를 찾는다.
  };

  const movePage = (pageNubmer: number) => {
    setFromCursor((pageNubmer - 1) * lengthPerpage);
  };

  return { fromCursor, movePage, findLastCursor };
};
