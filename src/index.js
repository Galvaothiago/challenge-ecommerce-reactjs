import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global';

import { ProductsProvider } from '../src/context/ProductsContext'

ReactDOM.render(
  <ProductsProvider>
    <>
      <App />
      <GlobalStyle />
    </>
  </ProductsProvider>,
  document.getElementById('root')
);