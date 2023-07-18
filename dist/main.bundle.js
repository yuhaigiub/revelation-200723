(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Float/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Float/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/float_bg.png */ "./src/components/Float/assets/float_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#float-container {
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 500;
	display: flex;
	align-items: center;
	justify-content: center;
}

#float-bg {
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: all;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}

#float-bg a {
	display: block;
	width: 140px;
	margin-bottom: 5px;
	display: flex;
	justify-content: center;
}

#float-link-container {
	position: fixed;
	height: 470px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	right: 20px;
	top: 430px;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	width: 140px;
	height: 408px;
	background-repeat: no-repeat;
	transition: all 0.2s;
}

#recharge {
	margin-top: -150px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Float/style.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;CACpB,eAAe;CACf,MAAM;CACN,OAAO;CACP,WAAW;CACX,aAAa;CACb,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,QAAQ;CACR,mBAAmB;CACnB,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,uBAAuB;AACxB;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,aAAa;CACb,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,WAAW;CACX,UAAU;CACV,yDAA8C;CAC9C,YAAY;CACZ,aAAa;CACb,4BAA4B;CAC5B,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;AACnB","sourcesContent":["#float-container {\r\n\tpointer-events: none;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tz-index: 500;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#float-bg {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpointer-events: all;\r\n\tz-index: 100;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n\r\n#float-bg a {\r\n\tdisplay: block;\r\n\twidth: 140px;\r\n\tmargin-bottom: 5px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#float-link-container {\r\n\tposition: fixed;\r\n\theight: 470px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\tright: 20px;\r\n\ttop: 430px;\r\n\tbackground-image: url(\"./assets/float_bg.png\");\r\n\twidth: 140px;\r\n\theight: 408px;\r\n\tbackground-repeat: no-repeat;\r\n\ttransition: all 0.2s;\r\n}\r\n\r\n#recharge {\r\n\tmargin-top: -150px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
	position: relative;
	width: 1920px;
	height: 216px;
	font-family: RobotoCondensed-Regular;
}

footer img {
	position: absolute;
	top: 0;
	left: 0;
}

footer div {
	position: absolute;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	bottom: 26px;
	left: 50%;
	translate: -50% 0;
}

footer p {
	margin: 0;
	text-align: center;
	font-family: RobotoCondensed-Regular;
	font-size: 20px;
}

footer p:nth-child(1) {
	font-family: RobotoCondensed-Bold;
}

/* responsive */

body[data-device-type="mobile"] footer img.mobile {
	display: block;
}

body[data-device-type="mobile"] footer {
	width: 768px;
}

body[data-device-type="mobile"] footer div {
	width: 530px;
	position: absolute;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 6px;
	bottom: -45px;
	left: 50%;
	translate: -50% 0;
}

html[lang="th"] body[data-device-type="mobile"] footer div {
	width: 100%;
	bottom: -40px;
	font-size: 24px;
}`, "",{"version":3,"sources":["webpack://./src/components/Footer/style.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,aAAa;CACb,aAAa;CACb,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;AACR;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,QAAQ;CACR,YAAY;CACZ,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,SAAS;CACT,kBAAkB;CAClB,oCAAoC;CACpC,eAAe;AAChB;;AAEA;CACC,iCAAiC;AAClC;;AAEA,eAAe;;AAEf;CACC,cAAc;AACf;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,QAAQ;CACR,aAAa;CACb,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,eAAe;AAChB","sourcesContent":["footer {\r\n\tposition: relative;\r\n\twidth: 1920px;\r\n\theight: 216px;\r\n\tfont-family: RobotoCondensed-Regular;\r\n}\r\n\r\nfooter img {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\r\nfooter div {\r\n\tposition: absolute;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 8px;\r\n\tbottom: 26px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n}\r\n\r\nfooter p {\r\n\tmargin: 0;\r\n\ttext-align: center;\r\n\tfont-family: RobotoCondensed-Regular;\r\n\tfont-size: 20px;\r\n}\r\n\r\nfooter p:nth-child(1) {\r\n\tfont-family: RobotoCondensed-Bold;\r\n}\r\n\r\n/* responsive */\r\n\r\nbody[data-device-type=\"mobile\"] footer img.mobile {\r\n\tdisplay: block;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] footer {\r\n\twidth: 768px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] footer div {\r\n\twidth: 530px;\r\n\tposition: absolute;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 6px;\r\n\tbottom: -45px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n}\r\n\r\nhtml[lang=\"th\"] body[data-device-type=\"mobile\"] footer div {\r\n\twidth: 100%;\r\n\tbottom: -40px;\r\n\tfont-size: 24px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Frame1/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Frame1/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/select_language_bg.png */ "./src/components/Frame1/assets/select_language_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#frame1-container {
	width: 1920px;
	height: 1080px;
	position: relative;
}

#frame1-container video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#header-pc {
	top: 20px;
	left: 50%;
	translate: -50% 0;
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 1820px;
}

#header-pc > nav {
	display: flex;
	gap: 13px;
	position: relative;
	z-index: 100;
}

#header-pc > nav > div {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	width: 167px;
	height: 188px;
	position: absolute;
	right: -5px;
	top: 65px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
}

#header-pc > nav ul {
	list-style: none;
	padding: 0;
}

#header-pc > nav ul li {
	margin: 0;
	padding: 0;
}

#header-pc .language__item a {
	text-align: center;
	width: 165px;
	padding: 6px 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.language__item:hover {
	background: #807a7a;
}

#header-pc > nav ul a {
	font-family: RobotoCondensed-Regular;
	display: block;
	width: 100%;
	font-size: 20px;
	text-align: center;
	box-sizing: border-box;
	padding-block: 2px;
	text-decoration: none;
	color: white;
}

#header-pc > nav > div > a[data-selected] {
	font-weight: bold;
}

#header-pc > nav > div > a:hover {
	font-weight: bold;
	background-color: rgba(0, 0, 0, 0.2);
}

h1 {
	position: absolute;
	left: 523px;
	bottom: 203px;
}

#frame1-cta {
	width: 335px;
	height: 88px;
	position: absolute;
	bottom: 96px;
	left: 793px;
	font-size: 28.75px;
	color: rgb(119, 76, 35);
	display: flex;
	justify-content: center;
	align-items: center;
}

/* responsive */
body[data-device-type="mobile"] #frame1-container img.mobile {
	display: block;
}

body[data-device-type="mobile"] #frame1-container {
	width: 768px;
	height: 1350px;
	position: relative;
}

body[data-device-type="mobile"] h1 {
	left: 0;
	bottom: 185px;
}

body[data-device-type="mobile"] #frame1-cta {
	bottom: 71px;
	left: 50%;
	translate: -50%;
}

body[data-device-type="mobile"] #mobile-extra-top {
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 120px;
	width: 768px;
	box-sizing: border-box;
	padding-left: 10px;
	padding-right: 12px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Frame1/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,cAAc;CACd,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;AACb;;AAEA;CACC,SAAS;CACT,SAAS;CACT,iBAAiB;CACjB,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,SAAS;CACT,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,yDAAwD;CACxD,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,WAAW;CACX,SAAS;CACT,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,gBAAgB;CAChB,UAAU;AACX;;AAEA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;AACA;CACC,mBAAmB;AACpB;;AAEA;CACC,oCAAoC;CACpC,cAAc;CACd,WAAW;CACX,eAAe;CACf,kBAAkB;CAClB,sBAAsB;CACtB,kBAAkB;CAClB,qBAAqB;CACrB,YAAY;AACb;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,uBAAuB;CACvB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA,eAAe;AACf;CACC,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,cAAc;CACd,kBAAkB;AACnB;;AAEA;CACC,OAAO;CACP,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,SAAS;CACT,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;CAClB,UAAU;CACV,YAAY;CACZ,sBAAsB;CACtB,kBAAkB;CAClB,mBAAmB;AACpB","sourcesContent":["#frame1-container {\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n\tposition: relative;\r\n}\r\n\r\n#frame1-container video {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n#header-pc {\r\n\ttop: 20px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tposition: absolute;\r\n\twidth: 1820px;\r\n}\r\n\r\n#header-pc > nav {\r\n\tdisplay: flex;\r\n\tgap: 13px;\r\n\tposition: relative;\r\n\tz-index: 100;\r\n}\r\n\r\n#header-pc > nav > div {\r\n\tbackground-image: url(\"./assets/select_language_bg.png\");\r\n\twidth: 167px;\r\n\theight: 188px;\r\n\tposition: absolute;\r\n\tright: -5px;\r\n\ttop: 65px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n#header-pc > nav ul {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n#header-pc > nav ul li {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#header-pc .language__item a {\r\n\ttext-align: center;\r\n\twidth: 165px;\r\n\tpadding: 6px 8px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.language__item:hover {\r\n\tbackground: #807a7a;\r\n}\r\n\r\n#header-pc > nav ul a {\r\n\tfont-family: RobotoCondensed-Regular;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n\tbox-sizing: border-box;\r\n\tpadding-block: 2px;\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n#header-pc > nav > div > a[data-selected] {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#header-pc > nav > div > a:hover {\r\n\tfont-weight: bold;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nh1 {\r\n\tposition: absolute;\r\n\tleft: 523px;\r\n\tbottom: 203px;\r\n}\r\n\r\n#frame1-cta {\r\n\twidth: 335px;\r\n\theight: 88px;\r\n\tposition: absolute;\r\n\tbottom: 96px;\r\n\tleft: 793px;\r\n\tfont-size: 28.75px;\r\n\tcolor: rgb(119, 76, 35);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n/* responsive */\r\nbody[data-device-type=\"mobile\"] #frame1-container img.mobile {\r\n\tdisplay: block;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame1-container {\r\n\twidth: 768px;\r\n\theight: 1350px;\r\n\tposition: relative;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] h1 {\r\n\tleft: 0;\r\n\tbottom: 185px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame1-cta {\r\n\tbottom: 71px;\r\n\tleft: 50%;\r\n\ttranslate: -50%;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #mobile-extra-top {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tposition: absolute;\r\n\ttop: 120px;\r\n\twidth: 768px;\r\n\tbox-sizing: border-box;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 12px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Frame2/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Frame2/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#frame2-container {
	width: 1920px;
	height: 1080px;
	position: relative;
	margin-top: -2px;
}

#frame2-container h2 {
	position: absolute;
	top: -10px;
	left: 50%;
	translate: -50% 0;
	width: 1082px;
	height: 157px;
	display: flex;
	justify-content: center;
	align-items: center;
}

#frame2-swiper-container {
	width: 1390px;
	height: 687px;
	position: absolute;
	top: 170px;
	left: 265px;
}

#swiper-bg {
	width: 1229px;
	height: 721px;
	position: absolute;
	top: -20px;
	left: 50%;
	translate: -50% 0;
}

#frame2-swiper {
	width: 1125px;
	height: 612px;
	position: absolute;
	top: 50%;
	left: 49.9%;
	translate: -50% -50%;
	overflow: hidden;
	clip-path: polygon(0% 0%, 100% 0%, 100% 93%, 97% 100%, 0% 100%);
}

#fold {
	position: absolute;
	right: 106px;
	bottom: 10px;
}

#paperclip {
	position: absolute;
	top: -25px;
	left: 100px;
}

#frame2-container :is(.swiper-button-prev, .swiper-button-next)::after {
	display: none;
}

#ribbon-button-container {
	font-family: UTM-FacebookRKT;
	display: flex;
	position: absolute;
	right: 141px;
}

.ribbon-button {
	box-sizing: border-box;
	padding-inline: 14px;
	width: 83px;
	height: 253px;
	display: block;
	font-size: 22.02px;
	line-height: 24px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	text-align: center;
	position: relative;
	color: rgb(120, 69, 24);
}

.ribbon-button img:last-child {
	--animate-duration: 3s;
	display: none;
}

.ribbon-button[active] img:last-child {
	position: absolute;
	bottom: 45px;
	left: 50%;
	translate: -50% 0;
	display: block;
}

#frame2-cta {
	width: 335px;
	height: 88px;
	position: absolute;
	bottom: 45px;
	left: 793px;
	font-size: 28.75px;
	color: rgb(119, 76, 35);
	display: flex;
	justify-content: center;
	align-items: center;
}

#frame2-container p {
	font-family: UTM-FacebookRKT;
	width: 1200px;
	text-align: center;
	color: white;
	position: absolute;
	bottom: 155px;
	margin: 0;
	left: 50%;
	translate: -50% 0;
	font-size: 23.49px;
}

/* responsive */

body[data-device-type="mobile"] #frame2-container img.mobile {
	display: block;
}

body[data-device-type="mobile"] #frame2-container {
	width: 768px;
	height: 1457px;
	position: relative;
}

body[data-device-type="mobile"] #frame2-container h2 {
	position: absolute;
	top: 38px;
	width: fit-content;
	height: fit-content;
}

body[data-device-type="mobile"] #frame2-swiper-container {
	width: 768px;
	height: 690px;
	background-color: gainsboro;
	position: absolute;
	top: 224px;
	left: 0;
}

body[data-device-type="mobile"] #ribbon-button-container {
	top: 690px;
	left: 50%;
	right: unset;
	translate: -50% 0;
	gap: 77px;
}

body[data-device-type="mobile"] #frame2-container .swiper-button-prev {
	margin-left: 30px;
}

body[data-device-type="mobile"] #frame2-container .swiper-button-next {
	margin-right: 30px;
}

body[data-device-type="mobile"] .ribbon-button {
	box-sizing: border-box;
	padding-inline: 14px;
	display: block;
	font-size: 26.72px;
	line-height: 28px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	text-align: center;
	position: relative;
	color: rgb(120, 69, 24);
}

body[data-device-type="mobile"] .ribbon-button[active] img:last-child {
	bottom: 8px;
}

body[data-device-type="mobile"] #frame2-swiper {
	width: 768px;
	height: 613px;
	position: absolute;
	top: 50%;
	left: 49.9%;
	translate: -50% -50%;
	overflow: hidden;
	clip-path: none;
}

body[data-device-type="mobile"] #frame2-swiper img {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

body[data-device-type="mobile"] #frame2-container p {
	width: calc(100% - 7px * 2);
	color: white;
	position: absolute;
	bottom: 160px;
	margin: 0;
	left: 50%;
	translate: -50% 0;
	font-size: 24.3px;
	text-align: center;
}

body[data-device-type="mobile"] #frame2-cta {
	width: 335px;
	height: 88px;
	position: absolute;
	bottom: 40px;
	left: 50%;
	translate: -50% 0;
	font-size: 28.75px;
	color: rgb(119, 76, 35);
	display: flex;
	justify-content: center;
	align-items: center;
}

html[lang="en"] body[data-device-type="mobile"] #frame2-container p {
	width: calc(100% - 100px * 2);
	font-size: 29.3px;
}

html[lang="id"] body[data-device-type="mobile"] #frame2-container p {
	width: calc(100% - 178px * 2);
	font-size: 29.3px;
}

html[lang="th"] #frame2-container p {
	bottom: 145px;
	font-size: 43px;
	width: 100%;
}

html[lang="th"] body[data-device-type="mobile"] #frame2-container p {
	bottom: 170px;
	font-size: 50px;
	width: 100%;
}

html[lang="cn"] #frame2-container p {
	font-family: cn-2;
	width: calc(100% - 166px * 2);
	font-size: 26.3px;
}
`, "",{"version":3,"sources":["webpack://./src/components/Frame2/style.css"],"names":[],"mappings":"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","sourcesContent":["#frame2-container {\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n\tposition: relative;\r\n\tmargin-top: -2px;\r\n}\r\n\r\n#frame2-container h2 {\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\twidth: 1082px;\r\n\theight: 157px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n#frame2-swiper-container {\r\n\twidth: 1390px;\r\n\theight: 687px;\r\n\tposition: absolute;\r\n\ttop: 170px;\r\n\tleft: 265px;\r\n}\r\n\r\n#swiper-bg {\r\n\twidth: 1229px;\r\n\theight: 721px;\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n}\r\n\r\n#frame2-swiper {\r\n\twidth: 1125px;\r\n\theight: 612px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 49.9%;\r\n\ttranslate: -50% -50%;\r\n\toverflow: hidden;\r\n\tclip-path: polygon(0% 0%, 100% 0%, 100% 93%, 97% 100%, 0% 100%);\r\n}\r\n\r\n#fold {\r\n\tposition: absolute;\r\n\tright: 106px;\r\n\tbottom: 10px;\r\n}\r\n\r\n#paperclip {\r\n\tposition: absolute;\r\n\ttop: -25px;\r\n\tleft: 100px;\r\n}\r\n\r\n#frame2-container :is(.swiper-button-prev, .swiper-button-next)::after {\r\n\tdisplay: none;\r\n}\r\n\r\n#ribbon-button-container {\r\n\tfont-family: UTM-FacebookRKT;\r\n\tdisplay: flex;\r\n\tposition: absolute;\r\n\tright: 141px;\r\n}\r\n\r\n.ribbon-button {\r\n\tbox-sizing: border-box;\r\n\tpadding-inline: 14px;\r\n\twidth: 83px;\r\n\theight: 253px;\r\n\tdisplay: block;\r\n\tfont-size: 22.02px;\r\n\tline-height: 24px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 20px;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tcolor: rgb(120, 69, 24);\r\n}\r\n\r\n.ribbon-button img:last-child {\r\n\t--animate-duration: 3s;\r\n\tdisplay: none;\r\n}\r\n\r\n.ribbon-button[active] img:last-child {\r\n\tposition: absolute;\r\n\tbottom: 45px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\tdisplay: block;\r\n}\r\n\r\n#frame2-cta {\r\n\twidth: 335px;\r\n\theight: 88px;\r\n\tposition: absolute;\r\n\tbottom: 45px;\r\n\tleft: 793px;\r\n\tfont-size: 28.75px;\r\n\tcolor: rgb(119, 76, 35);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n#frame2-container p {\r\n\tfont-family: UTM-FacebookRKT;\r\n\twidth: 1200px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tposition: absolute;\r\n\tbottom: 155px;\r\n\tmargin: 0;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\tfont-size: 23.49px;\r\n}\r\n\r\n/* responsive */\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container img.mobile {\r\n\tdisplay: block;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container {\r\n\twidth: 768px;\r\n\theight: 1457px;\r\n\tposition: relative;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container h2 {\r\n\tposition: absolute;\r\n\ttop: 38px;\r\n\twidth: fit-content;\r\n\theight: fit-content;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-swiper-container {\r\n\twidth: 768px;\r\n\theight: 690px;\r\n\tbackground-color: gainsboro;\r\n\tposition: absolute;\r\n\ttop: 224px;\r\n\tleft: 0;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #ribbon-button-container {\r\n\ttop: 690px;\r\n\tleft: 50%;\r\n\tright: unset;\r\n\ttranslate: -50% 0;\r\n\tgap: 77px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container .swiper-button-prev {\r\n\tmargin-left: 30px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container .swiper-button-next {\r\n\tmargin-right: 30px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] .ribbon-button {\r\n\tbox-sizing: border-box;\r\n\tpadding-inline: 14px;\r\n\tdisplay: block;\r\n\tfont-size: 26.72px;\r\n\tline-height: 28px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 20px;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tcolor: rgb(120, 69, 24);\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] .ribbon-button[active] img:last-child {\r\n\tbottom: 8px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-swiper {\r\n\twidth: 768px;\r\n\theight: 613px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 49.9%;\r\n\ttranslate: -50% -50%;\r\n\toverflow: hidden;\r\n\tclip-path: none;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-swiper img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-container p {\r\n\twidth: calc(100% - 7px * 2);\r\n\tcolor: white;\r\n\tposition: absolute;\r\n\tbottom: 160px;\r\n\tmargin: 0;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\tfont-size: 24.3px;\r\n\ttext-align: center;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #frame2-cta {\r\n\twidth: 335px;\r\n\theight: 88px;\r\n\tposition: absolute;\r\n\tbottom: 40px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n\tfont-size: 28.75px;\r\n\tcolor: rgb(119, 76, 35);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\nhtml[lang=\"en\"] body[data-device-type=\"mobile\"] #frame2-container p {\r\n\twidth: calc(100% - 100px * 2);\r\n\tfont-size: 29.3px;\r\n}\r\n\r\nhtml[lang=\"id\"] body[data-device-type=\"mobile\"] #frame2-container p {\r\n\twidth: calc(100% - 178px * 2);\r\n\tfont-size: 29.3px;\r\n}\r\n\r\nhtml[lang=\"th\"] #frame2-container p {\r\n\tbottom: 145px;\r\n\tfont-size: 43px;\r\n\twidth: 100%;\r\n}\r\n\r\nhtml[lang=\"th\"] body[data-device-type=\"mobile\"] #frame2-container p {\r\n\tbottom: 170px;\r\n\tfont-size: 50px;\r\n\twidth: 100%;\r\n}\r\n\r\nhtml[lang=\"cn\"] #frame2-container p {\r\n\tfont-family: cn-2;\r\n\twidth: calc(100% - 166px * 2);\r\n\tfont-size: 26.3px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/HeaderMobile/style.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/HeaderMobile/style.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/blue_button.png */ "./src/components/HeaderMobile/assets/blue_button.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/gray_button.png */ "./src/components/HeaderMobile/assets/gray_button.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header-mobile {
	width: 768px;
	background-color: rgba(11, 25, 44, 0.5);
	position: fixed;
	z-index: 20;
}

#header-bg {
	width: 768px;
	height: 90px;
	background-color: rgba(11, 25, 44, 0.5);
	position: absolute;
	left: 0;
	top: 0;
}

