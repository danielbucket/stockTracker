import style from './style.css';
import { userStub, marketStub } from '../../assets/stubs.js';


//--Elements--//
const fundsBox = (data) => {
	let fundsbox = document.createElement('div');
			fundsbox.classList.add('funds_box');

	let fundsText = document.createElement('div');
			fundsText.classList.add('funds_text');
			fundsText.innerHTML = "Est. Portfolio Value: ";

	let invested_funds = document.createElement('div');
			invested_funds.classList.add('invested_funds');
			invested_funds.innerHTML = `$ ${data}`;

	Promise.all([
		fundsbox.appendChild(fundsText),
		fundsbox.appendChild(invested_funds),
	]);

	return fundsbox;
};

const informationBar = (name) => {
	let infoBar = document.createElement('div');
			infoBar.classList.add('info_bar');
			infoBar.id = 'info-bar';
			infoBar.innerHTML = `What\'s crackin', ${name}? Welcome to Stock Tracker.`;

	return infoBar;
};

const button = () => {
	let btn = document.createElement('button');
		btn.classList.add('menu_btn');
		btn.innerHTML = "X";
		btn.onclick = changeColor;

	return btn;
};



//--Actions--//
const changeColor = () => {
	let target = document.getElementById('header-container');

	if (target.classList[1] !== 'dark') {
		target.classList.remove(target.classList[1]);
		target.classList.add('dark');
	} else if ( target.classList[1] !== 'bright') {
		target.classList.remove(target.classList[1]);
		target.classList.add('bright');
	};
};


//--Events--//
export default function Header(data) {
	const { name, invested_funds } = data;
	let header = document.createElement('div');
			header.classList.add('header_container', 'dark');
			header.id = 'header-container';

	const FundsBox = fundsBox(invested_funds);
	const InformationBar = informationBar(name);
	const Button = button();

	Promise.all([
		header.appendChild(FundsBox),
		header.appendChild(InformationBar),
		header.appendChild(Button),
	]);

	return header;
};