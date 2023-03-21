export interface IFilterMenuProps {
  items: { title: string; value?: string; icon?: React.ReactElement }[];
  selectedItem?: string;
  onClickItem: (value?: string) => void;
}

export interface IOrderDataProps {
  data: IOrderData;
}

export interface SearchBarProps {
  onChange: (query: string) => void;
}

export interface SortButtonProps {
  defaultValue?: SortOrderType;
  onClick: (orderBy?: SortOrderType) => void;
}
