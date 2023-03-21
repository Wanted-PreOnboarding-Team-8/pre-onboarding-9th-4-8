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
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import { CheckIcon, WarningIcon } from '@chakra-ui/icons';
import { IOrderItem } from '@/interface/main';
import useSetParams from '@/lib/hooks/useSetParams';
import { formatPageInfo } from '@/lib/utils/formattingHelper';
import useGetOrderData from '@/lib/hooks/useGetOrderData';
import useSearch from '@/lib/hooks/useSearch';
import TablePagination from './TablePagination';
import TableController from './TableController';

const OrderTableArea = () => {
  const { currentPage, currentDate, sortType, setSortType, setStatus, status } =
    useSetParams();
  const { onSearch, searchData, formRef, inputRef, onReset } = useSearch();
  const { data } = useGetOrderData(
    currentPage,
    currentDate,
    sortType,
    status,
    searchData,
  );

  return (
    <Box bg="white" w="100%" borderRadius="2xl" p="1em 2em">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">주문 테이블</Heading>
        </Box>
        <Box flex={4}>
          <form onSubmit={onSearch} ref={formRef}>
            <HStack>
              <Input
                placeholder="고객 이름을 입력해주세요."
                size="sm"
                ref={inputRef}
              />
              <Button type="submit" size="sm">
                검색
              </Button>
            </HStack>
          </form>
        </Box>
        <Button
          type="button"
          size="sm"
          onClick={onReset}
          isDisabled={!searchData}
        >
          reset
        </Button>
        <Spacer />
        <TableController />
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {formatPageInfo(
              currentPage,
              data.order.length,
              data.orderInfo.totalCount,
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th onClick={() => setSortType('id')} cursor="pointer">
                Order ID
              </Th>
              <Th onClick={() => setStatus('true')} cursor="pointer">
                Status
              </Th>
              <Th>Customer Name / ID</Th>
              <Th onClick={() => setSortType('time')} cursor="pointer">
                Time
              </Th>
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
      <TablePagination />
    </Box>
  );
};

export default OrderTableArea;
