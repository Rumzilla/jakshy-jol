import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './18n'
import { store } from './redux/configureStore';
import { Provider } from 'react-redux';
import CircularIndeterminate from "./components/loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div><CircularIndeterminate /></div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
);

reportWebVitals();
