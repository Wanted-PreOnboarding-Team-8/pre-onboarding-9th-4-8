import { render, screen } from '@testing-library/react';
import { WithRouter } from '@/__test__/utils';
import AdminPage from '../pages/AdminPage';

describe('Admin Page Test', () => {
  it('Admin 페이지 렌더 및 타이틀 표시', async () => {
    await render(WithRouter(<AdminPage />));
    expect(await screen.findByText('Overview')).toBeInTheDocument();
  });
});
