import { waitFor } from '@testing-library/react';
import App from '../App';

test('render App', async () => {
  await waitFor(() => <App />);
});
