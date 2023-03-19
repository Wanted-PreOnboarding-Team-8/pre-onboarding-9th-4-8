import Pagination from 'react-js-pagination';
import { PagingProps } from '@/interface/props';

const Paging = ({
  page,
  totalItemsCount,
  itemsCountPerPage,
  handlePageChange,
}: PagingProps) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={'<'}
      nextPageText={'>'}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