#favicon {
	position: absolute;
	left: 20px;
	top: 9px;
	z-index: 100;
}

#open-menu-button {
	position: absolute;
	right: 25px;
	top: 30px;
}

#mid-button-container {
	font-family: utm-fb;
	color: rgb(253, 247, 234);
	position: absolute;
	right: 82px;
	top: 19px;
	display: flex;
	gap: 5px;
}
#mid-button-container a {
	font-size: 24px;
	color: white;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	width: 211px;
	height: 57px;
	display: flex;
	justify-content: center;
	align-items: center;
}

#hidden-menu-container {
	font-family: barlow-medium;
	width: 768px;
	height: 706px;
	background-color: rgba(0, 0, 0, 0.9);
	position: absolute;
	top: 90px;
	z-index: 10;
}

#hidden-menu-container nav {
	display: flex;
	flex-direction: column;
	gap: 38px;
	align-items: center;
	position: absolute;
	top: 45px;
	width: 200px;
	left: 50%;
	translate: -50% 0;
}

#hidden-menu-container nav :is(a, button) {
	color: white;
	font-size: 25px;
	text-align: center;
}

#hidden-menu-container nav a:last-child {
	color: white;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
}

#header-mobile .lang-button-container {
	display: flex;
	width: 768px;
	gap: 22px;
	position: absolute;
	bottom: 60px;
	left: 50%;
	translate: -50% 0;
}

#header-mobile .lang-button-container ul {
	list-style: none;
	padding: 0;
	display: flex;
	gap: 22px;
	flex-wrap: wrap;
	width: 768px;
	justify-content: center;
}

#header-mobile .lang-button-container a {
	font-family: barlow-medium;
	display: block;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	width: 198px;
	height: 44px;
	color: white;
	font-size: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* responsive */

