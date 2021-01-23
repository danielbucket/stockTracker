import style from './style.css';

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
export default function Header() {
	let header = document.createElement('div');
			header.classList.add('header_container', 'dark');
			header.id = 'header-container'

	let infoBar = document.createElement('div');
			infoBar.classList.add('info_bar');
			infoBar.id = 'info-bar';
			infoBar.innerHTML = 'Information Bar'

	let button = document.createElement('button');
			button.classList.add('change_color_btn');
			button.innerHTML = 'X';
			button.onclick = changeColor;

	Promise.all([
		header.appendChild(infoBar),
		header.appendChild(button),
	]);

	return header;
};