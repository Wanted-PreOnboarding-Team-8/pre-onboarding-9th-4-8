import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from '@/__test__/utils';
import StatsArea from '@/components/StatsArea';

describe('Stats Area', () => {
  const getOrderData = jest.fn();

  afterEach(() => getOrderData.mockReset());

  it('render total Order', () => {
    //getOrderData.mockImplementation(() => fakeValues);
    renderStats();
    // expect(getOrderData).toHaveBeenCalled();
  });

  function renderStats() {
    return render(
      withAllContexts(
        withRouter(<Route path="/" element={<StatsArea />} />),
        getOrderData,
      ),
    );
  }
});