body[data-device-type="mobile"] #header-mobile {
	display: block;
}
`, "",{"version":3,"sources":["webpack://./src/components/HeaderMobile/style.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,uCAAuC;CACvC,eAAe;CACf,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,uCAAuC;CACvC,kBAAkB;CAClB,OAAO;CACP,MAAM;AACP;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,SAAS;AACV;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,kBAAkB;CAClB,WAAW;CACX,SAAS;CACT,aAAa;CACb,QAAQ;AACT;AACA;CACC,eAAe;CACf,YAAY;CACZ,yDAAiD;CACjD,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;CAC1B,YAAY;CACZ,aAAa;CACb,oCAAoC;CACpC,kBAAkB;CAClB,SAAS;CACT,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mBAAmB;CACnB,kBAAkB;CAClB,SAAS;CACT,YAAY;CACZ,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,SAAS;CACT,kBAAkB;CAClB,YAAY;CACZ,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,UAAU;CACV,aAAa;CACb,SAAS;CACT,eAAe;CACf,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,0BAA0B;CAC1B,cAAc;CACd,yDAAiD;CACjD,YAAY;CACZ,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA,eAAe;;AAEf;CACC,cAAc;AACf","sourcesContent":["#header-mobile {\r\n\twidth: 768px;\r\n\tbackground-color: rgba(11, 25, 44, 0.5);\r\n\tposition: fixed;\r\n\tz-index: 20;\r\n}\r\n\r\n#header-bg {\r\n\twidth: 768px;\r\n\theight: 90px;\r\n\tbackground-color: rgba(11, 25, 44, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n#favicon {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\ttop: 9px;\r\n\tz-index: 100;\r\n}\r\n\r\n#open-menu-button {\r\n\tposition: absolute;\r\n\tright: 25px;\r\n\ttop: 30px;\r\n}\r\n\r\n#mid-button-container {\r\n\tfont-family: utm-fb;\r\n\tcolor: rgb(253, 247, 234);\r\n\tposition: absolute;\r\n\tright: 82px;\r\n\ttop: 19px;\r\n\tdisplay: flex;\r\n\tgap: 5px;\r\n}\r\n#mid-button-container a {\r\n\tfont-size: 24px;\r\n\tcolor: white;\r\n\tbackground-image: url(\"./assets/blue_button.png\");\r\n\twidth: 211px;\r\n\theight: 57px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n#hidden-menu-container {\r\n\tfont-family: barlow-medium;\r\n\twidth: 768px;\r\n\theight: 706px;\r\n\tbackground-color: rgba(0, 0, 0, 0.9);\r\n\tposition: absolute;\r\n\ttop: 90px;\r\n\tz-index: 10;\r\n}\r\n\r\n#hidden-menu-container nav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 38px;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\ttop: 45px;\r\n\twidth: 200px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n}\r\n\r\n#hidden-menu-container nav :is(a, button) {\r\n\tcolor: white;\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n}\r\n\r\n#hidden-menu-container nav a:last-child {\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#header-mobile .lang-button-container {\r\n\tdisplay: flex;\r\n\twidth: 768px;\r\n\tgap: 22px;\r\n\tposition: absolute;\r\n\tbottom: 60px;\r\n\tleft: 50%;\r\n\ttranslate: -50% 0;\r\n}\r\n\r\n#header-mobile .lang-button-container ul {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\tgap: 22px;\r\n\tflex-wrap: wrap;\r\n\twidth: 768px;\r\n\tjustify-content: center;\r\n}\r\n\r\n#header-mobile .lang-button-container a {\r\n\tfont-family: barlow-medium;\r\n\tdisplay: block;\r\n\tbackground-image: url(\"./assets/gray_button.png\");\r\n\twidth: 198px;\r\n\theight: 44px;\r\n\tcolor: white;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n/* responsive */\r\n\r\nbody[data-device-type=\"mobile\"] #header-mobile {\r\n\tdisplay: block;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/setup/general.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/setup/general.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RobotoCondensed-Bold.ttf */ "./src/assets/fonts/RobotoCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RobotoCondensed-Regular.ttf */ "./src/assets/fonts/RobotoCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/UTM-Facebook.ttf */ "./src/assets/fonts/UTM-Facebook.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Barlow-Light.ttf */ "./src/assets/fonts/Barlow-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Barlow-Bold.ttf */ "./src/assets/fonts/Barlow-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Barlow-Medium.ttf */ "./src/assets/fonts/Barlow-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/UTM-FacebookRKT.ttf */ "./src/assets/fonts/UTM-FacebookRKT.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cn_1.ttf */ "./src/assets/fonts/cn_1.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/cn_2.ttf */ "./src/assets/fonts/cn_2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
	overflow-x: hidden;
	overflow-y: auto;
	background: #fdfdfd;
	scroll-behavior: smooth;
}

body {
	width: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	margin: 0;
	padding: 0;
	background: none;
	position: relative;
}

#outer-root {
	width: fit-content;
	overflow: hidden;
}

#root {
	position: relative;
	transform-origin: top left;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: black;
}

a {
	text-decoration: none;
	cursor: pointer;
}

button {
	border: none;
	background-color: transparent;
	cursor: pointer;
}

a:hover,
button:hover {
	cursor: pointer;
	pointer-events: all;
	filter: brightness(110%);
}

@font-face {
	font-family: RobotoCondensed-Bold;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
	font-family: RobotoCondensed-Regular;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
	font-family: utm-fb;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
	font-family: barlow-light;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

@font-face {
	font-family: barlow-bold;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

@font-face {
	font-family: barlow-medium;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
@font-face {
	font-family: UTM-FacebookRKT;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

@font-face {
	font-family: cn-1;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

@font-face {
	font-family: cn-2;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}`, "",{"version":3,"sources":["webpack://./src/setup/general.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,kBAAkB;CAClB,SAAS;CACT,UAAU;CACV,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,kBAAkB;CAClB,gBAAgB;CAChB,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,6BAA6B;CAC7B,eAAe;AAChB;;AAEA;;CAEC,eAAe;CACf,mBAAmB;CACnB,wBAAwB;AACzB;;AAEA;CACC,iCAAiC;CACjC,4CAAoD;AACrD;;AAEA;CACC,oCAAoC;CACpC,4CAAuD;AACxD;;AAEA;CACC,mBAAmB;CACnB,4CAA4C;AAC7C;;AAEA;CACC,yBAAyB;CACzB,4CAA4C;AAC7C;;AAEA;CACC,wBAAwB;CACxB,4CAA2C;AAC5C;;AAEA;CACC,0BAA0B;CAC1B,4CAA6C;AAC9C;AACA;CACC,4BAA4B;CAC5B,4CAA+C;AAChD;;AAEA;CACC,iBAAiB;CACjB,4CAAoC;AACrC;;AAEA;CACC,iBAAiB;CACjB,4CAAoC;AACrC","sourcesContent":["html {\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tbackground: #fdfdfd;\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\twidth: 100%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: hidden;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: none;\r\n\tposition: relative;\r\n}\r\n\r\n#outer-root {\r\n\twidth: fit-content;\r\n\toverflow: hidden;\r\n}\r\n\r\n#root {\r\n\tposition: relative;\r\n\ttransform-origin: top left;\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tbackground-color: black;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n\tcursor: pointer;\r\n}\r\n\r\na:hover,\r\nbutton:hover {\r\n\tcursor: pointer;\r\n\tpointer-events: all;\r\n\tfilter: brightness(110%);\r\n}\r\n\r\n@font-face {\r\n\tfont-family: RobotoCondensed-Bold;\r\n\tsrc: url(\"../assets/fonts/RobotoCondensed-Bold.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: RobotoCondensed-Regular;\r\n\tsrc: url(\"../assets/fonts/RobotoCondensed-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: utm-fb;\r\n\tsrc: url(\"../assets/fonts/UTM-Facebook.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: barlow-light;\r\n\tsrc: url(\"../assets/fonts/Barlow-Light.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: barlow-bold;\r\n\tsrc: url(\"../assets/fonts/Barlow-Bold.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: barlow-medium;\r\n\tsrc: url(\"../assets/fonts/Barlow-Medium.ttf\");\r\n}\r\n@font-face {\r\n\tfont-family: UTM-FacebookRKT;\r\n\tsrc: url(\"../assets/fonts/UTM-FacebookRKT.ttf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: cn-1;\r\n\tsrc: url('../assets/fonts/cn_1.ttf');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: cn-2;\r\n\tsrc: url('../assets/fonts/cn_2.ttf');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#root {
	z-index: 0;
	width: 1920px;
	height: 2376px;
}

*.mobile {
	display: none;
}

body[data-device-type="mobile"] #root {
	width: 768px;
	height: 3132px;
}

body[data-device-type="mobile"] *.pc {
	display: none !important;
}

.bg-img {
	position: absolute;
	top: 0;
	left: 0;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,aAAa;CACb,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;AACR","sourcesContent":["#root {\r\n\tz-index: 0;\r\n\twidth: 1920px;\r\n\theight: 2376px;\r\n}\r\n\r\n*.mobile {\r\n\tdisplay: none;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] #root {\r\n\twidth: 768px;\r\n\theight: 3132px;\r\n}\r\n\r\nbody[data-device-type=\"mobile\"] *.pc {\r\n\tdisplay: none !important;\r\n}\r\n\r\n.bg-img {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Float/style.css":
/*!****************************************!*\
  !*** ./src/components/Float/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Float/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/style.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Frame1/style.css":
/*!*****************************************!*\
  !*** ./src/components/Frame1/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Frame1/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Frame2/style.css":
/*!*****************************************!*\
  !*** ./src/components/Frame2/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Frame2/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/HeaderMobile/style.css":
/*!***********************************************!*\
  !*** ./src/components/HeaderMobile/style.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/HeaderMobile/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/setup/general.css":
/*!*******************************!*\
  !*** ./src/setup/general.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/setup/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Frame1/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame1/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runFrame1)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function runFrame1() {
	const languageButton = $("#header-pc nav button");
	const languageContainer = $("#header-pc nav > div");
	let isOpenLanguage = languageContainer.attr("data-open-initial") === "true";
	if (!isOpenLanguage) languageContainer.hide();

	languageButton.on("click", function () {
		isOpenLanguage = !isOpenLanguage;
		if (isOpenLanguage) {
			languageContainer.slideDown();
		} else {
			languageContainer.slideUp();
		}
	});

	// language link clicked
	const languageLinks = languageContainer.find("a");
	let languageSelected = parseInt(languageContainer.attr("data-lang-selected"));
	languageLinks.eq(languageSelected).css({
		fontWeight: "bold",
	});

	languageLinks.each(function (index, element) {
		$(element).on("click", function (event) {
			if (index === languageSelected) return;
			languageLinks.eq(languageSelected).css({
				fontWeight: "normal",
			});
			languageSelected = index;
			languageLinks.eq(languageSelected).css({
				fontWeight: "bold",
			});
			isOpenLanguage = false;
			languageContainer.slideUp();
		});
	});
}


/***/ }),

/***/ "./src/components/Frame2/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame2/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runFrame2)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function runFrame2() {
	const ribbonButtons = $(".ribbon-button");
	ribbonButtons.eq(0).attr("active", "");

	let currentSlide = 0;
	const frame2Swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]("#frame2-swiper", {
		direction: "horizontal",
		navigation: {
			prevEl: "#frame2-container .swiper-button-prev",
			nextEl: "#frame2-container .swiper-button-next",
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		on: {
			slideChangeTransitionEnd: function (swiper) {
				ribbonButtons.eq(currentSlide).removeAttr("active");
				ribbonButtons.eq(swiper.activeIndex).attr("active", "");
				currentSlide = swiper.activeIndex;
			},
		},
	});

	ribbonButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			ribbonButtons.eq(currentSlide).removeAttr("active");
			frame2Swiper.slideTo(index);
			ribbonButtons.eq(index).attr("active", "");
			currentSlide = index;
		});
	});
}


/***/ }),

/***/ "./src/components/HeaderMobile/index.js":
/*!**********************************************!*\
  !*** ./src/components/HeaderMobile/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runHeaderMobile)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function runHeaderMobile() {
	let isOpening = false;
	const hiddenMenu = $("#hidden-menu-container");
	const openMenuButton = $("#open-menu-button");
	const imgs = openMenuButton.find("img");
	openMenuButton.on("click", function () {
		isOpening = !isOpening;
		if (isOpening) {
			imgs.eq(1).show();
			imgs.eq(0).hide();
			hiddenMenu.slideDown();
		} else {
			imgs.eq(0).show();
			imgs.eq(1).hide();
			hiddenMenu.slideUp();
		}
	});

	const hiddenMenuOptions = $("#hidden-menu-container a");
	hiddenMenuOptions.on("click", function (event) {
		isOpening = false;
		imgs.eq(0).show();
		imgs.eq(1).hide();
		hiddenMenu.slideUp();
	});

	const scrollToTopButton = $("#hidden-menu-container nav button");
	scrollToTopButton.on("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup/general.css */ "./src/setup/general.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Frame1_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Frame1/style.css */ "./src/components/Frame1/style.css");
/* harmony import */ var _components_Frame2_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Frame2/style.css */ "./src/components/Frame2/style.css");
/* harmony import */ var _components_Footer_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer/style.css */ "./src/components/Footer/style.css");
/* harmony import */ var _components_HeaderMobile_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HeaderMobile/style.css */ "./src/components/HeaderMobile/style.css");
/* harmony import */ var _components_Float_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Float/style.css */ "./src/components/Float/style.css");
/* harmony import */ var _components_Frame1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Frame1 */ "./src/components/Frame1/index.js");
/* harmony import */ var _components_Frame2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Frame2 */ "./src/components/Frame2/index.js");
/* harmony import */ var _components_HeaderMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HeaderMobile */ "./src/components/HeaderMobile/index.js");
/* harmony import */ var _setup_language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setup/_language */ "./src/setup/_language.js");
/* harmony import */ var _setup_language__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_setup_language__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _setup_scaleRoot2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setup/_scaleRoot2 */ "./src/setup/_scaleRoot2.js");
/* harmony import */ var _setup_scaleRoot2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_setup_scaleRoot2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! swiper/css/autoplay */ "./node_modules/swiper/modules/autoplay.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
























swiper__WEBPACK_IMPORTED_MODULE_14__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_15__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_15__.Autoplay]);

window.addEventListener("load", () => {
	$("#root").scalePlatform();
	$(window).on("resize", () => {
		$("#root").scalePlatform();
	});
	$("#root").scalePlatform();
});

$(function () {
	(0,_components_Frame1__WEBPACK_IMPORTED_MODULE_7__["default"])();
	(0,_components_Frame2__WEBPACK_IMPORTED_MODULE_8__["default"])();
	(0,_components_HeaderMobile__WEBPACK_IMPORTED_MODULE_9__["default"])();
});

// old scaleroot
// // scale root
// const outerRoot = document.getElementById("outer-root");
// const root = document.getElementById("root");
// root.style.transformOrigin = "top left";

// let mode, width, height, ratio;

// // custom
// const floatContainer = $("#float-container").get(0);
// floatContainer.style.transformOrigin = "top left";

// const headerMobile = $("#header-mobile").get(0);
// headerMobile.style.transformOrigin = "top left";

// function scaleRoot() {
// 	// check on every trigger
// 	mode = window.innerWidth <= 768 ? "mobile" : "pc";
// 	width = root.offsetWidth;
// 	height = root.offsetHeight;
// 	ratio = width / height;

// 	const desiredWidth = window.innerWidth;
// 	const desiredHeight = desiredWidth / ratio;

// 	const ratioW = desiredWidth / width;
// 	const ratioH = desiredHeight / height;

// 	outerRoot.style.width = `${desiredWidth}px`;
// 	outerRoot.style.height = `${desiredHeight}px`;

// 	root.style.transform = `scale(${ratioW}, ${ratioH})`;
// 	floatContainer.style.transform = `scale(${ratioW}, ${ratioH})`;
// 	headerMobile.style.transform = `scale(${ratioW}, ${ratioH})`;
// }

// window.addEventListener("load", scaleRoot);
// window.addEventListener("resize", scaleRoot);


/***/ }),

/***/ "./src/setup/_language.js":
/*!********************************!*\
  !*** ./src/setup/_language.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var welcome = $("#input-region").val();
var language = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var d = new Date();
d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
var expires = "expires=" + d.toUTCString();

jQuery(document).ready(function () {
	$(".choose-language .region").removeClass("languages__current");
	if (language.length == 0) {
		document.cookie = "language=" + welcome + ";" + expires + "; path=/";
		$(".choose-language .region[data-region=" + welcome + "]").addClass("active");
		renewChooseLanguage();
	} else {
		renewChooseLanguage();
	}
	$(".dropdown-content .region").on("click", function (e) {
		e.preventDefault();
		welcome = $(this).data("region");
		document.cookie = "language=" + welcome + ";" + expires + "; path=/";
		if (!$(this).hasClass("languages__current")) {
			document.location.href = "/tinhkytuyetcanh";
		}
	});
	// $('.dropdown-content .language__item').on('click', function (e) {
	//     e.preventDefault();
	//     $(this).addClass("active");
	//     if (!$(this).hasClass('active')) {
	//         $('.language__item').removeClass("active");
	//     }
	// });
});

function renewChooseLanguage() {
	var x = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	var chosenNationText = $(".choose-language .region[data-region=" + x + "]")
		.eq(0)
		.text();
	var chosenLang = x;
	$(".current").html(chosenNationText);
	$(".currentInput").attr("data-region", chosenLang);
	$(".choose-language .region[data-region=" + x + "]").addClass("active");
}


/***/ }),

