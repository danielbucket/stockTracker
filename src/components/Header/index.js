import './style.css';

export default function Header() {
	let header = document.createElement('div');
			header.classList.add('header_container');
			header.innerHTML = 'It sure is hot shit in my hand.';

	return header;
};