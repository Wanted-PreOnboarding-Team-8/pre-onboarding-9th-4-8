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
  dateSelectEvent?: React.ChangeEvent<HTMLInputElement>;
  orderStatusValue?: 'complete' | 'incomplete' | 'all';
}

export interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}
