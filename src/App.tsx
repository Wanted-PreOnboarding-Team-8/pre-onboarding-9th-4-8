import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Router from '@/Router';

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
