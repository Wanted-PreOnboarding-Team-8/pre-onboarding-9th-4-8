import { Search2Icon } from '@chakra-ui/icons';
import {
  Input,
  IconButton,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { SearchBarProps } from '@/interface/prop';

const SearchBar = ({ onChange }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement>
          <IconButton
            type="submit"
            aria-label="Search table"
            background={'none'}
            _hover={{ background: 'none' }}
            icon={
              <Search2Icon
                color={'gray.400'}
                _hover={{ color: 'gray.700', transitionDuration: '0.5s' }}
              />
            }
          />
        </InputLeftElement>
        <Input
          placeholder="이름을 검색해주세요.."
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
