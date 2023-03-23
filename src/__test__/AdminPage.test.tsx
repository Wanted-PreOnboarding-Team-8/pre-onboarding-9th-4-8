import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withRouter } from '@/__test__/utils';
import AdminPage from '../pages/AdminPage';
describe('Stats Area', () => {
  it('render', () => {
    render(withRouter(<Route path="/" element={<AdminPage />} />));
  });
});
