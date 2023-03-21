import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { SortOrderType } from '@/interface/main';
import { SortButtonProps } from '@/interface/prop';

const SortButton = ({ defaultValue, onClick }: SortButtonProps) => {
  const [orderBy, setOrderBy] = useState<SortOrderType | undefined>(
    defaultValue,
  );

  const onSwitchArrow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const switched =
      orderBy === 'Asc' ? 'Desc' : orderBy === 'Desc' ? undefined : 'Asc';
    onClick(switched);
    setOrderBy(switched);
  };

  return (
    <Button
      onClick={onSwitchArrow}
      background="none"
      _hover={{ background: 'gray.100' }}
      p={0}
    >
      <ArrowUpIcon color={orderBy === 'Asc' ? 'orange.500' : 'gray.400'} />
      <ArrowDownIcon color={orderBy === 'Desc' ? 'orange.500' : 'gray.400'} />
    </Button>
  );
};

export default SortButton;
