import _ from 'lodash';
import './style.css';
import TickerModule from './components/tickerModule.js';
import Header from './components/Header';

function component() {
  let element = document.createElement('div');
      element.classList.add('app_container');
      element.innerHTML = 'Component Container';

  Promise.all([
      element.appendChild(TickerModule()),
      element.appendChild(Header())
    ]);

  return element;
};

document.body.appendChild(component());
