import '../src/assets/normalize.css';
import './style.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

//These will be aquired via fetch calls to the database and api
import { userStub, marketStub } from '../src/assets/stubs.js';

function App() {
  let element = document.createElement('div');
      element.classList.add('app_container');

  Promise.all([
      element.appendChild(Header(userStub[0])),
      element.appendChild(Main(marketStub)),
      element.appendChild(Footer()),
    ]);

  return element;
};

document.body.appendChild(App());
