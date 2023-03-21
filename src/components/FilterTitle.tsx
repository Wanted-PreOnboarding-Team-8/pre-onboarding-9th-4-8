import { Heading } from '@chakra-ui/react';
import React from 'react';
import { IFilterTitleProps } from '@/interface/prop';

const FilterTitle = ({
  title,
  alignSelf = 'flex-start',
}: IFilterTitleProps) => {
  return (
    <Heading as="h6" size="xs" alignSelf={alignSelf}>
      {title}
    </Heading>
  );
};

export default FilterTitle;
