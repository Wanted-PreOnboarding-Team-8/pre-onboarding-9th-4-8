import { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { theme } from '@/lib/styles/theme';
import queryClient from '@/lib/queryClient';
import LoadingFallback from '@/components/LoadingFallback';
import ErrorFallback from '@/components/ErrorFallback';

export const WithRouter = (routes: ReactElement) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoadingFallback />}>
            <ErrorBoundary
              onReset={() => console.log('reset')}
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorFallback
                  error={error}
                  resetErrorBoundary={resetErrorBoundary}
                />
              )}
            >
              <Routes>
                <Route path="/" element={routes} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};
