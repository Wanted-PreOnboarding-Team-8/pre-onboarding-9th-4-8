import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/lib/queryClient';
import { prepareMsw } from '@/mocks/server';
import OrderTableArea from '@/components/OrderTableArea';

prepareMsw();

const renderBase = () =>
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <OrderTableArea />
      </QueryClientProvider>
    </BrowserRouter>,
  );

describe('When <OrderTableArea /> renders', () => {
  // 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
  it('show all properties of data as table structure', async () => {
    renderBase();

    expect(await screen.findByRole('table')).toBeInTheDocument();
  });

  // 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
  it('show less than or equal to 50 list', async () => {
    renderBase();

    const tbody = await screen.findByTestId('order-table-tbody');
    expect(tbody.querySelectorAll('tr')).toHaveLength(50);

    //server.get()
  });
});
