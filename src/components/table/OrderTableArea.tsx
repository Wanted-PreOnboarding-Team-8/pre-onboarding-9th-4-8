import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Box,
  Spacer,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import { IOrderItem } from '@/interface/main';
import { formatPageInfo } from '@/lib/utils/formattingHelper';
import { IOrderTablePros } from '@/interface/props';
import TableController from './TableController';
import TablePagination from './TablePagination';

const OrderTableArea = ({
  currentPage,
  currentName,
  data,
  onSetParams,
}: IOrderTablePros) => {
  return (
    <Box bg="white" w="100%" borderRadius="2xl" p="1em 2em">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">주문 테이블</Heading>
        </Box>
        <Spacer />
        <TableController currentName={currentName} onSetParams={onSetParams} />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(
              currentPage ? currentPage : 1,
              data.order.length,
              data.orderInfo.totalCount,
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Status</Th>
              <Th>Customer Name / ID</Th>
              <Th>Time</Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.order.map((orderItem: IOrderItem) => {
              return (
                <Tr key={orderItem.id}>
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
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TablePagination
        currentPage={currentPage}
        data={data}
        onSetParams={onSetParams}
      />
    </Box>
  );
};

export default OrderTableArea;
