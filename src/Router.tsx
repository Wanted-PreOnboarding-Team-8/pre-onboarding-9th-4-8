import { Navigate, Route, Routes } from 'react-router-dom';
import OrderListPage from './pages/OrderListPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/orderList" element={<OrderListPage />} />
      <Route path="/*" element={<Navigate to="/orderList" replace={true} />} />
    </Routes>
  );
};

export default Router;
