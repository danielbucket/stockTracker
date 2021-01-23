import '../src/assets/normalize.css';
import './style.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let element = document.createElement('div');
      element.classList.add('app_container');

  Promise.all([
      element.appendChild(Header()),
      element.appendChild(Main()),
      element.appendChild(Footer()),
    ]);

  return element;
};

document.body.appendChild(App());
