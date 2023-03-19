import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Router from '@/Router';
import { store } from '@/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
