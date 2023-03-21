import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import {
  generateSortQuery,
  generateStartAndEndDate,
} from '@/lib/utils/generator';
import { IOrderItem, SortParamType } from '@/interface/main';
import {
  filterByDate,
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

    let orderList: IOrderItem[] = mockData;

    orderList = date ? filterByDate(orderList, date) : orderList;

    const sorts = sort ? sort.split(',') : ['idAsc'];
    console.log(sorts);
    sorts.forEach((s) => {
      const { sortBy, orderBy } = generateSortQuery(s as SortParamType);
      if (sortBy === 'id') orderList = sortById(orderList, orderBy);
      if (sortBy === 'transactionTime')
        orderList = sortByDateTime(orderList, orderBy);
    });

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