/***/ "./src/setup/_scaleRoot2.js":
/*!**********************************!*\
  !*** ./src/setup/_scaleRoot2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var config = {
	widthTriggerScale: 9999,
	widthDesktopSafe: 1620,
	widthDesktop: 1920,
	widthMobile: 768,
	heightDesktop: 2376,
	heightMobile: 3132,
	func: {
		isMobile: function () {
			var device = {
				width: $(window).innerWidth(),
				height: $(window).innerHeight(),
			};

			return device.width <= config.widthMobile || device.width < device.height;
		},
	},
};

$.fn.scalePlatform = function (options) {
	var defaults = {
		obj: $(this),
		designSafe: {
			// if width of device smaller safe zone, then init scale.
			desktop: config.widthTriggerScale,
			mobile: config.widthTriggerScale,
		},
		designWidth: {
			desktop: config.widthDesktop,
			mobile: config.widthMobile,
		},
		designHeight: {
			desktop: config.heightDesktop,
			mobile: config.heightMobile,
		},
		mode: "", //scaleForWidth
		elScale: {
			desktop: ".scaleDesktop",
			mobile: ".scaleMobile",
		},
		dataScale: "data-scale-ratio",
		dataDevice: "data-device-type",
		dataDisplay: {
			desktop: "data-desktop-display",
			mobile: "data-mobile-display",
		},
		dataOrigin: {
			desktop: "data-desktop-origin",
			mobile: "data-mobile-origin",
		},
		rescaleForParent: true,
		deviceHeightStyleTag: {
			fix: "fixDeviceHeight",
			max: "maxDeviceHeight",
		},
		deviceHeightStyleVar: "--sr-device-height",
		deviceScaleRatioStyleVar: "--sr-scale-ratio",
	};
	var settings = $.extend(defaults, options);

	var setToDefault = (function () {
		$(settings.obj).attr("style", "");
		$(settings.obj).parent().attr("style", "");
		$(settings.elScale.desktop + " , " + settings.elScale.mobile).each(function () {
			$(this).attr("style", "");
		});
		$(settings.obj).parent().attr(settings.dataScale, 1);

		// console.log('set to default');
	})();

	var device = {
		width: $(window).outerWidth(),
		height: $(window).innerHeight(),
	};

	// console.log(device);

	var isMobile = (width = device.width, height = device.height) => width <= 700 || width < height;

	var scaleRatio = isMobile()
			? device.width / settings.designWidth.mobile
			: device.width / settings.designWidth.desktop,
		marginLeft = 0;

	if (settings.deviceHeightStyleTag != false && $("#deviceHeightStyleTag").length < 1) {
		var rescaledHeight = "calc(100vh * " + 1 / scaleRatio + ")";
		var styleTag = $(`
            <style id="deviceHeightStyleTag">
                .${settings.deviceHeightStyleTag.max} {
                    max-height: ${rescaledHeight}
                }
                .${settings.deviceHeightStyleTag.fix} {
                    height: ${rescaledHeight}
                }
            </style>
        `);
		$("html > head").append(styleTag);
	}

	if (settings.deviceHeightStyleVar != false && $("#deviceHeightStyleVar").length < 1) {
		var rescaledHeight = "calc(100vh * " + 1 / scaleRatio + ")";
		var styleTag = $(`
            <style id="deviceHeightStyleVar">
                :root {
                    ${settings.deviceHeightStyleVar}: ${rescaledHeight};
                    ${settings.deviceScaleRatioStyleVar}: ${scaleRatio}
                }
            </style>
        `);
		$("html > head").append(styleTag);
	}

	$(settings.elScale.desktop + " , " + settings.elScale.mobile).each(function () {
		var scaleOrigin = (isMobile = isMobile()) => {
			if (isMobile && $(this).attr(settings.dataOrigin.mobile) != undefined) {
				return $(this).attr(settings.dataOrigin.mobile);
			} else if ($(this).attr(settings.dataOrigin.desktop) != undefined) {
				return $(this).attr(settings.dataOrigin.desktop);
			}
			return "top left";
		};

		var display = (isMobile = isMobile()) => {
			// console.log(isMobile);
			if (isMobile && $(this).attr(settings.dataDisplay.mobile) != undefined) {
				return $(this).attr(settings.dataDisplay.mobile);
			} else if ($(this).attr(settings.dataDisplay.desktop) != undefined) {
				return $(this).attr(settings.dataDisplay.desktop);
			}
			return "block";
		};

		// $(this).css({
		//     transform: "scale(" + scaleRatio + ")",
		//     marginLeft: marginLeft + "px",
		//     transformOrigin: scaleOrigin
		// });

		if (
			(isMobile() && $(this).hasClass(settings.elScale.mobile.replace(".", ""))) ||
			(!isMobile() && $(this).hasClass(settings.elScale.desktop.replace(".", "")))
		) {
			$(this).css({
				transform: "scale(" + scaleRatio + ")",
				marginLeft: marginLeft + "px",
				transformOrigin: scaleOrigin,
				// display: display
			});
			if ($("#loading-screen")) {
				$("#loading-screen").remove();
			}
		}
	});

	if (settings.rescaleForParent) {
		var obj = {
			height: settings.obj.outerHeight(),
		};
		var scaleHeight = obj.height * scaleRatio;
		// console.log(scaleHeight, obj.height, scaleRatio);
		$(settings.obj)
			.parent()
			.css({
				height: scaleHeight + "px",
				// width: device.width+"px"
			});
	}

	$(settings.obj).parent().attr(settings.dataScale, scaleRatio);
	$(settings.obj)
		.parent()
		.attr(settings.dataDevice, isMobile() ? "mobile" : "desktop");
};


/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Barlow-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Barlow-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Barlow-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Barlow-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Barlow-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Barlow-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Bold.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Bold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/RobotoCondensed-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/RobotoCondensed-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/UTM-Facebook.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/UTM-Facebook.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/UTM-Facebook.ttf";

/***/ }),

/***/ "./src/assets/fonts/UTM-FacebookRKT.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/UTM-FacebookRKT.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/UTM-FacebookRKT.ttf";

/***/ }),

/***/ "./src/assets/fonts/cn_1.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/cn_1.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/cn_1.ttf";

/***/ }),

/***/ "./src/assets/fonts/cn_2.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/cn_2.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/cn_2.ttf";

/***/ }),

/***/ "./src/components/Float/assets/float_bg.png":
/*!**************************************************!*\
  !*** ./src/components/Float/assets/float_bg.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/float_bg.png";

/***/ }),

/***/ "./src/components/Frame1/assets/select_language_bg.png":
/*!*************************************************************!*\
  !*** ./src/components/Frame1/assets/select_language_bg.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/select_language_bg.png";

/***/ }),

/***/ "./src/components/HeaderMobile/assets/blue_button.png":
/*!************************************************************!*\
  !*** ./src/components/HeaderMobile/assets/blue_button.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/blue_button.png";

/***/ }),

