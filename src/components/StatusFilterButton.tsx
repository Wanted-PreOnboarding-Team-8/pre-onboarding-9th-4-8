import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import filter from '@/common/icons/filter.svg';
import { StatusType } from '@/interface/main';

type Props = {
  onChange: (value: StatusType) => void;
};

const StatusFilterButton = ({ onChange }: Props) => {
  const { onClose } = useDisclosure();

  const onChangeValue = (value: StatusType) => {
    onChange(value);
    onClose();
  };
  return (
    <Popover isLazy lazyBehavior="keepMounted">
      <PopoverTrigger>
        <Button>
          <img src={filter} alt="filter" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverBody>
          <RadioGroup onChange={onChangeValue}>
            <Radio value={'complete'}>{'Complete'}</Radio>
            <Radio value={'incomplete'}>{'InComplete'}</Radio>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default StatusFilterButton;
