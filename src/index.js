import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter'
import {Provider} from 'mobx-react';

const counter = new CounterStore();

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
