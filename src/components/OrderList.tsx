import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { IOrderData } from '@/interface/orderData';

const OrderList = ({ data }: { data: IOrderData[] | undefined }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>transaction_time</Th>
            <Th>status</Th>
            <Th>customer_id</Th>
            <Th>customer_name</Th>
            <Th>currency</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data !== undefined &&
            data.map((e: IOrderData) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.transaction_time}</Td>
                <Td>{e.status ? 'true' : 'false'}</Td>
                <Td>{e.customer_id}</Td>
                <Td>{e.customer_name}</Td>
                <Td>{e.currency}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
