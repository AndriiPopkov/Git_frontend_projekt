import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {persistor, store} from './store'
import { PersistGate } from 'redux-persist/integration/react';

// export const ROOT_URL = 'http://localhost:3333'

export const ROOT_URL = 'https://git-hub-backend.onrender.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <App />  
      </PersistGate>
    </Provider> 
);

