import { renderHook, screen } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useSearchParams: () => [new URLSearchParams({ page: '1' })],
  };
});

describe('useQueryString', () => {
  it('get Params', () => {
    // const { result } = renderHook(() => useSearchParams());
    // result.current[0].set('page', '1');
    // expect(result.current[0].get('page')).toEqual('1');
  });
});
