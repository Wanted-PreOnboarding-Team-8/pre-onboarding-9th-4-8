import { Suspense } from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import queryClient from '@/lib/queryClient';
import { TODAY } from '@/constants/config';
import TableController from '@/components/TableController';

describe('Admin Page Rendering', () => {
  const componentRender = () => {
    const utils = render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback="loading...">
              <TableController />
            </Suspense>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );

    return utils;
  };

  it('오늘 버튼 토글 쿼리스트링 테스트', async () => {
    componentRender();

    const switchfBtn = await screen.findByTestId('today-order');
    window.scrollTo = jest.fn();

    userEvent.click(switchfBtn);
    let url = new URLSearchParams(window.location.search);
    expect(url.get('date')).toBe(TODAY);
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

    userEvent.click(switchfBtn);
    url = new URLSearchParams(window.location.search);
    expect(url.has('date')).toBe(false);
  });
});
