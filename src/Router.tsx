import { Navigate, Route, Routes } from 'react-router-dom';
import OrderListPage from './pages/OrderListPage';
import { PAGE_PARAM_KEY } from './constants/pagenation';

const Router = () => {
  return (
    <Routes>
      <Route path="/orderList" element={<OrderListPage />} />
      <Route
        path="/*"
        element={
          <Navigate to={`/orderList?${PAGE_PARAM_KEY}=1`} replace={true} />
        }
      />
    </Routes>
  );
};

export default Router;
