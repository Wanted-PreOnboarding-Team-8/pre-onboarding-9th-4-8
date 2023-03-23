import { waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import App from '../App';
import { handlers } from '../mocks/handlers/index';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('render App', async () => {
  await waitFor(() => <App />);
});
