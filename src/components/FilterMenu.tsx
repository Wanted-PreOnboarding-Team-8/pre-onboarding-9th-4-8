import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { IFilterMenuProps } from '@/interface/prop';

const FilterMenu = ({ items, selectedItem, onClickItem }: IFilterMenuProps) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        minW="150px"
        textAlign={'start'}
        background="none"
        border="1px"
        borderColor={'gray.200'}
      >
        {selectedItem ? selectedItem : '선택하기'}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            key={item.title}
            value={item.value}
            onClick={() => onClickItem(item.value)}
          >
            {item.icon && <Box marginRight={2}>{item.icon}</Box>}
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
