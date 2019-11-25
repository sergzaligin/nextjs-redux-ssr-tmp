webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _test_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-reducer */ "./test-reducer.js");




var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  testPage: _test_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, {}, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
var isServer = false;

if (!isServer) {
  window.store = store;
}

function initializeStore() {
  return store;
}
;

/***/ })

})
//# sourceMappingURL=_app.js.3ffdaf2da790521fc9c8.hot-update.js.map