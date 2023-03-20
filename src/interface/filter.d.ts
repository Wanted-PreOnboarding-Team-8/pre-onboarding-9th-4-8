type UseFilterReturnType = [
  amendParams: (obj: { [key: string]: string }) => void,
  fieldParam: string | null,
  pageParam: string | null,
];

type FieldType = 'today' | 'all';
