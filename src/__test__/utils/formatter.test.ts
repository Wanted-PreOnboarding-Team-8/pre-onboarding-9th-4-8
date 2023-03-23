import {
  formatDate,
  formatDollarToNumber,
  formatNumToDollar,
  formatPageInfo,
  formatPureString,
} from '@/lib/utils/formatter';

describe('Formatter Test', () => {
  it('dollar to number', () => {
    expect(formatDollarToNumber('$38')).toEqual(38);
  });
  it('number to dollar', () => {
    expect(formatNumToDollar(38)).toEqual('$ 38');
  });
  it('date to YYYY-MM-DD', () => {
    expect(formatDate(new Date('2023-10-19'))).toEqual('2023-10-19');
  });
  it('page info', () => {
    expect(formatPageInfo(1, 50, 150)).toEqual('Showing 1 - 50 out of 150');
  });
  it('pure string', () => {
    expect(formatPureString('So Yeon')).toEqual('soyeon');
  });
});
