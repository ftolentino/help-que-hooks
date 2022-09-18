import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const store = createStore(rootReducer);

store.subscribe(() => 
  console.log(store.getState())
);

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
