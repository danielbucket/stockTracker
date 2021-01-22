import _ from 'lodash';
import './style.css';

export default function TickerModule() {
	let tickerModule = document.createElement('div');
			tickerModule.classList.add('ticker_module_container');
			tickerModule.innerHTML = 'Thats some hot shit you got in your hand';

	return tickerModule;
};