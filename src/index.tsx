import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';
import './index.scss';

function render(Component) {
  const MOUNT_NODE = document.getElementById('root');
  if (MOUNT_NODE) {
    // eslint-disable-next-line
    ReactDOM.render(<Component />, MOUNT_NODE);
  }
}

render(App);

unregister();
