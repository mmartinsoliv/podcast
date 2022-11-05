/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/ThemeContextProvider.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/ThemeContextProvider.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"useTheme\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst ThemeProvider = ({ children  })=>{\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const currentTheme = localStorage.getItem(\"@podcastrnext/theme\");\n        if (currentTheme) {\n            switchTheme(currentTheme === \"darkTheme\");\n        }\n    }, []);\n    const switchTheme = (isDarkMode)=>{\n        if (isDarkMode) {\n            localStorage.setItem(\"@podcastrnext/theme\", \"darkTheme\");\n            document.body.classList.add(\"darkMode\");\n            setIsDarkMode(true);\n        } else {\n            localStorage.setItem(\"@podcastrnext/theme\", \"lightTheme\");\n            document.body.classList.remove(\"darkMode\");\n            setIsDarkMode(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDarkMode,\n            switchTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/matheusmartins/projects/estudo/podcast/src/contexts/ThemeContextProvider.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) throw new Error(\"ThemeContext does not exists\");\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVGhlbWVDb250ZXh0UHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBTWM7QUFPZCxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQUMsQ0FBQztBQU03QixNQUFNSSxnQkFBZ0IsQ0FBQyxFQUFFQyxTQUFRLEVBQWMsR0FBSztJQUN2RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUVqREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1NLGVBQWVDLGFBQWFDLE9BQU8sQ0FBQztRQUUxQyxJQUFHRixjQUFjO1lBQ2JHLFlBQVlILGlCQUFpQjtRQUNqQyxDQUFDO0lBQ0wsR0FBRyxFQUFFO0lBRUwsTUFBTUcsY0FBYyxDQUFDTCxhQUF3QjtRQUN6QyxJQUFHQSxZQUFZO1lBQ1pHLGFBQWFHLE9BQU8sQ0FBQyx1QkFBdUI7WUFDNUNDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDNUJULGNBQWMsSUFBSTtRQUNyQixPQUFPO1lBQ0hFLGFBQWFHLE9BQU8sQ0FBQyx1QkFBdUI7WUFDNUNDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7WUFDL0JWLGNBQWMsS0FBSztRQUN2QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0osYUFBYWUsUUFBUTtRQUFDQyxPQUFPO1lBQUNiO1lBQVlLO1FBQVc7a0JBQ2pETjs7Ozs7O0FBR2IsRUFBQztBQUVNLE1BQU1lLFdBQVcsSUFBTTtJQUMxQixNQUFNQyxVQUFVdEIsaURBQVVBLENBQUNJO0lBRTNCLElBQUcsQ0FBQ2tCLFNBQVMsTUFBTSxJQUFJQyxNQUFNLGdDQUErQjtJQUU1RCxPQUFPRDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0Ly4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dFByb3ZpZGVyLnRzeD9kMzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICB1c2VDb250ZXh0LFxuICAgY3JlYXRlQ29udGV4dCxcbiAgIHVzZVN0YXRlLFxuICAgdXNlRWZmZWN0LFxuICAgUmVhY3ROb2RlXG59IGZyb20gJ3JlYWN0J1xuXG50eXBlIFRoZW1lQ29udGV4dERhdGEgPSB7XG4gICBpc0RhcmtNb2RlOiBib29sZWFuO1xuICAgc3dpdGNoVGhlbWU6IChpc0RhcmtNb2RlOiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgVGhlbWVDb250ZXh0RGF0YSlcblxudHlwZSBUaGVtZVByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBUaGVtZVByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAcG9kY2FzdHJuZXh0L3RoZW1lJylcblxuICAgICAgICBpZihjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgICAgIHN3aXRjaFRoZW1lKGN1cnJlbnRUaGVtZSA9PT0gJ2RhcmtUaGVtZScpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHN3aXRjaFRoZW1lID0gKGlzRGFya01vZGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYoaXNEYXJrTW9kZSkge1xuICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHBvZGNhc3RybmV4dC90aGVtZScsICdkYXJrVGhlbWUnKVxuICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmtNb2RlJylcbiAgICAgICAgICAgc2V0SXNEYXJrTW9kZSh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0Bwb2RjYXN0cm5leHQvdGhlbWUnLCAnbGlnaHRUaGVtZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrTW9kZScpXG4gICAgICAgICAgICBzZXRJc0RhcmtNb2RlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzRGFya01vZGUsIHN3aXRjaFRoZW1lfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcblxuICAgIGlmKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZW1lQ29udGV4dCBkb2VzIG5vdCBleGlzdHMnKVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwiY3VycmVudFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN3aXRjaFRoZW1lIiwic2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ThemeContextProvider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContextProvider */ \"./src/contexts/ThemeContextProvider.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/matheusmartins/projects/estudo/podcast/src/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/matheusmartins/projects/estudo/podcast/src/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDbEM7QUFFOUIsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCx5RUFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvZGNhc3QvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0UHJvdmlkZXInXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();