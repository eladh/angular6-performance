/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module1__ = __webpack_require__(/*! ./module1 */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_demo1_txt__ = __webpack_require__(/*! ./data/demo1.txt */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_demo1_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_demo1_txt__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_demo2_txt__ = __webpack_require__(/*! ./data/demo2.txt */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_demo2_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_demo2_txt__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_demo3_txt__ = __webpack_require__(/*! ./data/demo3.txt */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_demo3_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_demo3_txt__);\n\n\n\n\n\nwindow.x = Object(__WEBPACK_IMPORTED_MODULE_0__module1__[\"a\" /* run */])(5, 10);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21haW4uanM/N2EyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3J1bn0gZnJvbSBcIi4vbW9kdWxlMVwiO1xuaW1wb3J0ICcuL2RhdGEvZGVtbzEudHh0JztcbmltcG9ydCAnLi9kYXRhL2RlbW8yLnR4dCc7XG5pbXBvcnQgJy4vZGF0YS9kZW1vMy50eHQnO1xuXG53aW5kb3cueCA9IHJ1big1LCAxMCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************!*\
  !*** ./module1.js ***!
  \********************/
/*! exports provided: run */
/*! exports used: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = run;\nfunction run(num1, num2) {\n    return num1 + num2;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZTEuanM/NzgxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcnVuKG51bTEsIG51bTIpIHtcbiAgICByZXR1cm4gbnVtMSArIG51bTI7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZTEuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./data/demo1.txt ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("sdgsdgsdg//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEvZGVtbzEudHh0P2ZmMTMiXSwic291cmNlc0NvbnRlbnQiOlsic2Rnc2Rnc2RnXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhL2RlbW8xLnR4dFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************!*\
  !*** ./data/demo2.txt ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("sdgsdgsdg//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEvZGVtbzIudHh0PzE4NWEiXSwic291cmNlc0NvbnRlbnQiOlsic2Rnc2Rnc2RnXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhL2RlbW8yLnR4dFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./data/demo3.txt ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("sdgsdgsdg//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEvZGVtbzMudHh0PzE0OWIiXSwic291cmNlc0NvbnRlbnQiOlsic2Rnc2Rnc2RnXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kYXRhL2RlbW8zLnR4dFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);