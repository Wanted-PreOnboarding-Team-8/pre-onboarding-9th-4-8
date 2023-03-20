import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrderList from './components/orderList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <OrderList></OrderList>
        </div>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
