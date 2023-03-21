interface ISort {
  id: number;
  transaction_time: string;
}

export interface ISortMethods {
  [key: string]: (a: ISort, b: ISort) => number;
}
