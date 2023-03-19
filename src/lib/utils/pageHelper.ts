import { PAGE_BUTTONS, PAGE_DATA_SIZE } from '@/constants/page';

const getPaginationInfo = (total: number, page: number) => {
  const pageStart = Math.floor((page - 1) / PAGE_BUTTONS) * PAGE_BUTTONS + 1;
  const totalPage = Math.ceil(total / PAGE_DATA_SIZE);
  const restPages = totalPage - (pageStart - 1);
  const pageButtonNum = restPages > PAGE_BUTTONS ? PAGE_BUTTONS : restPages;
  return {
    pageStart,
    totalPage,
    pageButtonNum,
  };
};

const getSliceIndexes = (page: number) => {
  return {
    start: (page - 1) * PAGE_DATA_SIZE,
    end: page * PAGE_DATA_SIZE,
  };
};

export { getPaginationInfo, getSliceIndexes };
