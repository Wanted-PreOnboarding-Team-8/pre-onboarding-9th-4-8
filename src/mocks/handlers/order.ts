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
    const partialName = req.url.searchParams.get('searchingName') || '';

    const dataOfSelectedDate = date
      ? mockData.filter((item) => item.transaction_time.split(' ')[0] === date)
      : mockData;

    const dataOfOrderStatusFiltered =
      orderStatus === 'complete'
        ? dataOfSelectedDate.filter((item) => item.status === true)
        : orderStatus === 'incomplete'
        ? dataOfSelectedDate.filter((item) => item.status === false)
        : dataOfSelectedDate;

    const dataOfNameFiltered = partialName
      ? dataOfOrderStatusFiltered.filter((item) => {
          const regex = new RegExp(partialName, 'gi');
          const comparison = regex.test(item.customer_name);
          return comparison;
        })
      : dataOfOrderStatusFiltered;

    const { startDate, endDate } = generateStartAndEndDate(dataOfNameFiltered);

    return res(
      ctx.json({
        order: [...dataOfNameFiltered].splice(offset * limit, limit),
        orderInfo: {
          totalCount: dataOfNameFiltered.length,
          totalCurrency: dataOfNameFiltered.reduce(
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
