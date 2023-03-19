import { ReactElement } from 'react';

export interface IColumnData<T> {
  column: string;
  data: (data: T) => number | string | ReactElement;
  onSort?: () => void;
}
