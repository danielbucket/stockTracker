import './style.css';

//--Elements--//
const columnNames = () => {
	const n = ['Stock','Tab 2','Tab 3','Tab 4'];
	let columnNames = document.createElement('div');
			columnNames.classList.add('tab_names');

	for (let i = 0; i<n.length;i++) {
		let card = document.createElement('div');
				card.classList.add('tab_name');
				card.innerHTML = n[i];

		columnNames.appendChild(card);
	};

	return columnNames;
};
const TickerContainer = (i) => {
		let tickerContainer = document.createElement('div');
				tickerContainer.classList.add('card_item');
		let ticker = document.createElement('div');
				ticker.classList.add('ticker_symbol');
				ticker.innerHTML = i.ticker;
		let tickerIdent = document.createElement('div');
				tickerIdent.innerHTML = "Ticker:"

	Promise.all([
		tickerContainer.appendChild(tickerIdent),
		tickerContainer.appendChild(ticker),
	]);
	return tickerContainer;
};

const SharesContainer = (i) => {
	let sharesContainer = document.createElement('div');
			sharesContainer.classList.add('card_item');
	let shares = document.createElement('div');
			shares.classList.add('shares_value');
			shares.innerHTML = i.shares;
	let sharesIdent = document.createElement('div');
			sharesIdent.innerHTML = "Shares:";

	Promise.all([
		sharesContainer.appendChild(sharesIdent),
		sharesContainer.appendChild(shares),
	]);
	return sharesContainer;
};

const ShareValueContainer = (i) => {
	let shareValueContainer = document.createElement('div');
			shareValueContainer.classList.add('card_item');
	let shareValue = document.createElement('div');
			shareValue.classList.add('share_value');
			shareValue.innerHTML = `$${i.share_value}`;
	let shareValueIdent = document.createElement('div');
			shareValueIdent.innerHTML = "Share Value:";

	Promise.all([
		shareValueContainer.appendChild(shareValueIdent),
		shareValueContainer.appendChild(shareValue),
	]);
	return shareValueContainer
};

const stockCards = (d) => {
	let stockCards = document.createElement('div');
			stockCards.classList.add('stock_cards');

	d.map(i => {
		let stockCard = document.createElement('div');
				stockCard.classList.add('stock_card');

		let cardName = document.createElement('div');
				cardName.classList.add('card_item','card_name');
				cardName.innerHTML = i.name;

		const tickerContainer = TickerContainer(i);
		const sharesContainer = SharesContainer(i);
		const shareValueContainer = ShareValueContainer(i);

		Promise.all([
			stockCard.appendChild(cardName),
			stockCard.appendChild(tickerContainer),
			stockCard.appendChild(sharesContainer),
			stockCard.appendChild(shareValueContainer),
		]);

		stockCards.appendChild(stockCard);
	});

	return stockCards;
};

const leftWindow = (data) => {
	let leftWindow = document.createElement('div');
			leftWindow.classList.add('left_window_container');

	const ColumnNames = columnNames();
	const StockCards = stockCards(data);

	Promise.all([
		leftWindow.appendChild(ColumnNames),
		leftWindow.appendChild(StockCards),
	]);

	return leftWindow;
};

const rightWindow = () => {
	let rightWindow = document.createElement('div');
			rightWindow.classList.add('right_window_container');
			rightWindow.innerHTML = "Right Window";

	return rightWindow;
};


//--Events--//
export default function Main(data) {
	let main = document.createElement('div');
			main.classList.add('main_container');

	const LeftWindow = leftWindow(data);
	const RightWindow = rightWindow();

	Promise.all([
		main.appendChild(LeftWindow),
		main.appendChild(RightWindow),
	]);

	return main;
};