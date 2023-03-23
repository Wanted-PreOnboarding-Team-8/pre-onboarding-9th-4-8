import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortButton from '@/components/SortButton';
import { WithRouter } from './utils';

describe('Sort Button Test', () => {
  it('Sort 버튼 토글 쿼리스트링 테스트', async () => {
    render(WithRouter(<SortButton sortTarget="time" />));

    window.scrollTo = jest.fn();

    const timeSortButton = screen.getByTestId('time-sort');

    userEvent.click(timeSortButton);
    let url = new URLSearchParams(window.location.search);
    expect(url.get('sort')).toBe('time-descending');

    userEvent.click(timeSortButton);
    url = new URLSearchParams(window.location.search);
    expect(url.get('sort')).toBe('time-ascending');
  });
});
