import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from '@/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
