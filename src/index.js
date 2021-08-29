import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global';

import { SortingProvider } from '../src/context/SortingContext'
import { CartProvider } from './context/CartContext';

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <CartProvider>
      <SortingProvider>
        <>
          <App />
          <GlobalStyle />
        </>
      </SortingProvider>
    </CartProvider>
  </Router>,
  document.getElementById('root')
);