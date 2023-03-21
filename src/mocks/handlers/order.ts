import { rest } from 'msw';
import { formatDollarToNumber } from '@/mocks/utils/formatter';
import { generateStartAndEndDate } from '@/mocks/utils/formatter';
import mockData from '../storage/mock_data.json';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const orderStatus = req.url.searchParams.get('orderStatus');

    const dataOfSelectedDate = date
      ? mockData.filter((item) => item.transaction_time.split(' ')[0] === date)
      : mockData;

    const dataOfOrderStatusFiltered =
      orderStatus === 'complete'
        ? dataOfSelectedDate.filter((item) => item.status === true)
        : orderStatus === 'incomplete'
        ? dataOfSelectedDate.filter((item) => item.status === false)
        : dataOfSelectedDate;

    const { startDate, endDate } = generateStartAndEndDate(
      dataOfOrderStatusFiltered,
    );

    return res(
      ctx.json({
        order: [...dataOfOrderStatusFiltered].splice(offset * limit, limit),
        orderInfo: {
          totalCount: dataOfOrderStatusFiltered.length,
          totalCurrency: dataOfOrderStatusFiltered.reduce(
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
