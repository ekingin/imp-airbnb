import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'normalize.css'
import '@/assets/css/index.less'

import store from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense failback={"loading"}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
);