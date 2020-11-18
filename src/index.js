import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList.js'
import 'tachyons';
import {fans} from './fans';

ReactDOM.render(
  <React.StrictMode>
    <div className='tc'>
    <CardList fans={fans}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

