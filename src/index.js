import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global';

import { SortingProvider } from '../src/context/SortingContext'
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <CartProvider>
    <SortingProvider>
      <>
        <App />
        <GlobalStyle />
      </>
    </SortingProvider>
  </CartProvider>,
  document.getElementById('root')
);