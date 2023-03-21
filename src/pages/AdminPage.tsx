import StatsArea from '@/components/StatsArea';
import OrderTableArea from '@/components/OrderTableArea';
import DatePicker from '@/components/DatePicker';
import { IOrderData } from '@/interface/main';
import useSetParams from '@/lib/hooks/useSetParams';
import useGetOrderData from '@/lib/hooks/useGetOrderData';

const AdminPage = () => {
  const { currentPage, currentDate, currentSort, currentStatus, currentQuery } =
    useSetParams();
  const data = useGetOrderData(
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentQuery,
  ).data as IOrderData;

  return (
    <>
      <StatsArea data={data} />
      <DatePicker />
      <OrderTableArea data={data} />
    </>
  );
};

export default AdminPage;
