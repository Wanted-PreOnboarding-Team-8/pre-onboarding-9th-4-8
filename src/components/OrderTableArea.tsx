import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Box,
  Spacer,
  Flex,
  Heading,
  Td,
} from '@chakra-ui/react';
import { IFetchData } from '@/interface/main';
import useSetParams from '@/lib/hooks/useSetParams';
import { formatPageInfo } from '@/lib/utils/formattingHelper';
import TablePagination from './TablePagination';
import TableController from './TableController';
import TableCkeckbox from './TableCkeckbox';
import TableForm from './TableFrom';
import TableContent from './TableContent';

const OrderTableArea = ({ order, orderInfo }: IFetchData) => {
  const { currentPage, currentDate, currentSort, onSetParams } = useSetParams();

  const handleOrderId = () => {
    const sortValue = currentSort === 'idDESC' ? 'idASC' : 'idDESC';
    onSetParams({
      pageValue: 1,
      dateValue: `${currentDate || ''}`,
      sortValue,
    });
  };

  const handleTime = () => {
    const sortValue = currentSort === 'timeDESC' ? 'timeASC' : 'timeDESC';
    onSetParams({
      pageValue: 1,
      dateValue: `${currentDate || ''}`,
      sortValue,
    });
  };

  return (
    <Box bg="white" w="100%" borderRadius="2xl" p="1em 2em">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">주문 테이블</Heading>
        </Box>
        <Spacer />
      </Flex>
      <TableController />
      <TableCkeckbox />
      <TableForm />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(currentPage, order.length, orderInfo.totalCount)}
          </TableCaption>
          <Thead>
            <Tr>
              <Th onClick={handleOrderId}>Order ID</Th>
              <Th>Status</Th>
              <Th>Customer Name / ID</Th>
              <Th onClick={handleTime}>Time</Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
          <Tbody>
            {order.length === 0 ? (
              <Tr>
                <Td>{orderInfo.message}</Td>
              </Tr>
            ) : (
              order.map((orderItem) => {
                return (
                  <TableContent orderItem={orderItem} key={orderItem.id} />
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <TablePagination totalCount={orderInfo.totalCount} />
    </Box>
  );
};

export default OrderTableArea;
