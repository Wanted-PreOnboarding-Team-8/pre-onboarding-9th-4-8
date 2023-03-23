import { URLSearchParams } from 'url';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminPage from '@/pages/AdminPage';
import { PARAMS_KEY } from '@/constants/config';
import { WithRouter } from './utils';

describe('Table Controller Test', () => {
  it('render page', async () => {
    await render(WithRouter(<AdminPage />));
  });

  it('상태 변경 필터 적용하기 (complete)', async () => {
    await render(WithRouter(<AdminPage />));

    const statusFilterButton = screen.getByTestId('status-complete');

    userEvent.click(statusFilterButton);
    const url = new URLSearchParams(window.location.search);
    expect(url.get('filter')).toEqual('complete');
    expect(url.get('page')).toBeNull();
  });

  it('필터 초기화', async () => {
    await render(WithRouter(<AdminPage />));

    const resetButton = screen.getByTestId('reset-filter');

    userEvent.click(resetButton);
    const url = new URLSearchParams(window.location.search);
    console.log(url);
    PARAMS_KEY.forEach((param) => {
      expect(url.get(param)).toBeNull();
    });
  });
});
