import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import {
  generateSortInfo,
  generateStartAndEndDate,
} from '@/lib/utils/generator';
import { IOrderItem, SortParamType, StatusType } from '@/interface/main';
import {
  filterByDate,
  filterByQuery,
  filterByStatus,
  sortByDateTime,
  sortById,
} from '@/lib/utils/dataGenerator';
import mockData from '../storage/mock_data.json';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const sort = req.url.searchParams.get('sort');
    const status = req.url.searchParams.get('status') as StatusType;
    const query = req.url.searchParams.get('query') as StatusType;

    let orderList: IOrderItem[] = mockData;

    orderList =
      date !== 'all' && date !== null
        ? filterByDate(orderList, date)
        : orderList;

    const sorts = sort ? sort.split(',') : ['idAsc'];
    sorts.forEach((s) => {
      const { sortBy, orderBy } = generateSortInfo(s as SortParamType);
      if (sortBy === 'id') orderList = sortById(orderList, orderBy);
      if (sortBy === 'transactionTime')
        orderList = sortByDateTime(orderList, orderBy);
    });

    if (status)
      orderList = filterByStatus(
        orderList,
        status === 'complete' ? true : false,
      );

    if (query) orderList = filterByQuery(orderList, query);

    const { startDate, endDate } = generateStartAndEndDate(orderList);

    return res(
      ctx.json({
        order: [...orderList].splice(offset * limit, limit),
        orderInfo: {
          totalCount: orderList.length,
          totalCurrency: orderList.reduce(
            (acc, cur) => acc + formatDollarToNumber(cur.currency),
            0,
          ),
          startDate,
          endDate,
        },
      }),
    );
  }),
];
