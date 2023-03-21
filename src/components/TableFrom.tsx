import { FormControl, Input, Button, Center } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useSetParams from '@/lib/hooks/useSetParams';

const TableForm = () => {
  const { onSetParams } = useSetParams();
  const [search, setSearch] = useState('');
  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [],
  );

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSetParams({
        pageValue: 1,
        dateValue: '',
        statusValue: 'all',
        customerValue: `${search}`,
      });
      setSearch('');
    },
    [onSetParams, search],
  );

  return (
    <form onSubmit={onSubmitForm}>
      <FormControl p={3}>
        <Center>
          <Input
            type="text"
            placeholder="고객이름 검색"
            value={search}
            onChange={onChangeSearch}
            htmlSize={20}
            width="auto"
            me={2}
          />
          <Button type="submit">
            <FaSearch />
          </Button>
        </Center>
      </FormControl>
    </form>
  );
};

export default TableForm;
