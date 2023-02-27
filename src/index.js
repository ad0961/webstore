import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// import { UserProvider } from "./context/user.context";
// import { CategoriesContextProvider } from './context/categories.context';

// import {CartContextProvider} from "../src/context/cart.context";
import { Provider } from 'react-redux';
import { store } from './Redux Store/Store';

import { PersistGate } from 'redux-persist/es/integration/react';
import {persistor} from '../src/Redux Store/Store';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/Stripe/Stripe.utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <UserProvider> */}
          {/* <CategoriesContextProvider> */}
            {/* <CartContextProvider> */}
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
                </BrowserRouter>
            </PersistGate>
            {/* </CartContextProvider> */}
          {/* </CategoriesContextProvider> */}
        {/* </UserProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
