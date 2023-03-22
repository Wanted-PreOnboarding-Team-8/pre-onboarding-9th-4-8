import { useState } from 'react';

const useSorters = () => {
  const [isOrderIdSorterActive, setIsOrderIdSOrterActive] = useState<
    string | null
  >(localStorage.getItem('orderIdSorter'));
  const [isTransacTimeSorterActive] = useState<string | null>(
    localStorage.getItem('transacTimeSorter'),
  );

  const orderIdSorter = (a: number, b: number) => {
    if (isOrderIdSorterActive === 'true') {
      console.log('tre');
      return a - b;
    } else {
      console.log('ddasflksdafjre');
      return b - a;
    }
  };
  const transacTimeSorter = () => {
    //
  };

  const setSorter = (sortBy: string, onOff: boolean) => {
    localStorage.setItem(sortBy, String(onOff));
    setIsOrderIdSOrterActive(String(onOff));
    //    if (sortBy === 'orderIdSorter') localStorage.setItem(sortBy, String(onOff));
    //    if (sortBy === 'transacTimeSorter') localStorage.setItem(sortBy, 'true');
  };

  console.log('useSotrterds...', typeof orderIdSorter);
  return {
    orderIdSorter,
    transacTimeSorter,
    setSorter,
    isOrderIdSorterActive,
    isTransacTimeSorterActive,
  };
};

export default useSorters;
