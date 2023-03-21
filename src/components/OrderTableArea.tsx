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
import {
  IOrderItem,
  IOrderData,
  SortOrderType,
  SortType,
} from '@/interface/main';
import useSetParams from '@/lib/hooks/useSetParams';
import { formatPageInfo } from '@/lib/utils/formattingHelper';
import useGetOrderData from '@/lib/hooks/useGetOrderData';
import TablePagination from './TablePagination';
import TableController from './TableController';
import SortButton from './SortButton';

const OrderTableArea = () => {
  const {
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentQuery,
    onSetParams,
  } = useSetParams();
  const orderData = useGetOrderData(
    currentPage,
    currentDate,
    currentSort,
    currentStatus,
    currentQuery,
  ).data as IOrderData;

  const onClickSortButton = (sortBy: SortType, orderBy?: SortOrderType) => {
    onSetParams({
      sortValue: orderBy ? `${sortBy}${orderBy}` : undefined,
    });
  };

  return (
    <Box bg="white" w="100%" borderRadius="2xl" p="1em 2em">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">주문 테이블</Heading>
        </Box>
        <Spacer />
        <TableController />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(
              currentPage,
              orderData.order.length,
              orderData.orderInfo.totalCount,
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>
                Order ID{' '}
                <SortButton
                  defaultValue="Asc"
                  onClick={(orderBy?: SortOrderType) =>
                    onClickSortButton('id', orderBy)
                  }
                />
              </Th>
              <Th>Status </Th>
              <Th>Customer Name / ID </Th>
              <Th>
                Time{' '}
                <SortButton
                  onClick={(orderBy?: SortOrderType) =>
                    onClickSortButton('transactionTime', orderBy)
                  }
                />
              </Th>
              <Th>Currency</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderData.order.map((orderItem: IOrderItem) => {
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
      <TablePagination />
    </Box>
  );
};

export default OrderTableArea;
