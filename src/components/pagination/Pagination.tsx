import { Button, HStack } from '@chakra-ui/react';
import { getPaginationInfo } from '@/lib/utils/pageHelper';

type Props = {
  total: number;
  page: number;
  setPage: (page: number) => void;
};
const Pagination = ({ total, page, setPage }: Props) => {
  const { pageStart, totalPage, pageButtonNum } = getPaginationInfo(
    total,
    page,
  );

  const movePage = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <HStack>
      <Button isDisabled={!!(page - 1 === 0)} onClick={() => movePage('prev')}>
        {'<'}
      </Button>
      {Array(pageButtonNum)
        .fill(pageStart)
        .map((v, i) => (
          <Button
            key={i}
            colorScheme={v + i === page ? 'teal' : undefined}
            onClick={() => setPage(v + i)}
          >
            {v + i}
          </Button>
        ))}
      <Button
        isDisabled={!!(page + 1 === totalPage + 1)}
        onClick={() => movePage('next')}
      >
        {'>'}
      </Button>
    </HStack>
  );
};

export default Pagination;
