/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/stubs.js":
/*!*****************************!*\
  !*** ./src/assets/stubs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userStub": () => /* binding */ userStub,
/* harmony export */   "marketStub": () => /* binding */ marketStub
/* harmony export */ });
var userStub = [{
  id: 1,
  name: 'Bucket',
  email: 'danielludwick@gmail.com',
  api_key: 'N2Fpqbi1pAyG73Lu7pdlDEZPf19OVd_b',
  invested_funds: '43389.73'
}, {
  id: 2,
  name: 'defaultUser2',
  email: 'default1User2@mail.com',
  api_key: 'N2Fpqbi1pAyG73Lu7pdlDEZPf19OVd_b',
  invested_unds: '65547.18'
}, {
  id: 3,
  name: 'defaultUser3',
  email: 'defaultUser3@mail.com',
  api_key: 'N2Fpqbi1pAyG73Lu7pdlDEZPf19OVd_b',
  invested_funds: '43389.73'
}];
var marketStub = [{
  id: 1,
  user_data_id: 1,
  ticker: 'O',
  name: 'Realty Income',
  shares: 18,
  share_value: 57.92
}, {
  id: 2,
  user_data_id: 2,
  ticker: 'NRZ',
  name: 'New Residential Investment',
  shares: 100,
  share_value: 9.59
}, {
  id: 3,
  user_data_id: 3,
  ticker: 'T',
  name: 'AT&T',
  shares: 25,
  share_value: 29.54
}, {
  id: 4,
  user_data_id: 3,
  ticker: 'AAPL',
  name: 'Apple',
  shares: 5,
  share_value: 140.35
}, {
  id: 5,
  user_data_id: 3,
  ticker: 'IRM',
  name: 'Iron Mountain',
  shares: 17,
  share_value: 30.06
}, {
  id: 6,
  user_data_id: 3,
  ticker: 'AMZN',
  name: 'Amazon',
  shares: 1,
  share_value: 3293.74
}];

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Footer
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/Footer/style.css");
 //--Actions--//
//--Events--//

function Footer() {
  var footer = document.createElement('div');
  footer.classList.add('footer_container');
  footer.innerHTML = 'FOOTER';
  return footer;
}
;

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Header
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/Header/style.css");
/* harmony import */ var _assets_stubs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/stubs.js */ "./src/assets/stubs.js");

 //--Elements--//

var fundsBox = function fundsBox(data) {
  var fundsbox = document.createElement('div');
  fundsbox.classList.add('funds_box');
  var fundsText = document.createElement('div');
  fundsText.classList.add('funds_text');
  fundsText.innerHTML = "Est. Portfolio Value: ";
  var invested_funds = document.createElement('div');
  invested_funds.classList.add('invested_funds');
  invested_funds.innerHTML = "$ ".concat(data);
  Promise.all([fundsbox.appendChild(fundsText), fundsbox.appendChild(invested_funds)]);
  return fundsbox;
};

var informationBar = function informationBar(name) {
  var infoBar = document.createElement('div');
  infoBar.classList.add('info_bar');
  infoBar.id = 'info-bar';
  infoBar.innerHTML = "What's crackin', ".concat(name, "? Welcome to Stock Tracker.");
  return infoBar;
};

var button = function button() {
  var btn = document.createElement('button');
  btn.classList.add('menu_btn');
  btn.innerHTML = "X";
  btn.onclick = changeColor;
  return btn;
}; //--Actions--//


var changeColor = function changeColor() {
  var target = document.getElementById('header-container');

  if (target.classList[1] !== 'dark') {
    target.classList.remove(target.classList[1]);
    target.classList.add('dark');
  } else if (target.classList[1] !== 'bright') {
    target.classList.remove(target.classList[1]);
    target.classList.add('bright');
  }

  ;
}; //--Events--//


function Header(data) {
  var name = data.name,
      invested_funds = data.invested_funds;
  var header = document.createElement('div');
  header.classList.add('header_container', 'dark');
  header.id = 'header-container';
  var FundsBox = fundsBox(invested_funds);
  var InformationBar = informationBar(name);
  var Button = button();
  Promise.all([header.appendChild(FundsBox), header.appendChild(InformationBar), header.appendChild(Button)]);
  return header;
}
;

/***/ }),

