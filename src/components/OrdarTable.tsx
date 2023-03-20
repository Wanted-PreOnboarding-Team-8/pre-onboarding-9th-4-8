import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { IOrderProps } from '@/interface/props';

const OrderTable = ({ orderData }: IOrderProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>주문번호</Th>
            <Th>거래시간</Th>
            <Th>고객번호</Th>
            <Th>고객이름</Th>
            <Th>주문처리상태</Th>
            <Th isNumeric>가격</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderData.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.transaction_time}</Td>
                <Td>{item.customer_id}</Td>
                <Td>{item.customer_name}</Td>
                <Td>{item.status ? '완료' : '대기'}</Td>
                <Td isNumeric>{item.currency}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
