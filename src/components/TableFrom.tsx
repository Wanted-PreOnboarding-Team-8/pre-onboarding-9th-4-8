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
        statusValue: '',
        customerValue: `${search}`,
      });
      setSearch('');
    },
    [onSetParams, search],
  );

  const onClickReset = useCallback(() => {
    onSetParams({
      pageValue: 1,
      dateValue: '',
      sortValue: 'DESC',
      statusValue: '',
      customerValue: '',
    });
  }, [onSetParams]);

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
          <Button type="submit" me={2}>
            <FaSearch />
          </Button>
          <Button colorScheme="red" variant="outline" onClick={onClickReset}>
            필터초기화
          </Button>
        </Center>
      </FormControl>
    </form>
  );
};

export default TableForm;
