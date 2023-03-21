import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import { generateStartAndEndDate } from '@/lib/utils/generator';
import mockData from '../storage/mock_data.json';
import { sortMethods } from './sort';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const sort = req.url.searchParams.get('sort');
    const status = req.url.searchParams.get('status');

    let dataOfSelectedDate = mockData;

    if (status === 'true') {
      dataOfSelectedDate = dataOfSelectedDate.filter(
        (item) => item.status === true,
      );
    }

    if (status === 'false') {
      dataOfSelectedDate = dataOfSelectedDate.filter(
        (item) => item.status === false,
      );
    }

    if (date) {
      dataOfSelectedDate = dataOfSelectedDate.filter(
        (item) => item.transaction_time.split(' ')[0] === date,
      );
    }

    if (sort) {
      dataOfSelectedDate.sort(sortMethods[sort]);
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
