import style from './style.css';

//--Actions--//


//--Events--//
export default function Footer() {
	let footer = document.createElement('div');
			footer.classList.add('footer_container');
			footer.innerHTML = 'FOOTER';

	return footer;
};