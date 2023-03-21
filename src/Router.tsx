import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from '@/components/Layout';
import ErrorFallback from '@/components/fallback/ErrorFallback';
import LoadingFallback from '@/components/fallback/LoadingFallback';

const AdminPage = lazy(() => import('@/pages/AdminPage'));

const Router = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/admin/order"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
                )}
              >
                <AdminPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={<Navigate to="/admin/order" replace={true} />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
