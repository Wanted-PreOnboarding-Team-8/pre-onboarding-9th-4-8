import { Table, TableContainer, Th, Thead } from '@chakra-ui/react';
import { Tbody, Tr, Td } from '@chakra-ui/react';
import { IColumnData } from '@/interface/table';

type Props<T> = {
  data: T[];
  columnData: IColumnData<T>[];
};

const DataTable = <T extends object>({ data, columnData }: Props<T>) => {
  return (
    <TableContainer>
      <Table variant="simple" size={'sm'}>
        <Thead>
          <Tr>
            {columnData.map((d, idx) => (
              <Th
                key={`header-${idx}`}
                onClick={() => {
                  d.onSort && d.onSort();
                }}
              >
                {d.column}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order, ri) => (
            <Tr key={`table-row-${ri}`}>
              {columnData.map((d, ci) => (
                <Td key={`table-data-${ri}-${ci}`}>
                  <>{d.data(order)}</>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
