import { Search2Icon } from '@chakra-ui/icons';
import { FormControl, Input, Button, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
  onChange: (query: string) => void;
};
const SearchBar = ({ onChange }: Props) => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="이름을 검색해주세요.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        aria-label="Search table"
        icon={<Search2Icon />}
      />
    </form>
  );
};

export default SearchBar;
