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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/App.tsx":
/*!******************************!*\
  !*** ./src/frontend/App.tsx ***!
  \******************************/
/*! exports provided: App, start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// interface AppProps {\n//     name: string;\n// }\n// interface AppState {\n//     time: string;\n// }\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n        super(props);\n        this.folders = [];\n        this.files = [];\n        this.state = {\n            folders: [],\n            files: []\n        };\n        for (let i = 1; i < 8; i++) {\n            this.folders.push(`folder${i}`);\n            this.files.push(`file${i}`);\n        }\n    }\n    componentDidMount() {\n        this.setState({ folders: this.folders, files: this.files });\n    }\n    render() {\n        const loadFolders = () => {\n            return this.folders.map((folder) => {\n                return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, folder));\n            });\n            // this.folders.array.forEach((folder: any) => {\n            //     console.log(folder)\n            //     //return (<Folder folder={folder} />);\n            // });\n        };\n        const loadFiles = () => {\n            console.log('folder');\n            // this.folders.map()\n            // this.files.array.forEach((file: any) => {\n            //     return (<File file={file} />);\n            // });\n        };\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"directory\" },\n            loadFolders(),\n            loadFiles()));\n    }\n}\n//  class Folder extends React.Component<any, any> {\n//     constructor(props: any) {\n//         super(props);\n//         this.state = { folder: this.props.folder}\n//         this.openFolder = this.openFolder.bind(this);\n//     }\n//     openFolder () {\n//     }\n//     render () {\n//         return (<div className=\"folder-icon\">\n//         <img src=\"./assets/right-arrow.png\"onClick={this.openFolder}/>\n//         <div className=\"folder\" >{this.props.folder}</div>\n//         </div>\n//         )\n//     }\n// }\n// class File extends React.Component<any, any> {\n//     constructor(props: any) {\n//         super(props);\n//         this.state = { file: this.props.folder}\n//     }\n//     render () {\n//         return (<div className=\"file\">{this.props.file}</div>)\n//     }\n// }\nfunction start() {\n    const rootElem = document.getElementById('main');\n    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](App, null), rootElem);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnJvbnRlbmQvQXBwLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9BcHAudHN4PzNmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gaW50ZXJmYWNlIEFwcFByb3BzIHtcbi8vICAgICBuYW1lOiBzdHJpbmc7XG4vLyB9XG5cbi8vIGludGVyZmFjZSBBcHBTdGF0ZSB7XG4vLyAgICAgdGltZTogc3RyaW5nO1xuLy8gfVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgZm9sZGVyczogYW55ID0gW107XG4gICAgZmlsZXM6IGFueSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9sZGVyczogW10sXG4gICAgICAgICAgICBmaWxlczogW11cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mb2xkZXJzLnB1c2goYGZvbGRlciR7aX1gKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMucHVzaChgZmlsZSR7aX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2xkZXJzOiB0aGlzLmZvbGRlcnMsIGZpbGVzOiB0aGlzLmZpbGVzIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG5cbiAgICAgICAgY29uc3QgbG9hZEZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb2xkZXJzLm1hcCgoZm9sZGVyOiBhbnkpPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdj57Zm9sZGVyfTwvZGl2PilcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHRoaXMuZm9sZGVycy5hcnJheS5mb3JFYWNoKChmb2xkZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGZvbGRlcilcbiAgICAgICAgICAgIC8vICAgICAvL3JldHVybiAoPEZvbGRlciBmb2xkZXI9e2ZvbGRlcn0gLz4pO1xuXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRGaWxlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb2xkZXInKVxuICAgICAgICAgICAgLy8gdGhpcy5mb2xkZXJzLm1hcCgpXG4gICAgICAgICAgICAvLyB0aGlzLmZpbGVzLmFycmF5LmZvckVhY2goKGZpbGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiAoPEZpbGUgZmlsZT17ZmlsZX0gLz4pO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3RvcnlcIj5cbiAgICAgICAgICAgICAgICB7bG9hZEZvbGRlcnMoKX1cbiAgICAgICAgICAgICAgICB7bG9hZEZpbGVzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcblxuICAgIH1cblxuXG59XG5cbi8vICBjbGFzcyBGb2xkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbi8vICAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZm9sZGVyOiB0aGlzLnByb3BzLmZvbGRlcn1cbi8vICAgICAgICAgdGhpcy5vcGVuRm9sZGVyID0gdGhpcy5vcGVuRm9sZGVyLmJpbmQodGhpcyk7XG4vLyAgICAgfVxuLy8gICAgIG9wZW5Gb2xkZXIgKCkge1xuXG4vLyAgICAgfVxuXG4vLyAgICAgcmVuZGVyICgpIHtcbi8vICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZvbGRlci1pY29uXCI+XG4vLyAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcmlnaHQtYXJyb3cucG5nXCJvbkNsaWNrPXt0aGlzLm9wZW5Gb2xkZXJ9Lz5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb2xkZXJcIiA+e3RoaXMucHJvcHMuZm9sZGVyfTwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKVxuLy8gICAgIH1cbi8vIH1cbi8vIGNsYXNzIEZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbi8vICAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZmlsZTogdGhpcy5wcm9wcy5mb2xkZXJ9XG4vLyAgICAgfVxuXG5cbi8vICAgICByZW5kZXIgKCkge1xuLy8gICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPnt0aGlzLnByb3BzLmZpbGV9PC9kaXY+KVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICByZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW0pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/frontend/App.tsx\n");

/***/ }),

/***/ "./src/frontend/main.ts":
/*!******************************!*\
  !*** ./src/frontend/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/frontend/App.tsx\");\n\nObject(_App__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnJvbnRlbmQvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9tYWluLnRzPzhlM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi9BcHBcIjtcblxuc3RhcnQoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/frontend/main.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiP2M0ODEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIj80YjJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ })

/******/ });