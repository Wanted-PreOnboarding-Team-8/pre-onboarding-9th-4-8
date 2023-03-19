export interface PagingProps {
  page: number;
  totalItemsCount: number;
  itemsCountPerPage: number;
  handlePageChange: (pageNumber: number) => void;
}

interface IOrderProps {
  orderData: IOrderData[];
}
