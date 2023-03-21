import StatsArea from '@/components/StatsArea';
import OrderTableArea from '@/components/OrderTableArea';
import DatePicker from '@/components/DatePicker';
import useSetParams from '@/lib/hooks/useSetParams';
import useGetOrderData from '@/lib/hooks/useGetOrderData';

const AdminPage = () => {
  const {
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentCustomer,
  } = useSetParams();
  const { data } = useGetOrderData(
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentCustomer,
  );

  return (
    <>
      <StatsArea order={data.order} orderInfo={data.orderInfo} />
      <DatePicker />
      <OrderTableArea order={data.order} orderInfo={data.orderInfo} />
    </>
  );
};

export default AdminPage;
