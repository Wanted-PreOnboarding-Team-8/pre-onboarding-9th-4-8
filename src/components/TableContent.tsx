import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import { Tr, Td, Flex, Icon } from '@chakra-ui/react';
import { IOrderItem } from '@/interface/main';

const TableContent = ({ orderItem }: { orderItem: IOrderItem }) => {
  return (
    <Tr>
      <Td>{orderItem.id}</Td>
      <Td>
        {orderItem.status ? (
          <Flex gap={1}>
            <Icon as={CheckIcon} w={5} h={5} color="green.500" />
            Complete
          </Flex>
        ) : (
          <Flex gap={1}>
            <Icon as={WarningIcon} w={5} h={5} color="orange.500" />
            Incomplete
          </Flex>
        )}
      </Td>
      <Td>
        {orderItem.customer_name} / {orderItem.customer_id}
      </Td>
      <Td>{orderItem.transaction_time}</Td>
      <Td>{orderItem.currency}</Td>
    </Tr>
  );
};

export default TableContent;
