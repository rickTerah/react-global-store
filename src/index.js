import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/globalStore/globalStore';
import App from './App';
import * as serviceWorker from './test/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
