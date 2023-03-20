import { IOrderData } from '@/interface/orderData';

const OrderList = ({ data }: { data: IOrderData[] | undefined }) => {
  return (
    <>
      {data !== undefined &&
        data.map((e) => <p key={e.id}>{e.customer_name}</p>)}
    </>
  );
};

export default OrderList;
