import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import { generateStartAndEndDate } from '@/lib/utils/generator';
import mockData from '../storage/mock_data.json';
import {
  sortMethods,
  filterStatus,
  filterDate,
  filterCustomer,
} from './filterHelper';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const sort = req.url.searchParams.get('sort');
    const status = req.url.searchParams.get('status');
    const customer = req.url.searchParams.get('customer');

    let dataOfSelectedDate = mockData;

    if (status) {
      dataOfSelectedDate = filterStatus(dataOfSelectedDate, status);
    }

    if (date) {
      dataOfSelectedDate = filterDate(dataOfSelectedDate, date);
    }

    if (sort) {
      dataOfSelectedDate.sort(sortMethods[sort]);
    }

    if (customer) {
      dataOfSelectedDate = filterCustomer(dataOfSelectedDate, customer);
    }

    const { startDate, endDate } = generateStartAndEndDate(dataOfSelectedDate);

    return res(
      ctx.json({
        order: [...dataOfSelectedDate].splice(offset * limit, limit),
        orderInfo: {
          totalCount: dataOfSelectedDate.length,
          totalCurrency: dataOfSelectedDate.reduce(
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
