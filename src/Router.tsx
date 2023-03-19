import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Navigate to="/admin" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
