export interface IOrder {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IOrderReducer {
  isLoading: boolean;
  error: string | null;
  orderList: IOrder[];
}
