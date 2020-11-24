import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js'
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div className='tc'>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