/***/ "./src/components/Main/index.js":
/*!**************************************!*\
  !*** ./src/components/Main/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Main
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/Main/style.css");
 //--Elements--//

var columnNames = function columnNames() {
  var n = ['Stock', 'Tab 2', 'Tab 3', 'Tab 4'];
  var columnNames = document.createElement('div');
  columnNames.classList.add('tab_names');

  for (var i = 0; i < n.length; i++) {
    var card = document.createElement('div');
    card.classList.add('tab_name');
    card.innerHTML = n[i];
    columnNames.appendChild(card);
  }

  ;
  return columnNames;
};

var TickerContainer = function TickerContainer(i) {
  var tickerContainer = document.createElement('div');
  tickerContainer.classList.add('card_item');
  var ticker = document.createElement('div');
  ticker.classList.add('ticker_symbol');
  ticker.innerHTML = i.ticker;
  var tickerIdent = document.createElement('div');
  tickerIdent.innerHTML = "Ticker:";
  Promise.all([tickerContainer.appendChild(tickerIdent), tickerContainer.appendChild(ticker)]);
  return tickerContainer;
};

var SharesContainer = function SharesContainer(i) {
  var sharesContainer = document.createElement('div');
  sharesContainer.classList.add('card_item');
  var shares = document.createElement('div');
  shares.classList.add('shares_value');
  shares.innerHTML = i.shares;
  var sharesIdent = document.createElement('div');
  sharesIdent.innerHTML = "Shares:";
  Promise.all([sharesContainer.appendChild(sharesIdent), sharesContainer.appendChild(shares)]);
  return sharesContainer;
};

var ShareValueContainer = function ShareValueContainer(i) {
  var shareValueContainer = document.createElement('div');
  shareValueContainer.classList.add('card_item');
  var shareValue = document.createElement('div');
  shareValue.classList.add('share_value');
  shareValue.innerHTML = "$".concat(i.share_value);
  var shareValueIdent = document.createElement('div');
  shareValueIdent.innerHTML = "Share Value:";
  Promise.all([shareValueContainer.appendChild(shareValueIdent), shareValueContainer.appendChild(shareValue)]);
  return shareValueContainer;
};

var stockCards = function stockCards(d) {
  var stockCards = document.createElement('div');
  stockCards.classList.add('stock_cards');
  d.map(function (i) {
    var stockCard = document.createElement('div');
    stockCard.classList.add('stock_card');
    var cardName = document.createElement('div');
    cardName.classList.add('card_item', 'card_name');
    cardName.innerHTML = i.name;
    var tickerContainer = TickerContainer(i);
    var sharesContainer = SharesContainer(i);
    var shareValueContainer = ShareValueContainer(i);
    Promise.all([stockCard.appendChild(cardName), stockCard.appendChild(tickerContainer), stockCard.appendChild(sharesContainer), stockCard.appendChild(shareValueContainer)]);
    stockCards.appendChild(stockCard);
  });
  return stockCards;
};

var leftWindow = function leftWindow(data) {
  var leftWindow = document.createElement('div');
  leftWindow.classList.add('left_window_container');
  var ColumnNames = columnNames();
  var StockCards = stockCards(data);
  Promise.all([leftWindow.appendChild(ColumnNames), leftWindow.appendChild(StockCards)]);
  return leftWindow;
};

var rightWindow = function rightWindow() {
  var rightWindow = document.createElement('div');
  rightWindow.classList.add('right_window_container');
  rightWindow.innerHTML = "Right Window";
  return rightWindow;
}; //--Events--//


function Main(data) {
  var main = document.createElement('div');
  main.classList.add('main_container');
  var LeftWindow = leftWindow(data);
  var RightWindow = rightWindow();
  Promise.all([main.appendChild(LeftWindow), main.appendChild(RightWindow)]);
  return main;
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/normalize.css */ "./src/assets/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_assets_stubs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/stubs.js */ "./src/assets/stubs.js");




 //These will be aquired via fetch calls to the database and api



function App() {
  var element = document.createElement('div');
  element.classList.add('app_container');
  Promise.all([element.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_3__.default)(_src_assets_stubs_js__WEBPACK_IMPORTED_MODULE_5__.userStub[0])), element.appendChild((0,_components_Main__WEBPACK_IMPORTED_MODULE_2__.default)(_src_assets_stubs_js__WEBPACK_IMPORTED_MODULE_5__.marketStub)), element.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default)())]);
  return element;
}

