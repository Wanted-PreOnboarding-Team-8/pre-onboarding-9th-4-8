export interface IOrderItem {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export interface IOrderInfo {
  endDate: string;
  startDate: string;
  totalCount: number;
  totalCurrency: number;
}

export interface IOnSetParams {
  pageValue?: number;
  dateValue?: string;
  sortValue?: SortParamType;
  event?: React.ChangeEvent<HTMLInputElement>;
}

export interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}

export interface IOrderData {
  order: IOrderItem[];
  orderInfo: IOrderInfo;
}

export type SortType = 'id' | 'transactionTime';
export type SortOrderType = 'Asc' | 'Desc';
export type SortParamType = `${SortType}${SortOrderType}`;
