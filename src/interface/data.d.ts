export interface IData {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export interface IPageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageNums?: number;
}
