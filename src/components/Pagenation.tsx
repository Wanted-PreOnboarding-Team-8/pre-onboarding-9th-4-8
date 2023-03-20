import { Button } from '@chakra-ui/react';
const Pagenation = ({
  lengthPerPage,
  totalLength,
  pagenate,
}: {
  lengthPerPage: number;
  totalLength: number;
  pagenate: (pageNumber: number) => void;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLength / lengthPerPage); i++)
    pageNumbers.push(i);

  const handlePagenate = (pageNumber: number) => pagenate(pageNumber);

  return (
    <ul style={{ display: 'flex', flexDirection: 'row' }}>
      {pageNumbers.map((number) => (
        <li key={number}>
          <Button onClick={(_) => handlePagenate(number)}>{number}</Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagenation;
