import { Navigate, Route, Routes } from 'react-router-dom';
import OrderListPage from '@/pages/OrderListPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/orders" element={<OrderListPage />} />
      <Route path="/*" element={<Navigate to="/orders" replace={true} />} />
    </Routes>
  );
};

export default Router;
