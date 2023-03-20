import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
