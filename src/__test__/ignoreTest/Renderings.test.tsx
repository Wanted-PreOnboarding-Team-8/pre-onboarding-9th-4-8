import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/lib/queryClient';
import { prepareMsw } from '@/mocks/server';
import App from '@/App';
import StatsArea from '@/components/StatsArea';
import OrderTableArea from '@/components/OrderTableArea';

prepareMsw();

describe('When <App /> renders', () => {
  it('shows Loding by Suspense while fetching', () => {
    render(<App />);

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    // TODO
    // act error
  });
});

describe('When <StatsArea /> renders', () => {
  it('Overview and children should be render', async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <StatsArea />
        </QueryClientProvider>
      </BrowserRouter>,
    );

    const stats = ['Total Order', 'Total Currency', 'Complete', 'Incomplete'];

    expect(await screen.findByText('Overview')).toBeInTheDocument();

    for await (const stat of stats)
      expect(await screen.findByTestId(stat)).toBeInTheDocument();
  });
});

describe('When <OrderTableArea /> renders', () => {
  it('lots of filters should be rendered.', async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <OrderTableArea />
        </QueryClientProvider>
      </BrowserRouter>,
    );

    expect(await screen.findByText('Order Table')).toBeInTheDocument();
    expect(await screen.findByTestId('table-controller')).toBeInTheDocument();
    expect(await screen.findByTestId('table-body')).toBeInTheDocument();
    expect(await screen.findByTestId('table-pagenation')).toBeInTheDocument();
  });
});