/***/ "./src/components/HeaderMobile/assets/gray_button.png":
/*!************************************************************!*\
  !*** ./src/components/HeaderMobile/assets/gray_button.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gray_button.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_lazysizes_lazysizes_js-node_modules_a-d8989a"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0dBQWtHLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxV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O0FBQ0E7QUFDQSxFQUFFLENBQUM7QUFDSDtBQUNBO0FBQ0EsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxtQkFBbUIsQ0FBQztBQUNwQixXQUFXLENBQUM7QUFDWixLQUFLLFNBQVMsQ0FBQztBQUNmLFdBQVcsQ0FBQztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixDQUFDO0FBQ3BCLFdBQVcsQ0FBQztBQUNaLEtBQUssU0FBUyxDQUFDO0FBQ2YsV0FBVyxDQUFDO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esa0JBQWtCLENBQUM7QUFDbkIsbUJBQW1CLENBQUM7QUFDcEI7QUFDQSxHQUFHLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixPQUFPLENBQUM7QUFDUixJQUFJLENBQUM7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMsQ0FBQztBQUNGLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRmxvYXQvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GcmFtZTIvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zZXR1cC9nZW5lcmFsLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GbG9hdC9zdHlsZS5jc3M/NmFjNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS5jc3M/MzU5MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMS9zdHlsZS5jc3M/ZmVlMyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMi9zdHlsZS5jc3M/ZjQzZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlck1vYmlsZS9zdHlsZS5jc3M/MThkYyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zZXR1cC9nZW5lcmFsLmNzcz84OTAzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUxL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUyL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NldHVwL19sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zZXR1cC9fc2NhbGVSb290Mi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZmxvYXRfYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZmxvYXQtY29udGFpbmVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHR6LWluZGV4OiA1MDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZmxvYXQtYmcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0cG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuI2Zsb2F0LWJnIGEge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2Zsb2F0LWxpbmstY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0aGVpZ2h0OiA0NzBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdHRvcDogNDMwcHg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG5cdHdpZHRoOiAxNDBweDtcclxuXHRoZWlnaHQ6IDQwOHB4O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbiNyZWNoYXJnZSB7XHJcblx0bWFyZ2luLXRvcDogLTE1MHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRmxvYXQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixRQUFRO0NBQ1IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixXQUFXO0NBQ1gsVUFBVTtDQUNWLHlEQUE4QztDQUM5QyxZQUFZO0NBQ1osYUFBYTtDQUNiLDRCQUE0QjtDQUM1QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2Zsb2F0LWNvbnRhaW5lciB7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ei1pbmRleDogNTAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zsb2F0LWJnIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuXFx0ei1pbmRleDogMTAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNmbG9hdC1iZyBhIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMTQwcHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmbG9hdC1saW5rLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGhlaWdodDogNDcwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRyaWdodDogMjBweDtcXHJcXG5cXHR0b3A6IDQzMHB4O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvZmxvYXRfYmcucG5nXFxcIik7XFxyXFxuXFx0d2lkdGg6IDE0MHB4O1xcclxcblxcdGhlaWdodDogNDA4cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2hhcmdlIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtMTUwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDE5MjBweDtcclxuXHRoZWlnaHQ6IDIxNnB4O1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG9Db25kZW5zZWQtUmVndWxhcjtcclxufVxyXG5cclxuZm9vdGVyIGltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG5mb290ZXIgZGl2IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRnYXA6IDhweDtcclxuXHRib3R0b206IDI2cHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zbGF0ZTogLTUwJSAwO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXI7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgcDpudGgtY2hpbGQoMSkge1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG9Db25kZW5zZWQtQm9sZDtcclxufVxyXG5cclxuLyogcmVzcG9uc2l2ZSAqL1xyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdIGZvb3RlciBpbWcubW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdIGZvb3RlciB7XHJcblx0d2lkdGg6IDc2OHB4O1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gZm9vdGVyIGRpdiB7XHJcblx0d2lkdGg6IDUzMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGdhcDogNnB4O1xyXG5cdGJvdHRvbTogLTQ1cHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zbGF0ZTogLTUwJSAwO1xyXG59XHJcblxyXG5odG1sW2xhbmc9XCJ0aFwiXSBib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gZm9vdGVyIGRpdiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym90dG9tOiAtNDBweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGFBQWE7Q0FDYixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87QUFDUjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsUUFBUTtDQUNSLFlBQVk7Q0FDWixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsU0FBUztDQUNULGtCQUFrQjtDQUNsQixvQ0FBb0M7Q0FDcEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQSxlQUFlOztBQUVmO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsUUFBUTtDQUNSLGFBQWE7Q0FDYixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixlQUFlO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvb3RlciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHdpZHRoOiAxOTIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMTZweDtcXHJcXG5cXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBpbWcge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGRpdiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA4cHg7XFxyXFxuXFx0Ym90dG9tOiAyNnB4O1xcclxcblxcdGxlZnQ6IDUwJTtcXHJcXG5cXHR0cmFuc2xhdGU6IC01MCUgMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b0NvbmRlbnNlZC1SZWd1bGFyO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHA6bnRoLWNoaWxkKDEpIHtcXHJcXG5cXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLUJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qIHJlc3BvbnNpdmUgKi9cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdIGZvb3RlciBpbWcubW9iaWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSBmb290ZXIge1xcclxcblxcdHdpZHRoOiA3NjhweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSBmb290ZXIgZGl2IHtcXHJcXG5cXHR3aWR0aDogNTMwcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA2cHg7XFxyXFxuXFx0Ym90dG9tOiAtNDVweDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIDA7XFxyXFxufVxcclxcblxcclxcbmh0bWxbbGFuZz1cXFwidGhcXFwiXSBib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdIGZvb3RlciBkaXYge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvdHRvbTogLTQwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3NlbGVjdF9sYW5ndWFnZV9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNmcmFtZTEtY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTkyMHB4O1xyXG5cdGhlaWdodDogMTA4MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2ZyYW1lMS1jb250YWluZXIgdmlkZW8ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNoZWFkZXItcGMge1xyXG5cdHRvcDogMjBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxODIwcHg7XHJcbn1cclxuXHJcbiNoZWFkZXItcGMgPiBuYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxM3B4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbiNoZWFkZXItcGMgPiBuYXYgPiBkaXYge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuXHR3aWR0aDogMTY3cHg7XHJcblx0aGVpZ2h0OiAxODhweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IC01cHg7XHJcblx0dG9wOiA2NXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4jaGVhZGVyLXBjID4gbmF2IHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNoZWFkZXItcGMgPiBuYXYgdWwgbGkge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyLXBjIC5sYW5ndWFnZV9faXRlbSBhIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDE2NXB4O1xyXG5cdHBhZGRpbmc6IDZweCA4cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sYW5ndWFnZV9faXRlbTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzgwN2E3YTtcclxufVxyXG5cclxuI2hlYWRlci1wYyA+IG5hdiB1bCBhIHtcclxuXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBhZGRpbmctYmxvY2s6IDJweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaGVhZGVyLXBjID4gbmF2ID4gZGl2ID4gYVtkYXRhLXNlbGVjdGVkXSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNoZWFkZXItcGMgPiBuYXYgPiBkaXYgPiBhOmhvdmVyIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTIzcHg7XHJcblx0Ym90dG9tOiAyMDNweDtcclxufVxyXG5cclxuI2ZyYW1lMS1jdGEge1xyXG5cdHdpZHRoOiAzMzVweDtcclxuXHRoZWlnaHQ6IDg4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogOTZweDtcclxuXHRsZWZ0OiA3OTNweDtcclxuXHRmb250LXNpemU6IDI4Ljc1cHg7XHJcblx0Y29sb3I6IHJnYigxMTksIDc2LCAzNSk7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiByZXNwb25zaXZlICovXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUxLWNvbnRhaW5lciBpbWcubW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNmcmFtZTEtY29udGFpbmVyIHtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0aGVpZ2h0OiAxMzUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gaDEge1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAxODVweDtcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNmcmFtZTEtY3RhIHtcclxuXHRib3R0b206IDcxcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zbGF0ZTogLTUwJTtcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNtb2JpbGUtZXh0cmEtdG9wIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMjBweDtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsU0FBUztDQUNULGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5REFBd0Q7Q0FDeEQsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFNBQVM7Q0FDVCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsY0FBYztDQUNkLFdBQVc7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmcmFtZTEtY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMTkyMHB4O1xcclxcblxcdGhlaWdodDogMTA4MHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZyYW1lMS1jb250YWluZXIgdmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMge1xcclxcblxcdHRvcDogMjBweDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIDA7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAxODIwcHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMgPiBuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxM3B4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMgPiBuYXYgPiBkaXYge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvc2VsZWN0X2xhbmd1YWdlX2JnLnBuZ1xcXCIpO1xcclxcblxcdHdpZHRoOiAxNjdweDtcXHJcXG5cXHRoZWlnaHQ6IDE4OHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRyaWdodDogLTVweDtcXHJcXG5cXHR0b3A6IDY1cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMgPiBuYXYgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1wYyA+IG5hdiB1bCBsaSB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMgLmxhbmd1YWdlX19pdGVtIGEge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTY1cHg7XFxyXFxuXFx0cGFkZGluZzogNnB4IDhweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5sYW5ndWFnZV9faXRlbTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzgwN2E3YTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1wYyA+IG5hdiB1bCBhIHtcXHJcXG5cXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXI7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLXBjID4gbmF2ID4gZGl2ID4gYVtkYXRhLXNlbGVjdGVkXSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItcGMgPiBuYXYgPiBkaXYgPiBhOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogNTIzcHg7XFxyXFxuXFx0Ym90dG9tOiAyMDNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZyYW1lMS1jdGEge1xcclxcblxcdHdpZHRoOiAzMzVweDtcXHJcXG5cXHRoZWlnaHQ6IDg4cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogOTZweDtcXHJcXG5cXHRsZWZ0OiA3OTNweDtcXHJcXG5cXHRmb250LXNpemU6IDI4Ljc1cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigxMTksIDc2LCAzNSk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXNwb25zaXZlICovXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUxLWNvbnRhaW5lciBpbWcubW9iaWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUxLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDc2OHB4O1xcclxcblxcdGhlaWdodDogMTM1MHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSBoMSB7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRib3R0b206IDE4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdICNmcmFtZTEtY3RhIHtcXHJcXG5cXHRib3R0b206IDcxcHg7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRyYW5zbGF0ZTogLTUwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjbW9iaWxlLWV4dHJhLXRvcCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMTIwcHg7XFxyXFxuXFx0d2lkdGg6IDc2OHB4O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDEycHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2ZyYW1lMi1jb250YWluZXIge1xyXG5cdHdpZHRoOiAxOTIwcHg7XHJcblx0aGVpZ2h0OiAxMDgwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbiNmcmFtZTItY29udGFpbmVyIGgyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0d2lkdGg6IDEwODJweDtcclxuXHRoZWlnaHQ6IDE1N3B4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2ZyYW1lMi1zd2lwZXItY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTM5MHB4O1xyXG5cdGhlaWdodDogNjg3cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTcwcHg7XHJcblx0bGVmdDogMjY1cHg7XHJcbn1cclxuXHJcbiNzd2lwZXItYmcge1xyXG5cdHdpZHRoOiAxMjI5cHg7XHJcblx0aGVpZ2h0OiA3MjFweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMjBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcbn1cclxuXHJcbiNmcmFtZTItc3dpcGVyIHtcclxuXHR3aWR0aDogMTEyNXB4O1xyXG5cdGhlaWdodDogNjEycHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDQ5LjklO1xyXG5cdHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDkzJSwgOTclIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcblxyXG4jZm9sZCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxMDZweDtcclxuXHRib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNwYXBlcmNsaXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0yNXB4O1xyXG5cdGxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4jZnJhbWUyLWNvbnRhaW5lciA6aXMoLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCk6OmFmdGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jcmliYm9uLWJ1dHRvbi1jb250YWluZXIge1xyXG5cdGZvbnQtZmFtaWx5OiBVVE0tRmFjZWJvb2tSS1Q7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDE0MXB4O1xyXG59XHJcblxyXG4ucmliYm9uLWJ1dHRvbiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRwYWRkaW5nLWlubGluZTogMTRweDtcclxuXHR3aWR0aDogODNweDtcclxuXHRoZWlnaHQ6IDI1M3B4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMjIuMDJweDtcclxuXHRsaW5lLWhlaWdodDogMjRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAyMHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogcmdiKDEyMCwgNjksIDI0KTtcclxufVxyXG5cclxuLnJpYmJvbi1idXR0b24gaW1nOmxhc3QtY2hpbGQge1xyXG5cdC0tYW5pbWF0ZS1kdXJhdGlvbjogM3M7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJpYmJvbi1idXR0b25bYWN0aXZlXSBpbWc6bGFzdC1jaGlsZCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogNDVweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNmcmFtZTItY3RhIHtcclxuXHR3aWR0aDogMzM1cHg7XHJcblx0aGVpZ2h0OiA4OHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDQ1cHg7XHJcblx0bGVmdDogNzkzcHg7XHJcblx0Zm9udC1zaXplOiAyOC43NXB4O1xyXG5cdGNvbG9yOiByZ2IoMTE5LCA3NiwgMzUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2ZyYW1lMi1jb250YWluZXIgcCB7XHJcblx0Zm9udC1mYW1pbHk6IFVUTS1GYWNlYm9va1JLVDtcclxuXHR3aWR0aDogMTIwMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMTU1cHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2xhdGU6IC01MCUgMDtcclxuXHRmb250LXNpemU6IDIzLjQ5cHg7XHJcbn1cclxuXHJcbi8qIHJlc3BvbnNpdmUgKi9cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUyLWNvbnRhaW5lciBpbWcubW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNmcmFtZTItY29udGFpbmVyIHtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0aGVpZ2h0OiAxNDU3cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI2ZyYW1lMi1jb250YWluZXIgaDIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDM4cHg7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUyLXN3aXBlci1jb250YWluZXIge1xyXG5cdHdpZHRoOiA3NjhweDtcclxuXHRoZWlnaHQ6IDY5MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyMjRweDtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI3JpYmJvbi1idXR0b24tY29udGFpbmVyIHtcclxuXHR0b3A6IDY5MHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRyaWdodDogdW5zZXQ7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0Z2FwOiA3N3B4O1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI2ZyYW1lMi1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldiB7XHJcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAucmliYm9uLWJ1dHRvbiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRwYWRkaW5nLWlubGluZTogMTRweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDI2LjcycHg7XHJcblx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMjBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Y29sb3I6IHJnYigxMjAsIDY5LCAyNCk7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAucmliYm9uLWJ1dHRvblthY3RpdmVdIGltZzpsYXN0LWNoaWxkIHtcclxuXHRib3R0b206IDhweDtcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNmcmFtZTItc3dpcGVyIHtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0aGVpZ2h0OiA2MTNweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNDkuOSU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIC01MCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRjbGlwLXBhdGg6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUyLXN3aXBlciBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSAjZnJhbWUyLWNvbnRhaW5lciBwIHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gN3B4ICogMik7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDE2MHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0Zm9udC1zaXplOiAyNC4zcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI2ZyYW1lMi1jdGEge1xyXG5cdHdpZHRoOiAzMzVweDtcclxuXHRoZWlnaHQ6IDg4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogNDBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNsYXRlOiAtNTAlIDA7XHJcblx0Zm9udC1zaXplOiAyOC43NXB4O1xyXG5cdGNvbG9yOiByZ2IoMTE5LCA3NiwgMzUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbFtsYW5nPVwiZW5cIl0gYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCAqIDIpO1xyXG5cdGZvbnQtc2l6ZTogMjkuM3B4O1xyXG59XHJcblxyXG5odG1sW2xhbmc9XCJpZFwiXSBib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI2ZyYW1lMi1jb250YWluZXIgcCB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDE3OHB4ICogMik7XHJcblx0Zm9udC1zaXplOiAyOS4zcHg7XHJcbn1cclxuXHJcbmh0bWxbbGFuZz1cInRoXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xyXG5cdGJvdHRvbTogMTQ1cHg7XHJcblx0Zm9udC1zaXplOiA0M3B4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5odG1sW2xhbmc9XCJ0aFwiXSBib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI2ZyYW1lMi1jb250YWluZXIgcCB7XHJcblx0Ym90dG9tOiAxNzBweDtcclxuXHRmb250LXNpemU6IDUwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWxbbGFuZz1cImNuXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xyXG5cdGZvbnQtZmFtaWx5OiBjbi0yO1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxNjZweCAqIDIpO1xyXG5cdGZvbnQtc2l6ZTogMjYuM3B4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUyL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztDQUNULGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsYUFBYTtDQUNiLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLCtEQUErRDtBQUNoRTs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osU0FBUztDQUNULGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixTQUFTO0NBQ1QsU0FBUztDQUNULGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztDQUNULFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsU0FBUztBQUNWOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0FBQ1I7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsU0FBUztDQUNULFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZnJhbWUyLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDE5MjBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwODBweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLXRvcDogLTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZyYW1lMi1jb250YWluZXIgaDIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC0xMHB4O1xcclxcblxcdGxlZnQ6IDUwJTtcXHJcXG5cXHR0cmFuc2xhdGU6IC01MCUgMDtcXHJcXG5cXHR3aWR0aDogMTA4MnB4O1xcclxcblxcdGhlaWdodDogMTU3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZnJhbWUyLXN3aXBlci1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAxMzkwcHg7XFxyXFxuXFx0aGVpZ2h0OiA2ODdweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAxNzBweDtcXHJcXG5cXHRsZWZ0OiAyNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXBlci1iZyB7XFxyXFxuXFx0d2lkdGg6IDEyMjlweDtcXHJcXG5cXHRoZWlnaHQ6IDcyMXB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC0yMHB4O1xcclxcblxcdGxlZnQ6IDUwJTtcXHJcXG5cXHR0cmFuc2xhdGU6IC01MCUgMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZyYW1lMi1zd2lwZXIge1xcclxcblxcdHdpZHRoOiAxMTI1cHg7XFxyXFxuXFx0aGVpZ2h0OiA2MTJweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0bGVmdDogNDkuOSU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIC01MCU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgOTMlLCA5NyUgMTAwJSwgMCUgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbiNmb2xkIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0cmlnaHQ6IDEwNnB4O1xcclxcblxcdGJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcGVyY2xpcCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogLTI1cHg7XFxyXFxuXFx0bGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNmcmFtZTItY29udGFpbmVyIDppcyguc3dpcGVyLWJ1dHRvbi1wcmV2LCAuc3dpcGVyLWJ1dHRvbi1uZXh0KTo6YWZ0ZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyaWJib24tYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFVUTS1GYWNlYm9va1JLVDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRyaWdodDogMTQxcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWJib24tYnV0dG9uIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdHBhZGRpbmctaW5saW5lOiAxNHB4O1xcclxcblxcdHdpZHRoOiA4M3B4O1xcclxcblxcdGhlaWdodDogMjUzcHg7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAyMi4wMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGNvbG9yOiByZ2IoMTIwLCA2OSwgMjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmliYm9uLWJ1dHRvbiBpbWc6bGFzdC1jaGlsZCB7XFxyXFxuXFx0LS1hbmltYXRlLWR1cmF0aW9uOiAzcztcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmliYm9uLWJ1dHRvblthY3RpdmVdIGltZzpsYXN0LWNoaWxkIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiA0NXB4O1xcclxcblxcdGxlZnQ6IDUwJTtcXHJcXG5cXHR0cmFuc2xhdGU6IC01MCUgMDtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI2ZyYW1lMi1jdGEge1xcclxcblxcdHdpZHRoOiAzMzVweDtcXHJcXG5cXHRoZWlnaHQ6IDg4cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogNDVweDtcXHJcXG5cXHRsZWZ0OiA3OTNweDtcXHJcXG5cXHRmb250LXNpemU6IDI4Ljc1cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigxMTksIDc2LCAzNSk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZnJhbWUyLWNvbnRhaW5lciBwIHtcXHJcXG5cXHRmb250LWZhbWlseTogVVRNLUZhY2Vib29rUktUO1xcclxcblxcdHdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiAxNTVweDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRyYW5zbGF0ZTogLTUwJSAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjMuNDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVzcG9uc2l2ZSAqL1xcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1jb250YWluZXIgaW1nLm1vYmlsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA3NjhweDtcXHJcXG5cXHRoZWlnaHQ6IDE0NTdweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1jb250YWluZXIgaDIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDM4cHg7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1zd2lwZXItY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNzY4cHg7XFxyXFxuXFx0aGVpZ2h0OiA2OTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjI0cHg7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjcmliYm9uLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdHRvcDogNjkwcHg7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHJpZ2h0OiB1bnNldDtcXHJcXG5cXHR0cmFuc2xhdGU6IC01MCUgMDtcXHJcXG5cXHRnYXA6IDc3cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2ZyYW1lMi1jb250YWluZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdIC5yaWJib24tYnV0dG9uIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdHBhZGRpbmctaW5saW5lOiAxNHB4O1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGZvbnQtc2l6ZTogMjYuNzJweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjhweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRjb2xvcjogcmdiKDEyMCwgNjksIDI0KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAucmliYm9uLWJ1dHRvblthY3RpdmVdIGltZzpsYXN0LWNoaWxkIHtcXHJcXG5cXHRib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUyLXN3aXBlciB7XFxyXFxuXFx0d2lkdGg6IDc2OHB4O1xcclxcblxcdGhlaWdodDogNjEzcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdGxlZnQ6IDQ5LjklO1xcclxcblxcdHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Y2xpcC1wYXRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdICNmcmFtZTItc3dpcGVyIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUyLWNvbnRhaW5lciBwIHtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gN3B4ICogMik7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDE2MHB4O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyNC4zcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdICNmcmFtZTItY3RhIHtcXHJcXG5cXHR3aWR0aDogMzM1cHg7XFxyXFxuXFx0aGVpZ2h0OiA4OHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDQwcHg7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRyYW5zbGF0ZTogLTUwJSAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjguNzVweDtcXHJcXG5cXHRjb2xvcjogcmdiKDExOSwgNzYsIDM1KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmh0bWxbbGFuZz1cXFwiZW5cXFwiXSBib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCAqIDIpO1xcclxcblxcdGZvbnQtc2l6ZTogMjkuM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2xhbmc9XFxcImlkXFxcIl0gYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUyLWNvbnRhaW5lciBwIHtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMTc4cHggKiAyKTtcXHJcXG5cXHRmb250LXNpemU6IDI5LjNweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtsYW5nPVxcXCJ0aFxcXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xcclxcblxcdGJvdHRvbTogMTQ1cHg7XFxyXFxuXFx0Zm9udC1zaXplOiA0M3B4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2xhbmc9XFxcInRoXFxcIl0gYm9keVtkYXRhLWRldmljZS10eXBlPVxcXCJtb2JpbGVcXFwiXSAjZnJhbWUyLWNvbnRhaW5lciBwIHtcXHJcXG5cXHRib3R0b206IDE3MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNTBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtsYW5nPVxcXCJjblxcXCJdICNmcmFtZTItY29udGFpbmVyIHAge1xcclxcblxcdGZvbnQtZmFtaWx5OiBjbi0yO1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAxNjZweCAqIDIpO1xcclxcblxcdGZvbnQtc2l6ZTogMjYuM3B4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JsdWVfYnV0dG9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2dyYXlfYnV0dG9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNoZWFkZXItbW9iaWxlIHtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMjUsIDQ0LCAwLjUpO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiAyMDtcclxufVxyXG5cclxuI2hlYWRlci1iZyB7XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAyNSwgNDQsIDAuNSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG59XHJcblxyXG4jZmF2aWNvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDIwcHg7XHJcblx0dG9wOiA5cHg7XHJcblx0ei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4jb3Blbi1tZW51LWJ1dHRvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAyNXB4O1xyXG5cdHRvcDogMzBweDtcclxufVxyXG5cclxuI21pZC1idXR0b24tY29udGFpbmVyIHtcclxuXHRmb250LWZhbWlseTogdXRtLWZiO1xyXG5cdGNvbG9yOiByZ2IoMjUzLCAyNDcsIDIzNCk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA4MnB4O1xyXG5cdHRvcDogMTlweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogNXB4O1xyXG59XHJcbiNtaWQtYnV0dG9uLWNvbnRhaW5lciBhIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuXHR3aWR0aDogMjExcHg7XHJcblx0aGVpZ2h0OiA1N3B4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2hpZGRlbi1tZW51LWNvbnRhaW5lciB7XHJcblx0Zm9udC1mYW1pbHk6IGJhcmxvdy1tZWRpdW07XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdGhlaWdodDogNzA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDkwcHg7XHJcblx0ei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNoaWRkZW4tbWVudS1jb250YWluZXIgbmF2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAzOHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNDVweDtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zbGF0ZTogLTUwJSAwO1xyXG59XHJcblxyXG4jaGlkZGVuLW1lbnUtY29udGFpbmVyIG5hdiA6aXMoYSwgYnV0dG9uKSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoaWRkZW4tbWVudS1jb250YWluZXIgbmF2IGE6bGFzdC1jaGlsZCB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI2hlYWRlci1tb2JpbGUgLmxhbmctYnV0dG9uLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0Z2FwOiAyMnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDYwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zbGF0ZTogLTUwJSAwO1xyXG59XHJcblxyXG4jaGVhZGVyLW1vYmlsZSAubGFuZy1idXR0b24tY29udGFpbmVyIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDIycHg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiA3NjhweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2hlYWRlci1tb2JpbGUgLmxhbmctYnV0dG9uLWNvbnRhaW5lciBhIHtcclxuXHRmb250LWZhbWlseTogYmFybG93LW1lZGl1bTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcblx0d2lkdGg6IDE5OHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogcmVzcG9uc2l2ZSAqL1xyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICNoZWFkZXItbW9iaWxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0hlYWRlck1vYmlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxZQUFZO0NBQ1osdUNBQXVDO0NBQ3ZDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLE1BQU07QUFDUDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztBQUNWOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLHlEQUFpRDtDQUNqRCxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0NBQW9DO0NBQ3BDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsWUFBWTtDQUNaLFNBQVM7Q0FDVCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osU0FBUztDQUNULGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osU0FBUztDQUNULGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsYUFBYTtDQUNiLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsWUFBWTtDQUNaLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0NBQ2QseURBQWlEO0NBQ2pELFlBQVk7Q0FDWixZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQSxlQUFlOztBQUVmO0NBQ0MsY0FBYztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXItbW9iaWxlIHtcXHJcXG5cXHR3aWR0aDogNzY4cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMjUsIDQ0LCAwLjUpO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1iZyB7XFxyXFxuXFx0d2lkdGg6IDc2OHB4O1xcclxcblxcdGhlaWdodDogOTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAyNSwgNDQsIDAuNSk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZmF2aWNvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDIwcHg7XFxyXFxuXFx0dG9wOiA5cHg7XFxyXFxuXFx0ei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jb3Blbi1tZW51LWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHJpZ2h0OiAyNXB4O1xcclxcblxcdHRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21pZC1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRmb250LWZhbWlseTogdXRtLWZiO1xcclxcblxcdGNvbG9yOiByZ2IoMjUzLCAyNDcsIDIzNCk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHJpZ2h0OiA4MnB4O1xcclxcblxcdHRvcDogMTlweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogNXB4O1xcclxcbn1cXHJcXG4jbWlkLWJ1dHRvbi1jb250YWluZXIgYSB7XFxyXFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2JsdWVfYnV0dG9uLnBuZ1xcXCIpO1xcclxcblxcdHdpZHRoOiAyMTFweDtcXHJcXG5cXHRoZWlnaHQ6IDU3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlkZGVuLW1lbnUtY29udGFpbmVyIHtcXHJcXG5cXHRmb250LWZhbWlseTogYmFybG93LW1lZGl1bTtcXHJcXG5cXHR3aWR0aDogNzY4cHg7XFxyXFxuXFx0aGVpZ2h0OiA3MDZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogOTBweDtcXHJcXG5cXHR6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZGRlbi1tZW51LWNvbnRhaW5lciBuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDM4cHg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA0NXB4O1xcclxcblxcdHdpZHRoOiAyMDBweDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIDA7XFxyXFxufVxcclxcblxcclxcbiNoaWRkZW4tbWVudS1jb250YWluZXIgbmF2IDppcyhhLCBidXR0b24pIHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZGRlbi1tZW51LWNvbnRhaW5lciBuYXYgYTpsYXN0LWNoaWxkIHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLW1vYmlsZSAubGFuZy1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA3NjhweDtcXHJcXG5cXHRnYXA6IDIycHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogNjBweDtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNsYXRlOiAtNTAlIDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItbW9iaWxlIC5sYW5nLWJ1dHRvbi1jb250YWluZXIgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMjJweDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0d2lkdGg6IDc2OHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLW1vYmlsZSAubGFuZy1idXR0b24tY29udGFpbmVyIGEge1xcclxcblxcdGZvbnQtZmFtaWx5OiBiYXJsb3ctbWVkaXVtO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvZ3JheV9idXR0b24ucG5nXFxcIik7XFxyXFxuXFx0d2lkdGg6IDE5OHB4O1xcclxcblxcdGhlaWdodDogNDRweDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVzcG9uc2l2ZSAqL1xcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gI2hlYWRlci1tb2JpbGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG9Db25kZW5zZWQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1VUTS1GYWNlYm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQmFybG93LUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9CYXJsb3ctQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQmFybG93LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvVVRNLUZhY2Vib29rUktULnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9jbl8xLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9jbl8yLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAjZmRmZGZkO1xyXG5cdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jb3V0ZXItcm9vdCB7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNyb290IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpob3ZlcixcclxuYnV0dG9uOmhvdmVyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG9Db25kZW5zZWQtQm9sZDtcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IFJvYm90b0NvbmRlbnNlZC1SZWd1bGFyO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogdXRtLWZiO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogYmFybG93LWxpZ2h0O1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogYmFybG93LWJvbGQ7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBiYXJsb3ctbWVkaXVtO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBVVE0tRmFjZWJvb2tSS1Q7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBjbi0xO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogY24tMjtcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NldHVwL2dlbmVyYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyw0Q0FBb0Q7QUFDckQ7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsNENBQXVEO0FBQ3hEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsNENBQTJDO0FBQzVDOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDRDQUE2QztBQUM5QztBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLDRDQUErQztBQUNoRDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiw0Q0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNENBQW9DO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQ6ICNmZGZkZmQ7XFxyXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNvdXRlci1yb290IHtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3Qge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyLFxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogUm9ib3RvQ29uZGVuc2VkLUJvbGQ7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG9Db25kZW5zZWQtQm9sZC50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90b0NvbmRlbnNlZC1SZWd1bGFyO1xcclxcblxcdHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvUm9ib3RvQ29uZGVuc2VkLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiB1dG0tZmI7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9VVE0tRmFjZWJvb2sudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBiYXJsb3ctbGlnaHQ7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9CYXJsb3ctTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBiYXJsb3ctYm9sZDtcXHJcXG5cXHRzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0Jhcmxvdy1Cb2xkLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogYmFybG93LW1lZGl1bTtcXHJcXG5cXHRzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0Jhcmxvdy1NZWRpdW0udHRmXFxcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBVVE0tRmFjZWJvb2tSS1Q7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9VVE0tRmFjZWJvb2tSS1QudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBjbi0xO1xcclxcblxcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvY25fMS50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGNuLTI7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9jbl8yLnR0ZicpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNyb290IHtcclxuXHR6LWluZGV4OiAwO1xyXG5cdHdpZHRoOiAxOTIwcHg7XHJcblx0aGVpZ2h0OiAyMzc2cHg7XHJcbn1cclxuXHJcbioubW9iaWxlIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0gI3Jvb3Qge1xyXG5cdHdpZHRoOiA3NjhweDtcclxuXHRoZWlnaHQ6IDMxMzJweDtcclxufVxyXG5cclxuYm9keVtkYXRhLWRldmljZS10eXBlPVwibW9iaWxlXCJdICoucGMge1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNyb290IHtcXHJcXG5cXHR6LWluZGV4OiAwO1xcclxcblxcdHdpZHRoOiAxOTIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMzc2cHg7XFxyXFxufVxcclxcblxcclxcbioubW9iaWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5W2RhdGEtZGV2aWNlLXR5cGU9XFxcIm1vYmlsZVxcXCJdICNyb290IHtcXHJcXG5cXHR3aWR0aDogNzY4cHg7XFxyXFxuXFx0aGVpZ2h0OiAzMTMycHg7XFxyXFxufVxcclxcblxcclxcbmJvZHlbZGF0YS1kZXZpY2UtdHlwZT1cXFwibW9iaWxlXFxcIl0gKi5wYyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYmctaW1nIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2VuZXJhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuRnJhbWUxKCkge1xyXG5cdGNvbnN0IGxhbmd1YWdlQnV0dG9uID0gJChcIiNoZWFkZXItcGMgbmF2IGJ1dHRvblwiKTtcclxuXHRjb25zdCBsYW5ndWFnZUNvbnRhaW5lciA9ICQoXCIjaGVhZGVyLXBjIG5hdiA+IGRpdlwiKTtcclxuXHRsZXQgaXNPcGVuTGFuZ3VhZ2UgPSBsYW5ndWFnZUNvbnRhaW5lci5hdHRyKFwiZGF0YS1vcGVuLWluaXRpYWxcIikgPT09IFwidHJ1ZVwiO1xyXG5cdGlmICghaXNPcGVuTGFuZ3VhZ2UpIGxhbmd1YWdlQ29udGFpbmVyLmhpZGUoKTtcclxuXHJcblx0bGFuZ3VhZ2VCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpc09wZW5MYW5ndWFnZSA9ICFpc09wZW5MYW5ndWFnZTtcclxuXHRcdGlmIChpc09wZW5MYW5ndWFnZSkge1xyXG5cdFx0XHRsYW5ndWFnZUNvbnRhaW5lci5zbGlkZURvd24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxhbmd1YWdlQ29udGFpbmVyLnNsaWRlVXAoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gbGFuZ3VhZ2UgbGluayBjbGlja2VkXHJcblx0Y29uc3QgbGFuZ3VhZ2VMaW5rcyA9IGxhbmd1YWdlQ29udGFpbmVyLmZpbmQoXCJhXCIpO1xyXG5cdGxldCBsYW5ndWFnZVNlbGVjdGVkID0gcGFyc2VJbnQobGFuZ3VhZ2VDb250YWluZXIuYXR0cihcImRhdGEtbGFuZy1zZWxlY3RlZFwiKSk7XHJcblx0bGFuZ3VhZ2VMaW5rcy5lcShsYW5ndWFnZVNlbGVjdGVkKS5jc3Moe1xyXG5cdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXHJcblx0fSk7XHJcblxyXG5cdGxhbmd1YWdlTGlua3MuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdCQoZWxlbWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0aWYgKGluZGV4ID09PSBsYW5ndWFnZVNlbGVjdGVkKSByZXR1cm47XHJcblx0XHRcdGxhbmd1YWdlTGlua3MuZXEobGFuZ3VhZ2VTZWxlY3RlZCkuY3NzKHtcclxuXHRcdFx0XHRmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGFuZ3VhZ2VTZWxlY3RlZCA9IGluZGV4O1xyXG5cdFx0XHRsYW5ndWFnZUxpbmtzLmVxKGxhbmd1YWdlU2VsZWN0ZWQpLmNzcyh7XHJcblx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpc09wZW5MYW5ndWFnZSA9IGZhbHNlO1xyXG5cdFx0XHRsYW5ndWFnZUNvbnRhaW5lci5zbGlkZVVwKCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bkZyYW1lMigpIHtcclxuXHRjb25zdCByaWJib25CdXR0b25zID0gJChcIi5yaWJib24tYnV0dG9uXCIpO1xyXG5cdHJpYmJvbkJ1dHRvbnMuZXEoMCkuYXR0cihcImFjdGl2ZVwiLCBcIlwiKTtcclxuXHJcblx0bGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcblx0Y29uc3QgZnJhbWUyU3dpcGVyID0gbmV3IFN3aXBlcihcIiNmcmFtZTItc3dpcGVyXCIsIHtcclxuXHRcdGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdHByZXZFbDogXCIjZnJhbWUyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcblx0XHRcdG5leHRFbDogXCIjZnJhbWUyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcblx0XHR9LFxyXG5cdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0ZGVsYXk6IDQwMDAsXHJcblx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRvbjoge1xyXG5cdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChzd2lwZXIpIHtcclxuXHRcdFx0XHRyaWJib25CdXR0b25zLmVxKGN1cnJlbnRTbGlkZSkucmVtb3ZlQXR0cihcImFjdGl2ZVwiKTtcclxuXHRcdFx0XHRyaWJib25CdXR0b25zLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYXR0cihcImFjdGl2ZVwiLCBcIlwiKTtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGUgPSBzd2lwZXIuYWN0aXZlSW5kZXg7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRyaWJib25CdXR0b25zLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHQkKGVsZW1lbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdHJpYmJvbkJ1dHRvbnMuZXEoY3VycmVudFNsaWRlKS5yZW1vdmVBdHRyKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRmcmFtZTJTd2lwZXIuc2xpZGVUbyhpbmRleCk7XHJcblx0XHRcdHJpYmJvbkJ1dHRvbnMuZXEoaW5kZXgpLmF0dHIoXCJhY3RpdmVcIiwgXCJcIik7XHJcblx0XHRcdGN1cnJlbnRTbGlkZSA9IGluZGV4O1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuSGVhZGVyTW9iaWxlKCkge1xyXG5cdGxldCBpc09wZW5pbmcgPSBmYWxzZTtcclxuXHRjb25zdCBoaWRkZW5NZW51ID0gJChcIiNoaWRkZW4tbWVudS1jb250YWluZXJcIik7XHJcblx0Y29uc3Qgb3Blbk1lbnVCdXR0b24gPSAkKFwiI29wZW4tbWVudS1idXR0b25cIik7XHJcblx0Y29uc3QgaW1ncyA9IG9wZW5NZW51QnV0dG9uLmZpbmQoXCJpbWdcIik7XHJcblx0b3Blbk1lbnVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpc09wZW5pbmcgPSAhaXNPcGVuaW5nO1xyXG5cdFx0aWYgKGlzT3BlbmluZykge1xyXG5cdFx0XHRpbWdzLmVxKDEpLnNob3coKTtcclxuXHRcdFx0aW1ncy5lcSgwKS5oaWRlKCk7XHJcblx0XHRcdGhpZGRlbk1lbnUuc2xpZGVEb3duKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpbWdzLmVxKDApLnNob3coKTtcclxuXHRcdFx0aW1ncy5lcSgxKS5oaWRlKCk7XHJcblx0XHRcdGhpZGRlbk1lbnUuc2xpZGVVcCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoaWRkZW5NZW51T3B0aW9ucyA9ICQoXCIjaGlkZGVuLW1lbnUtY29udGFpbmVyIGFcIik7XHJcblx0aGlkZGVuTWVudU9wdGlvbnMub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdGlzT3BlbmluZyA9IGZhbHNlO1xyXG5cdFx0aW1ncy5lcSgwKS5zaG93KCk7XHJcblx0XHRpbWdzLmVxKDEpLmhpZGUoKTtcclxuXHRcdGhpZGRlbk1lbnUuc2xpZGVVcCgpO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JvbGxUb1RvcEJ1dHRvbiA9ICQoXCIjaGlkZGVuLW1lbnUtY29udGFpbmVyIG5hdiBidXR0b25cIik7XHJcblx0c2Nyb2xsVG9Ub3BCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBcIi4vc2V0dXAvZ2VuZXJhbC5jc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9GcmFtZTEvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9GcmFtZTIvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9Gb290ZXIvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9GbG9hdC9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBydW5GcmFtZTEgZnJvbSBcIi4vY29tcG9uZW50cy9GcmFtZTFcIjtcclxuaW1wb3J0IHJ1bkZyYW1lMiBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lMlwiO1xyXG5pbXBvcnQgcnVuSGVhZGVyTW9iaWxlIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlXCI7XHJcblxyXG5pbXBvcnQgXCIuL3NldHVwL19sYW5ndWFnZVwiO1xyXG5pbXBvcnQgXCIuL3NldHVwL19zY2FsZVJvb3QyXCI7XHJcbmltcG9ydCBcImFuaW1hdGUuY3NzXCI7XHJcbmltcG9ydCBcImxhenlzaXplc1wiO1xyXG5cclxuaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH0gZnJvbSBcInN3aXBlci9tb2R1bGVzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvYXV0b3BsYXlcIjtcclxuXHJcblN3aXBlci51c2UoW05hdmlnYXRpb24sIEF1dG9wbGF5XSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdCQoXCIjcm9vdFwiKS5zY2FsZVBsYXRmb3JtKCk7XHJcblx0JCh3aW5kb3cpLm9uKFwicmVzaXplXCIsICgpID0+IHtcclxuXHRcdCQoXCIjcm9vdFwiKS5zY2FsZVBsYXRmb3JtKCk7XHJcblx0fSk7XHJcblx0JChcIiNyb290XCIpLnNjYWxlUGxhdGZvcm0oKTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHRydW5GcmFtZTEoKTtcclxuXHRydW5GcmFtZTIoKTtcclxuXHRydW5IZWFkZXJNb2JpbGUoKTtcclxufSk7XHJcblxyXG4vLyBvbGQgc2NhbGVyb290XHJcbi8vIC8vIHNjYWxlIHJvb3RcclxuLy8gY29uc3Qgb3V0ZXJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRlci1yb290XCIpO1xyXG4vLyBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4vLyByb290LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwidG9wIGxlZnRcIjtcclxuXHJcbi8vIGxldCBtb2RlLCB3aWR0aCwgaGVpZ2h0LCByYXRpbztcclxuXHJcbi8vIC8vIGN1c3RvbVxyXG4vLyBjb25zdCBmbG9hdENvbnRhaW5lciA9ICQoXCIjZmxvYXQtY29udGFpbmVyXCIpLmdldCgwKTtcclxuLy8gZmxvYXRDb250YWluZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJ0b3AgbGVmdFwiO1xyXG5cclxuLy8gY29uc3QgaGVhZGVyTW9iaWxlID0gJChcIiNoZWFkZXItbW9iaWxlXCIpLmdldCgwKTtcclxuLy8gaGVhZGVyTW9iaWxlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwidG9wIGxlZnRcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIHNjYWxlUm9vdCgpIHtcclxuLy8gXHQvLyBjaGVjayBvbiBldmVyeSB0cmlnZ2VyXHJcbi8vIFx0bW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCA/IFwibW9iaWxlXCIgOiBcInBjXCI7XHJcbi8vIFx0d2lkdGggPSByb290Lm9mZnNldFdpZHRoO1xyXG4vLyBcdGhlaWdodCA9IHJvb3Qub2Zmc2V0SGVpZ2h0O1xyXG4vLyBcdHJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG4vLyBcdGNvbnN0IGRlc2lyZWRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4vLyBcdGNvbnN0IGRlc2lyZWRIZWlnaHQgPSBkZXNpcmVkV2lkdGggLyByYXRpbztcclxuXHJcbi8vIFx0Y29uc3QgcmF0aW9XID0gZGVzaXJlZFdpZHRoIC8gd2lkdGg7XHJcbi8vIFx0Y29uc3QgcmF0aW9IID0gZGVzaXJlZEhlaWdodCAvIGhlaWdodDtcclxuXHJcbi8vIFx0b3V0ZXJSb290LnN0eWxlLndpZHRoID0gYCR7ZGVzaXJlZFdpZHRofXB4YDtcclxuLy8gXHRvdXRlclJvb3Quc3R5bGUuaGVpZ2h0ID0gYCR7ZGVzaXJlZEhlaWdodH1weGA7XHJcblxyXG4vLyBcdHJvb3Quc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cmF0aW9XfSwgJHtyYXRpb0h9KWA7XHJcbi8vIFx0ZmxvYXRDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cmF0aW9XfSwgJHtyYXRpb0h9KWA7XHJcbi8vIFx0aGVhZGVyTW9iaWxlLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3JhdGlvV30sICR7cmF0aW9IfSlgO1xyXG4vLyB9XHJcblxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2NhbGVSb290KTtcclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2NhbGVSb290KTtcclxuIiwidmFyIHdlbGNvbWUgPSAkKFwiI2lucHV0LXJlZ2lvblwiKS52YWwoKTtcclxudmFyIGxhbmd1YWdlID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoLyg/Oig/Ol58Lio7XFxzKilsYW5ndWFnZVxccypcXD1cXHMqKFteO10qKS4qJCl8Xi4qJC8sIFwiJDFcIik7XHJcbnZhciBkID0gbmV3IERhdGUoKTtcclxuZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxudmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIgKyBkLnRvVVRDU3RyaW5nKCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQkKFwiLmNob29zZS1sYW5ndWFnZSAucmVnaW9uXCIpLnJlbW92ZUNsYXNzKFwibGFuZ3VhZ2VzX19jdXJyZW50XCIpO1xyXG5cdGlmIChsYW5ndWFnZS5sZW5ndGggPT0gMCkge1xyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gXCJsYW5ndWFnZT1cIiArIHdlbGNvbWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0XHQkKFwiLmNob29zZS1sYW5ndWFnZSAucmVnaW9uW2RhdGEtcmVnaW9uPVwiICsgd2VsY29tZSArIFwiXVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdHJlbmV3Q2hvb3NlTGFuZ3VhZ2UoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVuZXdDaG9vc2VMYW5ndWFnZSgpO1xyXG5cdH1cclxuXHQkKFwiLmRyb3Bkb3duLWNvbnRlbnQgLnJlZ2lvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR3ZWxjb21lID0gJCh0aGlzKS5kYXRhKFwicmVnaW9uXCIpO1xyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gXCJsYW5ndWFnZT1cIiArIHdlbGNvbWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoXCJsYW5ndWFnZXNfX2N1cnJlbnRcIikpIHtcclxuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiL3RpbmhreXR1eWV0Y2FuaFwiO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vICQoJy5kcm9wZG93bi1jb250ZW50IC5sYW5ndWFnZV9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0Ly8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHQvLyAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHQvLyAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdC8vICAgICAgICAgJCgnLmxhbmd1YWdlX19pdGVtJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0Ly8gICAgIH1cclxuXHQvLyB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZW5ld0Nob29zZUxhbmd1YWdlKCkge1xyXG5cdHZhciB4ID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoLyg/Oig/Ol58Lio7XFxzKilsYW5ndWFnZVxccypcXD1cXHMqKFteO10qKS4qJCl8Xi4qJC8sIFwiJDFcIik7XHJcblx0dmFyIGNob3Nlbk5hdGlvblRleHQgPSAkKFwiLmNob29zZS1sYW5ndWFnZSAucmVnaW9uW2RhdGEtcmVnaW9uPVwiICsgeCArIFwiXVwiKVxyXG5cdFx0LmVxKDApXHJcblx0XHQudGV4dCgpO1xyXG5cdHZhciBjaG9zZW5MYW5nID0geDtcclxuXHQkKFwiLmN1cnJlbnRcIikuaHRtbChjaG9zZW5OYXRpb25UZXh0KTtcclxuXHQkKFwiLmN1cnJlbnRJbnB1dFwiKS5hdHRyKFwiZGF0YS1yZWdpb25cIiwgY2hvc2VuTGFuZyk7XHJcblx0JChcIi5jaG9vc2UtbGFuZ3VhZ2UgLnJlZ2lvbltkYXRhLXJlZ2lvbj1cIiArIHggKyBcIl1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn1cclxuIiwidmFyIGNvbmZpZyA9IHtcclxuXHR3aWR0aFRyaWdnZXJTY2FsZTogOTk5OSxcclxuXHR3aWR0aERlc2t0b3BTYWZlOiAxNjIwLFxyXG5cdHdpZHRoRGVza3RvcDogMTkyMCxcclxuXHR3aWR0aE1vYmlsZTogNzY4LFxyXG5cdGhlaWdodERlc2t0b3A6IDIzNzYsXHJcblx0aGVpZ2h0TW9iaWxlOiAzMTMyLFxyXG5cdGZ1bmM6IHtcclxuXHRcdGlzTW9iaWxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBkZXZpY2UgPSB7XHJcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS5pbm5lcldpZHRoKCksXHJcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiBkZXZpY2Uud2lkdGggPD0gY29uZmlnLndpZHRoTW9iaWxlIHx8IGRldmljZS53aWR0aCA8IGRldmljZS5oZWlnaHQ7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG4kLmZuLnNjYWxlUGxhdGZvcm0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdG9iajogJCh0aGlzKSxcclxuXHRcdGRlc2lnblNhZmU6IHtcclxuXHRcdFx0Ly8gaWYgd2lkdGggb2YgZGV2aWNlIHNtYWxsZXIgc2FmZSB6b25lLCB0aGVuIGluaXQgc2NhbGUuXHJcblx0XHRcdGRlc2t0b3A6IGNvbmZpZy53aWR0aFRyaWdnZXJTY2FsZSxcclxuXHRcdFx0bW9iaWxlOiBjb25maWcud2lkdGhUcmlnZ2VyU2NhbGUsXHJcblx0XHR9LFxyXG5cdFx0ZGVzaWduV2lkdGg6IHtcclxuXHRcdFx0ZGVza3RvcDogY29uZmlnLndpZHRoRGVza3RvcCxcclxuXHRcdFx0bW9iaWxlOiBjb25maWcud2lkdGhNb2JpbGUsXHJcblx0XHR9LFxyXG5cdFx0ZGVzaWduSGVpZ2h0OiB7XHJcblx0XHRcdGRlc2t0b3A6IGNvbmZpZy5oZWlnaHREZXNrdG9wLFxyXG5cdFx0XHRtb2JpbGU6IGNvbmZpZy5oZWlnaHRNb2JpbGUsXHJcblx0XHR9LFxyXG5cdFx0bW9kZTogXCJcIiwgLy9zY2FsZUZvcldpZHRoXHJcblx0XHRlbFNjYWxlOiB7XHJcblx0XHRcdGRlc2t0b3A6IFwiLnNjYWxlRGVza3RvcFwiLFxyXG5cdFx0XHRtb2JpbGU6IFwiLnNjYWxlTW9iaWxlXCIsXHJcblx0XHR9LFxyXG5cdFx0ZGF0YVNjYWxlOiBcImRhdGEtc2NhbGUtcmF0aW9cIixcclxuXHRcdGRhdGFEZXZpY2U6IFwiZGF0YS1kZXZpY2UtdHlwZVwiLFxyXG5cdFx0ZGF0YURpc3BsYXk6IHtcclxuXHRcdFx0ZGVza3RvcDogXCJkYXRhLWRlc2t0b3AtZGlzcGxheVwiLFxyXG5cdFx0XHRtb2JpbGU6IFwiZGF0YS1tb2JpbGUtZGlzcGxheVwiLFxyXG5cdFx0fSxcclxuXHRcdGRhdGFPcmlnaW46IHtcclxuXHRcdFx0ZGVza3RvcDogXCJkYXRhLWRlc2t0b3Atb3JpZ2luXCIsXHJcblx0XHRcdG1vYmlsZTogXCJkYXRhLW1vYmlsZS1vcmlnaW5cIixcclxuXHRcdH0sXHJcblx0XHRyZXNjYWxlRm9yUGFyZW50OiB0cnVlLFxyXG5cdFx0ZGV2aWNlSGVpZ2h0U3R5bGVUYWc6IHtcclxuXHRcdFx0Zml4OiBcImZpeERldmljZUhlaWdodFwiLFxyXG5cdFx0XHRtYXg6IFwibWF4RGV2aWNlSGVpZ2h0XCIsXHJcblx0XHR9LFxyXG5cdFx0ZGV2aWNlSGVpZ2h0U3R5bGVWYXI6IFwiLS1zci1kZXZpY2UtaGVpZ2h0XCIsXHJcblx0XHRkZXZpY2VTY2FsZVJhdGlvU3R5bGVWYXI6IFwiLS1zci1zY2FsZS1yYXRpb1wiLFxyXG5cdH07XHJcblx0dmFyIHNldHRpbmdzID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuXHR2YXIgc2V0VG9EZWZhdWx0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoc2V0dGluZ3Mub2JqKS5hdHRyKFwic3R5bGVcIiwgXCJcIik7XHJcblx0XHQkKHNldHRpbmdzLm9iaikucGFyZW50KCkuYXR0cihcInN0eWxlXCIsIFwiXCIpO1xyXG5cdFx0JChzZXR0aW5ncy5lbFNjYWxlLmRlc2t0b3AgKyBcIiAsIFwiICsgc2V0dGluZ3MuZWxTY2FsZS5tb2JpbGUpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBcIlwiKTtcclxuXHRcdH0pO1xyXG5cdFx0JChzZXR0aW5ncy5vYmopLnBhcmVudCgpLmF0dHIoc2V0dGluZ3MuZGF0YVNjYWxlLCAxKTtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZygnc2V0IHRvIGRlZmF1bHQnKTtcclxuXHR9KSgpO1xyXG5cclxuXHR2YXIgZGV2aWNlID0ge1xyXG5cdFx0d2lkdGg6ICQod2luZG93KS5vdXRlcldpZHRoKCksXHJcblx0XHRoZWlnaHQ6ICQod2luZG93KS5pbm5lckhlaWdodCgpLFxyXG5cdH07XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKGRldmljZSk7XHJcblxyXG5cdHZhciBpc01vYmlsZSA9ICh3aWR0aCA9IGRldmljZS53aWR0aCwgaGVpZ2h0ID0gZGV2aWNlLmhlaWdodCkgPT4gd2lkdGggPD0gNzAwIHx8IHdpZHRoIDwgaGVpZ2h0O1xyXG5cclxuXHR2YXIgc2NhbGVSYXRpbyA9IGlzTW9iaWxlKClcclxuXHRcdFx0PyBkZXZpY2Uud2lkdGggLyBzZXR0aW5ncy5kZXNpZ25XaWR0aC5tb2JpbGVcclxuXHRcdFx0OiBkZXZpY2Uud2lkdGggLyBzZXR0aW5ncy5kZXNpZ25XaWR0aC5kZXNrdG9wLFxyXG5cdFx0bWFyZ2luTGVmdCA9IDA7XHJcblxyXG5cdGlmIChzZXR0aW5ncy5kZXZpY2VIZWlnaHRTdHlsZVRhZyAhPSBmYWxzZSAmJiAkKFwiI2RldmljZUhlaWdodFN0eWxlVGFnXCIpLmxlbmd0aCA8IDEpIHtcclxuXHRcdHZhciByZXNjYWxlZEhlaWdodCA9IFwiY2FsYygxMDB2aCAqIFwiICsgMSAvIHNjYWxlUmF0aW8gKyBcIilcIjtcclxuXHRcdHZhciBzdHlsZVRhZyA9ICQoYFxyXG4gICAgICAgICAgICA8c3R5bGUgaWQ9XCJkZXZpY2VIZWlnaHRTdHlsZVRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgLiR7c2V0dGluZ3MuZGV2aWNlSGVpZ2h0U3R5bGVUYWcubWF4fSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJHtyZXNjYWxlZEhlaWdodH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4ke3NldHRpbmdzLmRldmljZUhlaWdodFN0eWxlVGFnLmZpeH0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtyZXNjYWxlZEhlaWdodH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBgKTtcclxuXHRcdCQoXCJodG1sID4gaGVhZFwiKS5hcHBlbmQoc3R5bGVUYWcpO1xyXG5cdH1cclxuXHJcblx0aWYgKHNldHRpbmdzLmRldmljZUhlaWdodFN0eWxlVmFyICE9IGZhbHNlICYmICQoXCIjZGV2aWNlSGVpZ2h0U3R5bGVWYXJcIikubGVuZ3RoIDwgMSkge1xyXG5cdFx0dmFyIHJlc2NhbGVkSGVpZ2h0ID0gXCJjYWxjKDEwMHZoICogXCIgKyAxIC8gc2NhbGVSYXRpbyArIFwiKVwiO1xyXG5cdFx0dmFyIHN0eWxlVGFnID0gJChgXHJcbiAgICAgICAgICAgIDxzdHlsZSBpZD1cImRldmljZUhlaWdodFN0eWxlVmFyXCI+XHJcbiAgICAgICAgICAgICAgICA6cm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5ncy5kZXZpY2VIZWlnaHRTdHlsZVZhcn06ICR7cmVzY2FsZWRIZWlnaHR9O1xyXG4gICAgICAgICAgICAgICAgICAgICR7c2V0dGluZ3MuZGV2aWNlU2NhbGVSYXRpb1N0eWxlVmFyfTogJHtzY2FsZVJhdGlvfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIGApO1xyXG5cdFx0JChcImh0bWwgPiBoZWFkXCIpLmFwcGVuZChzdHlsZVRhZyk7XHJcblx0fVxyXG5cclxuXHQkKHNldHRpbmdzLmVsU2NhbGUuZGVza3RvcCArIFwiICwgXCIgKyBzZXR0aW5ncy5lbFNjYWxlLm1vYmlsZSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgc2NhbGVPcmlnaW4gPSAoaXNNb2JpbGUgPSBpc01vYmlsZSgpKSA9PiB7XHJcblx0XHRcdGlmIChpc01vYmlsZSAmJiAkKHRoaXMpLmF0dHIoc2V0dGluZ3MuZGF0YU9yaWdpbi5tb2JpbGUpICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiAkKHRoaXMpLmF0dHIoc2V0dGluZ3MuZGF0YU9yaWdpbi5tb2JpbGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cihzZXR0aW5ncy5kYXRhT3JpZ2luLmRlc2t0b3ApICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiAkKHRoaXMpLmF0dHIoc2V0dGluZ3MuZGF0YU9yaWdpbi5kZXNrdG9wKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gXCJ0b3AgbGVmdFwiO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgZGlzcGxheSA9IChpc01vYmlsZSA9IGlzTW9iaWxlKCkpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coaXNNb2JpbGUpO1xyXG5cdFx0XHRpZiAoaXNNb2JpbGUgJiYgJCh0aGlzKS5hdHRyKHNldHRpbmdzLmRhdGFEaXNwbGF5Lm1vYmlsZSkgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuICQodGhpcykuYXR0cihzZXR0aW5ncy5kYXRhRGlzcGxheS5tb2JpbGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cihzZXR0aW5ncy5kYXRhRGlzcGxheS5kZXNrdG9wKSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5hdHRyKHNldHRpbmdzLmRhdGFEaXNwbGF5LmRlc2t0b3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBcImJsb2NrXCI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vICQodGhpcykuY3NzKHtcclxuXHRcdC8vICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyBzY2FsZVJhdGlvICsgXCIpXCIsXHJcblx0XHQvLyAgICAgbWFyZ2luTGVmdDogbWFyZ2luTGVmdCArIFwicHhcIixcclxuXHRcdC8vICAgICB0cmFuc2Zvcm1PcmlnaW46IHNjYWxlT3JpZ2luXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdChpc01vYmlsZSgpICYmICQodGhpcykuaGFzQ2xhc3Moc2V0dGluZ3MuZWxTY2FsZS5tb2JpbGUucmVwbGFjZShcIi5cIiwgXCJcIikpKSB8fFxyXG5cdFx0XHQoIWlzTW9iaWxlKCkgJiYgJCh0aGlzKS5oYXNDbGFzcyhzZXR0aW5ncy5lbFNjYWxlLmRlc2t0b3AucmVwbGFjZShcIi5cIiwgXCJcIikpKVxyXG5cdFx0KSB7XHJcblx0XHRcdCQodGhpcykuY3NzKHtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyBzY2FsZVJhdGlvICsgXCIpXCIsXHJcblx0XHRcdFx0bWFyZ2luTGVmdDogbWFyZ2luTGVmdCArIFwicHhcIixcclxuXHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46IHNjYWxlT3JpZ2luLFxyXG5cdFx0XHRcdC8vIGRpc3BsYXk6IGRpc3BsYXlcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICgkKFwiI2xvYWRpbmctc2NyZWVuXCIpKSB7XHJcblx0XHRcdFx0JChcIiNsb2FkaW5nLXNjcmVlblwiKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoc2V0dGluZ3MucmVzY2FsZUZvclBhcmVudCkge1xyXG5cdFx0dmFyIG9iaiA9IHtcclxuXHRcdFx0aGVpZ2h0OiBzZXR0aW5ncy5vYmoub3V0ZXJIZWlnaHQoKSxcclxuXHRcdH07XHJcblx0XHR2YXIgc2NhbGVIZWlnaHQgPSBvYmouaGVpZ2h0ICogc2NhbGVSYXRpbztcclxuXHRcdC8vIGNvbnNvbGUubG9nKHNjYWxlSGVpZ2h0LCBvYmouaGVpZ2h0LCBzY2FsZVJhdGlvKTtcclxuXHRcdCQoc2V0dGluZ3Mub2JqKVxyXG5cdFx0XHQucGFyZW50KClcclxuXHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0aGVpZ2h0OiBzY2FsZUhlaWdodCArIFwicHhcIixcclxuXHRcdFx0XHQvLyB3aWR0aDogZGV2aWNlLndpZHRoK1wicHhcIlxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdCQoc2V0dGluZ3Mub2JqKS5wYXJlbnQoKS5hdHRyKHNldHRpbmdzLmRhdGFTY2FsZSwgc2NhbGVSYXRpbyk7XHJcblx0JChzZXR0aW5ncy5vYmopXHJcblx0XHQucGFyZW50KClcclxuXHRcdC5hdHRyKHNldHRpbmdzLmRhdGFEZXZpY2UsIGlzTW9iaWxlKCkgPyBcIm1vYmlsZVwiIDogXCJkZXNrdG9wXCIpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=