;
document.body.appendChild(App());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer_container {\n\tgrid-column: Footer;\n\tbackground-color: black;\n\tcolor: white;\n\theight: 100%;\n\twidth: 100%;\n}", "",{"version":3,"sources":["webpack://./src/components/Footer/style.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,YAAY;CACZ,WAAW;AACZ","sourcesContent":[".footer_container {\n\tgrid-column: Footer;\n\tbackground-color: black;\n\tcolor: white;\n\theight: 100%;\n\twidth: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header_container {\n\tgrid-column: Header;\n\n\tfont-size: 1.5em;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tgrid-template-columns:\n\t\t[invested_funds] 12em\n\t\t[info_bar] calc(100% - 16em)\n\t\t[menu_btn] 4em;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.dark { border: .125em solid blue; }\n.bright { border: .125em solid green; }\n\n.funds_box {\n\tdisplay: grid;\n\tgrid-template-rows:\n\t\t[funds_text] 1fr\n\t\t[invested_funds] 1fr;\n\tjustify-content: center;\n}\n\n.funds_text {\n\tgrid-row: funds_text;\n\tmargin: 0 auto 0 auto;\n}\n\n.invested_funds {\n\tgrid-row: invested_funds;\n\tmargin: 0 auto 0 auto;\n}\n\n\n.info_bar {\n\tgrid-column: info_bar;\n}\n\n.menu_btn {\n\tgrid-column: menu_btn;\n\tborder: .125em solid orange;\n\tcolor: pink;\n\theight: 60%;\n\twidth: 100%;\n\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Header/style.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;;CAEnB,gBAAgB;CAChB,YAAY;;CAEZ,aAAa;CACb;;;gBAGe;CACf,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA,QAAQ,yBAAyB,EAAE;AACnC,UAAU,0BAA0B,EAAE;;AAEtC;CACC,aAAa;CACb;;sBAEqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,oBAAoB;CACpB,qBAAqB;AACtB;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;AACtB;;;AAGA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,2BAA2B;CAC3B,WAAW;CACX,WAAW;CACX,WAAW;;CAEX,aAAa;CACb,mBAAmB;CACnB,qBAAqB;AACtB","sourcesContent":[".header_container {\n\tgrid-column: Header;\n\n\tfont-size: 1.5em;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tgrid-template-columns:\n\t\t[invested_funds] 12em\n\t\t[info_bar] calc(100% - 16em)\n\t\t[menu_btn] 4em;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.dark { border: .125em solid blue; }\n.bright { border: .125em solid green; }\n\n.funds_box {\n\tdisplay: grid;\n\tgrid-template-rows:\n\t\t[funds_text] 1fr\n\t\t[invested_funds] 1fr;\n\tjustify-content: center;\n}\n\n.funds_text {\n\tgrid-row: funds_text;\n\tmargin: 0 auto 0 auto;\n}\n\n.invested_funds {\n\tgrid-row: invested_funds;\n\tmargin: 0 auto 0 auto;\n}\n\n\n.info_bar {\n\tgrid-column: info_bar;\n}\n\n.menu_btn {\n\tgrid-column: menu_btn;\n\tborder: .125em solid orange;\n\tcolor: pink;\n\theight: 60%;\n\twidth: 100%;\n\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Main/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Main/style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_container {\n\tgrid-column: Main;\n\tcolor: blue;\n\tfont-size: 1.5em;\n\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.left_window_container {\n\twidth: calc(50% - .5em);\n\theight: calc(100% - .5em);\n\tmargin: auto;\n\tborder: .125em solid black;\n\n\tdisplay: grid;\n\tgrid-template-rows:\n\t\t[stock_names] 3em\n\t\t[data_columns] calc(100% - 3em);\n}\n\n.tab_names {\n\tdisplay: inline-grid;\n\tgrid-template-columns: 30fr 20fr 30fr 20fr;\n}\n\n.tab_name {\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n\tborder: .125em solid black;\n}\n\n.stock_names {\n\tgrid-row: stock_names;\n\theight: 100%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n.stock_cards {\n\tgrid-row: data_columns;\n\n\tdisplay: grid;\n\tflex-direction: column;\n}\n\n.stock_card {\n\tborder: .125em solid black;\n\tborder-radius: .25em;\n\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: repeat(2, 1fr);\n}\n\n\n\n\n\n\n.right_window_container {\n\twidth: calc(50% - .5em);\n\theight: calc(100% - .5em);\n\tmargin: auto;\n\tborder: .125em solid black;\n}", "",{"version":3,"sources":["webpack://./src/components/Main/style.css"],"names":[],"mappings":"AAAA;CACC,iBAAiB;CACjB,WAAW;CACX,gBAAgB;;CAEhB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,uBAAuB;CACvB,yBAAyB;CACzB,YAAY;CACZ,0BAA0B;;CAE1B,aAAa;CACb;;iCAEgC;AACjC;;AAEA;CACC,oBAAoB;CACpB,0CAA0C;AAC3C;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,0BAA0B;AAC3B;;AAEA;CACC,qBAAqB;CACrB,YAAY;;CAEZ,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,sBAAsB;;CAEtB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,0BAA0B;CAC1B,oBAAoB;;CAEpB,aAAa;CACb,qCAAqC;CACrC,kCAAkC;AACnC;;;;;;;AAOA;CACC,uBAAuB;CACvB,yBAAyB;CACzB,YAAY;CACZ,0BAA0B;AAC3B","sourcesContent":[".main_container {\n\tgrid-column: Main;\n\tcolor: blue;\n\tfont-size: 1.5em;\n\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.left_window_container {\n\twidth: calc(50% - .5em);\n\theight: calc(100% - .5em);\n\tmargin: auto;\n\tborder: .125em solid black;\n\n\tdisplay: grid;\n\tgrid-template-rows:\n\t\t[stock_names] 3em\n\t\t[data_columns] calc(100% - 3em);\n}\n\n.tab_names {\n\tdisplay: inline-grid;\n\tgrid-template-columns: 30fr 20fr 30fr 20fr;\n}\n\n.tab_name {\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n\tborder: .125em solid black;\n}\n\n.stock_names {\n\tgrid-row: stock_names;\n\theight: 100%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n.stock_cards {\n\tgrid-row: data_columns;\n\n\tdisplay: grid;\n\tflex-direction: column;\n}\n\n.stock_card {\n\tborder: .125em solid black;\n\tborder-radius: .25em;\n\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: repeat(2, 1fr);\n}\n\n\n\n\n\n\n.right_window_container {\n\twidth: calc(50% - .5em);\n\theight: calc(100% - .5em);\n\tmargin: auto;\n\tborder: .125em solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {}\n\nhtml {\n  font-size: 62.5%;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: inherit;\n\tmargin: 0;\n}\n\nbody {\n\tmargin: 0;\n  box-sizing: border-box;\n}\n\np {\n\tmargin: 0;\n}\n\n.app_container {\n\tbackground-color: aliceblue;\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\n\tdisplay: grid;\n\tgrid-template-rows: \n\t\t[Header] 10em\n\t\t[Main] auto\n\t\t[Footer] 5em;\n\t\tgrid-row-gap: .125em;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,OAAO;;AAEP;EACE,gBAAgB;AAClB;;AAEA;;;CAGC,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,SAAS;EACR,sBAAsB;AACxB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,2BAA2B;CAC3B,iBAAiB;CACjB,gBAAgB;;CAEhB,aAAa;CACb;;;cAGa;EACZ,oBAAoB;AACtB","sourcesContent":[":root {}\n\nhtml {\n  font-size: 62.5%;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: inherit;\n\tmargin: 0;\n}\n\nbody {\n\tmargin: 0;\n  box-sizing: border-box;\n}\n\np {\n\tmargin: 0;\n}\n\n.app_container {\n\tbackground-color: aliceblue;\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\n\tdisplay: grid;\n\tgrid-template-rows: \n\t\t[Header] 10em\n\t\t[Main] auto\n\t\t[Footer] 5em;\n\t\tgrid-row-gap: .125em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/assets/normalize.css":
/*!**********************************!*\
  !*** ./src/assets/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/normalize.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Footer/style.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Main/style.css":
/*!***************************************!*\
  !*** ./src/components/Main/style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Main/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvYXNzZXRzL3N0dWJzLmpzIiwid2VicGFjazovL3N0b2NrdHJhY2tlci8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vc3JjL2Fzc2V0cy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3N0b2NrdHJhY2tlci8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3N0b2NrdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vc3JjL2Fzc2V0cy9ub3JtYWxpemUuY3NzPzU1YzciLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLmNzcz8zNTkzIiwid2VicGFjazovL3N0b2NrdHJhY2tlci8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZS5jc3M/MmEzYSIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlLmNzcz9iYmRlIiwid2VicGFjazovL3N0b2NrdHJhY2tlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3RvY2t0cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0b2NrdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdG9ja3RyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0b2NrdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0b2NrdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0b2NrdHJhY2tlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidXNlclN0dWIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImFwaV9rZXkiLCJpbnZlc3RlZF9mdW5kcyIsImludmVzdGVkX3VuZHMiLCJtYXJrZXRTdHViIiwidXNlcl9kYXRhX2lkIiwidGlja2VyIiwic2hhcmVzIiwic2hhcmVfdmFsdWUiLCJGb290ZXIiLCJmb290ZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJmdW5kc0JveCIsImRhdGEiLCJmdW5kc2JveCIsImZ1bmRzVGV4dCIsIlByb21pc2UiLCJhbGwiLCJhcHBlbmRDaGlsZCIsImluZm9ybWF0aW9uQmFyIiwiaW5mb0JhciIsImJ1dHRvbiIsImJ0biIsIm9uY2xpY2siLCJjaGFuZ2VDb2xvciIsInRhcmdldCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiSGVhZGVyIiwiaGVhZGVyIiwiRnVuZHNCb3giLCJJbmZvcm1hdGlvbkJhciIsIkJ1dHRvbiIsImNvbHVtbk5hbWVzIiwibiIsImkiLCJsZW5ndGgiLCJjYXJkIiwiVGlja2VyQ29udGFpbmVyIiwidGlja2VyQ29udGFpbmVyIiwidGlja2VySWRlbnQiLCJTaGFyZXNDb250YWluZXIiLCJzaGFyZXNDb250YWluZXIiLCJzaGFyZXNJZGVudCIsIlNoYXJlVmFsdWVDb250YWluZXIiLCJzaGFyZVZhbHVlQ29udGFpbmVyIiwic2hhcmVWYWx1ZSIsInNoYXJlVmFsdWVJZGVudCIsInN0b2NrQ2FyZHMiLCJkIiwibWFwIiwic3RvY2tDYXJkIiwiY2FyZE5hbWUiLCJsZWZ0V2luZG93IiwiQ29sdW1uTmFtZXMiLCJTdG9ja0NhcmRzIiwicmlnaHRXaW5kb3ciLCJNYWluIiwibWFpbiIsIkxlZnRXaW5kb3ciLCJSaWdodFdpbmRvdyIsIkFwcCIsImVsZW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsT0FBSyxFQUFFLHlCQUhUO0FBSUVDLFNBQU8sRUFBRSxrQ0FKWDtBQUtFQyxnQkFBYyxFQUFFO0FBTGxCLENBRHNCLEVBUXRCO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLE9BQUssRUFBRSx3QkFIVDtBQUlFQyxTQUFPLEVBQUUsa0NBSlg7QUFLRUUsZUFBYSxFQUFFO0FBTGpCLENBUnNCLEVBZXRCO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLE9BQUssRUFBRSx1QkFIVDtBQUlFQyxTQUFPLEVBQUUsa0NBSlg7QUFLRUMsZ0JBQWMsRUFBRTtBQUxsQixDQWZzQixDQUFqQjtBQXdCQSxJQUFNRSxVQUFV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QUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlclN0dWIgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnQnVja2V0JyxcbiAgICBlbWFpbDogJ2RhbmllbGx1ZHdpY2tAZ21haWwuY29tJyxcbiAgICBhcGlfa2V5OiAnTjJGcHFiaTFwQXlHNzNMdTdwZGxERVpQZjE5T1ZkX2InLFxuICAgIGludmVzdGVkX2Z1bmRzOiAnNDMzODkuNzMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ2RlZmF1bHRVc2VyMicsXG4gICAgZW1haWw6ICdkZWZhdWx0MVVzZXIyQG1haWwuY29tJyxcbiAgICBhcGlfa2V5OiAnTjJGcHFiaTFwQXlHNzNMdTdwZGxERVpQZjE5T1ZkX2InLFxuICAgIGludmVzdGVkX3VuZHM6ICc2NTU0Ny4xOCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnZGVmYXVsdFVzZXIzJyxcbiAgICBlbWFpbDogJ2RlZmF1bHRVc2VyM0BtYWlsLmNvbScsXG4gICAgYXBpX2tleTogJ04yRnBxYmkxcEF5RzczTHU3cGRsREVaUGYxOU9WZF9iJyxcbiAgICBpbnZlc3RlZF9mdW5kczogJzQzMzg5LjczJyxcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG1hcmtldFN0dWIgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB1c2VyX2RhdGFfaWQ6IDEsXG4gICAgdGlja2VyOiAnTycsXG4gICAgbmFtZTogJ1JlYWx0eSBJbmNvbWUnLFxuICAgIHNoYXJlczogMTgsXG4gICAgc2hhcmVfdmFsdWU6IDU3LjkyLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdXNlcl9kYXRhX2lkOiAyLFxuICAgIHRpY2tlcjogJ05SWicsXG4gICAgbmFtZTogJ05ldyBSZXNpZGVudGlhbCBJbnZlc3RtZW50JyxcbiAgICBzaGFyZXM6IDEwMCxcbiAgICBzaGFyZV92YWx1ZTogOS41OSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHVzZXJfZGF0YV9pZDogMyxcbiAgICB0aWNrZXI6ICdUJyxcbiAgICBuYW1lOiAnQVQmVCcsXG4gICAgc2hhcmVzOiAyNSxcbiAgICBzaGFyZV92YWx1ZTogMjkuNTQsXG4gIH0sXG4gICB7XG4gICAgaWQ6IDQsXG4gICAgdXNlcl9kYXRhX2lkOiAzLFxuICAgIHRpY2tlcjogJ0FBUEwnLFxuICAgIG5hbWU6ICdBcHBsZScsXG4gICAgc2hhcmVzOiA1LFxuICAgIHNoYXJlX3ZhbHVlOiAxNDAuMzUsXG4gIH0sXG4gICAge1xuICAgIGlkOiA1LFxuICAgIHVzZXJfZGF0YV9pZDogMyxcbiAgICB0aWNrZXI6ICdJUk0nLFxuICAgIG5hbWU6ICdJcm9uIE1vdW50YWluJyxcbiAgICBzaGFyZXM6IDE3LFxuICAgIHNoYXJlX3ZhbHVlOiAzMC4wNixcbiAgfSwgIHtcbiAgICBpZDogNixcbiAgICB1c2VyX2RhdGFfaWQ6IDMsXG4gICAgdGlja2VyOiAnQU1aTicsXG4gICAgbmFtZTogJ0FtYXpvbicsXG4gICAgc2hhcmVzOiAxLFxuICAgIHNoYXJlX3ZhbHVlOiAzMjkzLjc0LFxuICB9LFxuXTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG4vLy0tQWN0aW9ucy0tLy9cblxuXG4vLy0tRXZlbnRzLS0vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuXHRsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX2NvbnRhaW5lcicpO1xuXHRcdFx0Zm9vdGVyLmlubmVySFRNTCA9ICdGT09URVInO1xuXG5cdHJldHVybiBmb290ZXI7XG59OyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VyU3R1YiwgbWFya2V0U3R1YiB9IGZyb20gJy4uLy4uL2Fzc2V0cy9zdHVicy5qcyc7XG5cblxuLy8tLUVsZW1lbnRzLS0vL1xuY29uc3QgZnVuZHNCb3ggPSAoZGF0YSkgPT4ge1xuXHRsZXQgZnVuZHNib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGZ1bmRzYm94LmNsYXNzTGlzdC5hZGQoJ2Z1bmRzX2JveCcpO1xuXG5cdGxldCBmdW5kc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGZ1bmRzVGV4dC5jbGFzc0xpc3QuYWRkKCdmdW5kc190ZXh0Jyk7XG5cdFx0XHRmdW5kc1RleHQuaW5uZXJIVE1MID0gXCJFc3QuIFBvcnRmb2xpbyBWYWx1ZTogXCI7XG5cblx0bGV0IGludmVzdGVkX2Z1bmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRpbnZlc3RlZF9mdW5kcy5jbGFzc0xpc3QuYWRkKCdpbnZlc3RlZF9mdW5kcycpO1xuXHRcdFx0aW52ZXN0ZWRfZnVuZHMuaW5uZXJIVE1MID0gYCQgJHtkYXRhfWA7XG5cblx0UHJvbWlzZS5hbGwoW1xuXHRcdGZ1bmRzYm94LmFwcGVuZENoaWxkKGZ1bmRzVGV4dCksXG5cdFx0ZnVuZHNib3guYXBwZW5kQ2hpbGQoaW52ZXN0ZWRfZnVuZHMpLFxuXHRdKTtcblxuXHRyZXR1cm4gZnVuZHNib3g7XG59O1xuXG5jb25zdCBpbmZvcm1hdGlvbkJhciA9IChuYW1lKSA9PiB7XG5cdGxldCBpbmZvQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRpbmZvQmFyLmNsYXNzTGlzdC5hZGQoJ2luZm9fYmFyJyk7XG5cdFx0XHRpbmZvQmFyLmlkID0gJ2luZm8tYmFyJztcblx0XHRcdGluZm9CYXIuaW5uZXJIVE1MID0gYFdoYXRcXCdzIGNyYWNraW4nLCAke25hbWV9PyBXZWxjb21lIHRvIFN0b2NrIFRyYWNrZXIuYDtcblxuXHRyZXR1cm4gaW5mb0Jhcjtcbn07XG5cbmNvbnN0IGJ1dHRvbiA9ICgpID0+IHtcblx0bGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51X2J0bicpO1xuXHRcdGJ0bi5pbm5lckhUTUwgPSBcIlhcIjtcblx0XHRidG4ub25jbGljayA9IGNoYW5nZUNvbG9yO1xuXG5cdHJldHVybiBidG47XG59O1xuXG5cblxuLy8tLUFjdGlvbnMtLS8vXG5jb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcblx0bGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY29udGFpbmVyJyk7XG5cblx0aWYgKHRhcmdldC5jbGFzc0xpc3RbMV0gIT09ICdkYXJrJykge1xuXHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHRhcmdldC5jbGFzc0xpc3RbMV0pO1xuXHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG5cdH0gZWxzZSBpZiAoIHRhcmdldC5jbGFzc0xpc3RbMV0gIT09ICdicmlnaHQnKSB7XG5cdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGFyZ2V0LmNsYXNzTGlzdFsxXSk7XG5cdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2JyaWdodCcpO1xuXHR9O1xufTtcblxuXG4vLy0tRXZlbnRzLS0vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKGRhdGEpIHtcblx0Y29uc3QgeyBuYW1lLCBpbnZlc3RlZF9mdW5kcyB9ID0gZGF0YTtcblx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9jb250YWluZXInLCAnZGFyaycpO1xuXHRcdFx0aGVhZGVyLmlkID0gJ2hlYWRlci1jb250YWluZXInO1xuXG5cdGNvbnN0IEZ1bmRzQm94ID0gZnVuZHNCb3goaW52ZXN0ZWRfZnVuZHMpO1xuXHRjb25zdCBJbmZvcm1hdGlvbkJhciA9IGluZm9ybWF0aW9uQmFyKG5hbWUpO1xuXHRjb25zdCBCdXR0b24gPSBidXR0b24oKTtcblxuXHRQcm9taXNlLmFsbChbXG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKEZ1bmRzQm94KSxcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoSW5mb3JtYXRpb25CYXIpLFxuXHRcdGhlYWRlci5hcHBlbmRDaGlsZChCdXR0b24pLFxuXHRdKTtcblxuXHRyZXR1cm4gaGVhZGVyO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8tLUVsZW1lbnRzLS0vL1xuY29uc3QgY29sdW1uTmFtZXMgPSAoKSA9PiB7XG5cdGNvbnN0IG4gPSBbJ1N0b2NrJywnVGFiIDInLCdUYWIgMycsJ1RhYiA0J107XG5cdGxldCBjb2x1bW5OYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29sdW1uTmFtZXMuY2xhc3NMaXN0LmFkZCgndGFiX25hbWVzJyk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGk8bi5sZW5ndGg7aSsrKSB7XG5cdFx0bGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKCd0YWJfbmFtZScpO1xuXHRcdFx0XHRjYXJkLmlubmVySFRNTCA9IG5baV07XG5cblx0XHRjb2x1bW5OYW1lcy5hcHBlbmRDaGlsZChjYXJkKTtcblx0fTtcblxuXHRyZXR1cm4gY29sdW1uTmFtZXM7XG59O1xuY29uc3QgVGlja2VyQ29udGFpbmVyID0gKGkpID0+IHtcblx0XHRsZXQgdGlja2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRpY2tlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkX2l0ZW0nKTtcblx0XHRsZXQgdGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRpY2tlci5jbGFzc0xpc3QuYWRkKCd0aWNrZXJfc3ltYm9sJyk7XG5cdFx0XHRcdHRpY2tlci5pbm5lckhUTUwgPSBpLnRpY2tlcjtcblx0XHRsZXQgdGlja2VySWRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0dGlja2VySWRlbnQuaW5uZXJIVE1MID0gXCJUaWNrZXI6XCJcblxuXHRQcm9taXNlLmFsbChbXG5cdFx0dGlja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpY2tlcklkZW50KSxcblx0XHR0aWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGlja2VyKSxcblx0XSk7XG5cdHJldHVybiB0aWNrZXJDb250YWluZXI7XG59O1xuXG5jb25zdCBTaGFyZXNDb250YWluZXIgPSAoaSkgPT4ge1xuXHRsZXQgc2hhcmVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRzaGFyZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZF9pdGVtJyk7XG5cdGxldCBzaGFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHNoYXJlcy5jbGFzc0xpc3QuYWRkKCdzaGFyZXNfdmFsdWUnKTtcblx0XHRcdHNoYXJlcy5pbm5lckhUTUwgPSBpLnNoYXJlcztcblx0bGV0IHNoYXJlc0lkZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRzaGFyZXNJZGVudC5pbm5lckhUTUwgPSBcIlNoYXJlczpcIjtcblxuXHRQcm9taXNlLmFsbChbXG5cdFx0c2hhcmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoYXJlc0lkZW50KSxcblx0XHRzaGFyZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hhcmVzKSxcblx0XSk7XG5cdHJldHVybiBzaGFyZXNDb250YWluZXI7XG59O1xuXG5jb25zdCBTaGFyZVZhbHVlQ29udGFpbmVyID0gKGkpID0+IHtcblx0bGV0IHNoYXJlVmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHNoYXJlVmFsdWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZF9pdGVtJyk7XG5cdGxldCBzaGFyZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRzaGFyZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3NoYXJlX3ZhbHVlJyk7XG5cdFx0XHRzaGFyZVZhbHVlLmlubmVySFRNTCA9IGAkJHtpLnNoYXJlX3ZhbHVlfWA7XG5cdGxldCBzaGFyZVZhbHVlSWRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHNoYXJlVmFsdWVJZGVudC5pbm5lckhUTUwgPSBcIlNoYXJlIFZhbHVlOlwiO1xuXG5cdFByb21pc2UuYWxsKFtcblx0XHRzaGFyZVZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoYXJlVmFsdWVJZGVudCksXG5cdFx0c2hhcmVWYWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGFyZVZhbHVlKSxcblx0XSk7XG5cdHJldHVybiBzaGFyZVZhbHVlQ29udGFpbmVyXG59O1xuXG5jb25zdCBzdG9ja0NhcmRzID0gKGQpID0+IHtcblx0bGV0IHN0b2NrQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHN0b2NrQ2FyZHMuY2xhc3NMaXN0LmFkZCgnc3RvY2tfY2FyZHMnKTtcblxuXHRkLm1hcChpID0+IHtcblx0XHRsZXQgc3RvY2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHN0b2NrQ2FyZC5jbGFzc0xpc3QuYWRkKCdzdG9ja19jYXJkJyk7XG5cblx0XHRsZXQgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0Y2FyZE5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyZF9pdGVtJywnY2FyZF9uYW1lJyk7XG5cdFx0XHRcdGNhcmROYW1lLmlubmVySFRNTCA9IGkubmFtZTtcblxuXHRcdGNvbnN0IHRpY2tlckNvbnRhaW5lciA9IFRpY2tlckNvbnRhaW5lcihpKTtcblx0XHRjb25zdCBzaGFyZXNDb250YWluZXIgPSBTaGFyZXNDb250YWluZXIoaSk7XG5cdFx0Y29uc3Qgc2hhcmVWYWx1ZUNvbnRhaW5lciA9IFNoYXJlVmFsdWVDb250YWluZXIoaSk7XG5cblx0XHRQcm9taXNlLmFsbChbXG5cdFx0XHRzdG9ja0NhcmQuYXBwZW5kQ2hpbGQoY2FyZE5hbWUpLFxuXHRcdFx0c3RvY2tDYXJkLmFwcGVuZENoaWxkKHRpY2tlckNvbnRhaW5lciksXG5cdFx0XHRzdG9ja0NhcmQuYXBwZW5kQ2hpbGQoc2hhcmVzQ29udGFpbmVyKSxcblx0XHRcdHN0b2NrQ2FyZC5hcHBlbmRDaGlsZChzaGFyZVZhbHVlQ29udGFpbmVyKSxcblx0XHRdKTtcblxuXHRcdHN0b2NrQ2FyZHMuYXBwZW5kQ2hpbGQoc3RvY2tDYXJkKTtcblx0fSk7XG5cblx0cmV0dXJuIHN0b2NrQ2FyZHM7XG59O1xuXG5jb25zdCBsZWZ0V2luZG93ID0gKGRhdGEpID0+IHtcblx0bGV0IGxlZnRXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGxlZnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbGVmdF93aW5kb3dfY29udGFpbmVyJyk7XG5cblx0Y29uc3QgQ29sdW1uTmFtZXMgPSBjb2x1bW5OYW1lcygpO1xuXHRjb25zdCBTdG9ja0NhcmRzID0gc3RvY2tDYXJkcyhkYXRhKTtcblxuXHRQcm9taXNlLmFsbChbXG5cdFx0bGVmdFdpbmRvdy5hcHBlbmRDaGlsZChDb2x1bW5OYW1lcyksXG5cdFx0bGVmdFdpbmRvdy5hcHBlbmRDaGlsZChTdG9ja0NhcmRzKSxcblx0XSk7XG5cblx0cmV0dXJuIGxlZnRXaW5kb3c7XG59O1xuXG5jb25zdCByaWdodFdpbmRvdyA9ICgpID0+IHtcblx0bGV0IHJpZ2h0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRyaWdodFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdyaWdodF93aW5kb3dfY29udGFpbmVyJyk7XG5cdFx0XHRyaWdodFdpbmRvdy5pbm5lckhUTUwgPSBcIlJpZ2h0IFdpbmRvd1wiO1xuXG5cdHJldHVybiByaWdodFdpbmRvdztcbn07XG5cblxuLy8tLUV2ZW50cy0tLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oZGF0YSkge1xuXHRsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0bWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluX2NvbnRhaW5lcicpO1xuXG5cdGNvbnN0IExlZnRXaW5kb3cgPSBsZWZ0V2luZG93KGRhdGEpO1xuXHRjb25zdCBSaWdodFdpbmRvdyA9IHJpZ2h0V2luZG93KCk7XG5cblx0UHJvbWlzZS5hbGwoW1xuXHRcdG1haW4uYXBwZW5kQ2hpbGQoTGVmdFdpbmRvdyksXG5cdFx0bWFpbi5hcHBlbmRDaGlsZChSaWdodFdpbmRvdyksXG5cdF0pO1xuXG5cdHJldHVybiBtYWluO1xufTsiLCJpbXBvcnQgJy4uL3NyYy9hc3NldHMvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuXG4vL1RoZXNlIHdpbGwgYmUgYXF1aXJlZCB2aWEgZmV0Y2ggY2FsbHMgdG8gdGhlIGRhdGFiYXNlIGFuZCBhcGlcbmltcG9ydCB7IHVzZXJTdHViLCBtYXJrZXRTdHViIH0gZnJvbSAnLi4vc3JjL2Fzc2V0cy9zdHVicy5qcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXBwX2NvbnRhaW5lcicpO1xuXG4gIFByb21pc2UuYWxsKFtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKHVzZXJTdHViWzBdKSksXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKE1haW4obWFya2V0U3R1YikpLFxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChGb290ZXIoKSksXG4gICAgXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEFwcCgpKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJfY29udGFpbmVyIHtcXG5cXHRncmlkLWNvbHVtbjogRm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZO0NBQ1osV0FBVztBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXJfY29udGFpbmVyIHtcXG5cXHRncmlkLWNvbHVtbjogRm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXJfY29udGFpbmVyIHtcXG5cXHRncmlkLWNvbHVtbjogSGVhZGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxcblxcdFxcdFtpbnZlc3RlZF9mdW5kc10gMTJlbVxcblxcdFxcdFtpbmZvX2Jhcl0gY2FsYygxMDAlIC0gMTZlbSlcXG5cXHRcXHRbbWVudV9idG5dIDRlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhcmsgeyBib3JkZXI6IC4xMjVlbSBzb2xpZCBibHVlOyB9XFxuLmJyaWdodCB7IGJvcmRlcjogLjEyNWVtIHNvbGlkIGdyZWVuOyB9XFxuXFxuLmZ1bmRzX2JveCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6XFxuXFx0XFx0W2Z1bmRzX3RleHRdIDFmclxcblxcdFxcdFtpbnZlc3RlZF9mdW5kc10gMWZyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZnVuZHNfdGV4dCB7XFxuXFx0Z3JpZC1yb3c6IGZ1bmRzX3RleHQ7XFxuXFx0bWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uaW52ZXN0ZWRfZnVuZHMge1xcblxcdGdyaWQtcm93OiBpbnZlc3RlZF9mdW5kcztcXG5cXHRtYXJnaW46IDAgYXV0byAwIGF1dG87XFxufVxcblxcblxcbi5pbmZvX2JhciB7XFxuXFx0Z3JpZC1jb2x1bW46IGluZm9fYmFyO1xcbn1cXG5cXG4ubWVudV9idG4ge1xcblxcdGdyaWQtY29sdW1uOiBtZW51X2J0bjtcXG5cXHRib3JkZXI6IC4xMjVlbSBzb2xpZCBvcmFuZ2U7XFxuXFx0Y29sb3I6IHBpbms7XFxuXFx0aGVpZ2h0OiA2MCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjs7Q0FFbkIsZ0JBQWdCO0NBQ2hCLFlBQVk7O0NBRVosYUFBYTtDQUNiOzs7Z0JBR2U7Q0FDZixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUVBLFFBQVEseUJBQXlCLEVBQUU7QUFDbkMsVUFBVSwwQkFBMEIsRUFBRTs7QUFFdEM7Q0FDQyxhQUFhO0NBQ2I7O3NCQUVxQjtDQUNyQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtBQUN0Qjs7O0FBR0E7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsMkJBQTJCO0NBQzNCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsV0FBVzs7Q0FFWCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyX2NvbnRhaW5lciB7XFxuXFx0Z3JpZC1jb2x1bW46IEhlYWRlcjtcXG5cXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczpcXG5cXHRcXHRbaW52ZXN0ZWRfZnVuZHNdIDEyZW1cXG5cXHRcXHRbaW5mb19iYXJdIGNhbGMoMTAwJSAtIDE2ZW0pXFxuXFx0XFx0W21lbnVfYnRuXSA0ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXJrIHsgYm9yZGVyOiAuMTI1ZW0gc29saWQgYmx1ZTsgfVxcbi5icmlnaHQgeyBib3JkZXI6IC4xMjVlbSBzb2xpZCBncmVlbjsgfVxcblxcbi5mdW5kc19ib3gge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOlxcblxcdFxcdFtmdW5kc190ZXh0XSAxZnJcXG5cXHRcXHRbaW52ZXN0ZWRfZnVuZHNdIDFmcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bmRzX3RleHQge1xcblxcdGdyaWQtcm93OiBmdW5kc190ZXh0O1xcblxcdG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLmludmVzdGVkX2Z1bmRzIHtcXG5cXHRncmlkLXJvdzogaW52ZXN0ZWRfZnVuZHM7XFxuXFx0bWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG5cXG4uaW5mb19iYXIge1xcblxcdGdyaWQtY29sdW1uOiBpbmZvX2JhcjtcXG59XFxuXFxuLm1lbnVfYnRuIHtcXG5cXHRncmlkLWNvbHVtbjogbWVudV9idG47XFxuXFx0Ym9yZGVyOiAuMTI1ZW0gc29saWQgb3JhbmdlO1xcblxcdGNvbG9yOiBwaW5rO1xcblxcdGhlaWdodDogNjAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluX2NvbnRhaW5lciB7XFxuXFx0Z3JpZC1jb2x1bW46IE1haW47XFxuXFx0Y29sb3I6IGJsdWU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5sZWZ0X3dpbmRvd19jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDUwJSAtIC41ZW0pO1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gLjVlbSk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogLjEyNWVtIHNvbGlkIGJsYWNrO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOlxcblxcdFxcdFtzdG9ja19uYW1lc10gM2VtXFxuXFx0XFx0W2RhdGFfY29sdW1uc10gY2FsYygxMDAlIC0gM2VtKTtcXG59XFxuXFxuLnRhYl9uYW1lcyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMGZyIDIwZnIgMzBmciAyMGZyO1xcbn1cXG5cXG4udGFiX25hbWUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAuMTI1ZW0gc29saWQgYmxhY2s7XFxufVxcblxcbi5zdG9ja19uYW1lcyB7XFxuXFx0Z3JpZC1yb3c6IHN0b2NrX25hbWVzO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdG9ja19jYXJkcyB7XFxuXFx0Z3JpZC1yb3c6IGRhdGFfY29sdW1ucztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zdG9ja19jYXJkIHtcXG5cXHRib3JkZXI6IC4xMjVlbSBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAuMjVlbTtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLnJpZ2h0X3dpbmRvd19jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDUwJSAtIC41ZW0pO1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gLjVlbSk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogLjEyNWVtIHNvbGlkIGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsZ0JBQWdCOztDQUVoQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osMEJBQTBCOztDQUUxQixhQUFhO0NBQ2I7O2lDQUVnQztBQUNqQzs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQiwwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTs7Q0FFWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHNCQUFzQjs7Q0FFdEIsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixvQkFBb0I7O0NBRXBCLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsa0NBQWtDO0FBQ25DOzs7Ozs7O0FBT0E7Q0FDQyx1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fY29udGFpbmVyIHtcXG5cXHRncmlkLWNvbHVtbjogTWFpbjtcXG5cXHRjb2xvcjogYmx1ZTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmxlZnRfd2luZG93X2NvbnRhaW5lciB7XFxuXFx0d2lkdGg6IGNhbGMoNTAlIC0gLjVlbSk7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAuNWVtKTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiAuMTI1ZW0gc29saWQgYmxhY2s7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6XFxuXFx0XFx0W3N0b2NrX25hbWVzXSAzZW1cXG5cXHRcXHRbZGF0YV9jb2x1bW5zXSBjYWxjKDEwMCUgLSAzZW0pO1xcbn1cXG5cXG4udGFiX25hbWVzIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwZnIgMjBmciAzMGZyIDIwZnI7XFxufVxcblxcbi50YWJfbmFtZSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXI6IC4xMjVlbSBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0b2NrX25hbWVzIHtcXG5cXHRncmlkLXJvdzogc3RvY2tfbmFtZXM7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0b2NrX2NhcmRzIHtcXG5cXHRncmlkLXJvdzogZGF0YV9jb2x1bW5zO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN0b2NrX2NhcmQge1xcblxcdGJvcmRlcjogLjEyNWVtIHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucmlnaHRfd2luZG93X2NvbnRhaW5lciB7XFxuXFx0d2lkdGg6IGNhbGMoNTAlIC0gLjVlbSk7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAuNWVtKTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiAuMTI1ZW0gc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHt9XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGluaGVyaXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5wIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5hcHBfY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0bWluLXdpZHRoOiAxMDB2dztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogXFxuXFx0XFx0W0hlYWRlcl0gMTBlbVxcblxcdFxcdFtNYWluXSBhdXRvXFxuXFx0XFx0W0Zvb3Rlcl0gNWVtO1xcblxcdFxcdGdyaWQtcm93LWdhcDogLjEyNWVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLE9BQU87O0FBRVA7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztDQUdDLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0VBQ1Isc0JBQXNCO0FBQ3hCOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGlCQUFpQjtDQUNqQixnQkFBZ0I7O0NBRWhCLGFBQWE7Q0FDYjs7O2NBR2E7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge31cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogaW5oZXJpdDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnAge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmFwcF9jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRtaW4td2lkdGg6IDEwMHZ3O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBcXG5cXHRcXHRbSGVhZGVyXSAxMGVtXFxuXFx0XFx0W01haW5dIGF1dG9cXG5cXHRcXHRbRm9vdGVyXSA1ZW07XFxuXFx0XFx0Z3JpZC1yb3ctZ2FwOiAuMTI1ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=