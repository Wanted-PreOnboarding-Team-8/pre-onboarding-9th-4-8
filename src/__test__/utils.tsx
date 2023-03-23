import { ReactElement } from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const withRouter = (routes: any) => {
  return (
    <MemoryRouter initialEntries={['/admin/order']}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
};

export function withAllContexts(children: ReactElement, orderResult: any) {
  const testClient = createTestQueryClient();
  return (
    <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: console.error,
    },
  });
}

export const fakeValues = {
  order: [
    {
      id: 1,
      transaction_time: '2023-03-07 17:39:50',
      status: true,
      customer_id: 15,
      customer_name: 'Holmes Howard',
      currency: '$5.61',
    },
    {
      id: 2,
      transaction_time: '2023-03-08 06:59:37',
      status: true,
      customer_id: 16,
      customer_name: 'Cynthia Terrell',
      currency: '$10.99',
    },
    {
      id: 3,
      transaction_time: '2023-03-08 00:41:58',
      status: true,
      customer_id: 17,
      customer_name: 'Ann Barron',
      currency: '$37.87',
    },
    {
      id: 4,
      transaction_time: '2023-03-08 12:00:18',
      status: true,
      customer_id: 18,
      customer_name: 'Wade Powell',
      currency: '$30.96',
    },
    {
      id: 5,
      transaction_time: '2023-03-08 15:30:37',
      status: true,
      customer_id: 19,
      customer_name: 'Michelle Abbott',
      currency: '$69.49',
    },
  ],
  orderInfo: {
    totalCount: 5,
    totalCurrency: 154.92,
    startDate: '2023-3-7',
    endDate: '2023-3-8',
  },
};
