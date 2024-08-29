"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/experience.tsx":
/*!***********************************!*\
  !*** ./components/experience.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectionHeading */ \"(app-pages-browser)/./components/sectionHeading.tsx\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component */ \"(app-pages-browser)/./node_modules/react-vertical-timeline-component/dist-es6/index.js\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"(app-pages-browser)/./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/data */ \"(app-pages-browser)/./lib/data.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n// import { useSectionInView } from \"@/lib/hooks\";\n// import { useTheme } from \"@/context/theme-context\";\nfunction Experience() {\n    // const { ref } = useSectionInView(\"Experience\");\n    // const { theme } = useTheme();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"experience\",\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: 100\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            transition: {\n                delay: 0.175\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sectionHeading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: \"My experience\"\n                }, void 0, false, {\n                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                _lib_data__WEBPACK_IMPORTED_MODULE_5__.experiencesData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimelineElement, {\n                            contentStyle: {\n                                boxShadow: \"none\",\n                                border: \"1px solid rgba(0, 0, 0, 0.05)\",\n                                textAlign: \"left\",\n                                padding: \"1.3rem 2rem\"\n                            },\n                            contentArrowStyle: {\n                                borderRight: \"0.4rem solid #9ca3af\"\n                            },\n                            date: item.date,\n                            icon: item.icon,\n                            iconStyle: {\n                                background: \"white\",\n                                fontSize: \"1.5rem\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold capitalize\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal !mt-0\",\n                                    children: item.location\n                                }, void 0, false, {\n                                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" text-gray-700\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDb0I7QUFJSDtBQUNjO0FBQ1o7QUFDTjtBQUN2QyxrREFBa0Q7QUFDbEQsc0RBQXNEO0FBRXZDLFNBQVNLO0lBQ3RCLGtEQUFrRDtJQUNsRCxnQ0FBZ0M7SUFFaEMscUJBQ0UsOERBQUNDO1FBQVFDLElBQUc7UUFBYUMsV0FBVTtrQkFDakMsNEVBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO1lBQ1RDLFNBQVM7Z0JBQUVDLFNBQVM7Z0JBQUdDLEdBQUc7WUFBSTtZQUM5QkMsU0FBUztnQkFBRUYsU0FBUztnQkFBR0MsR0FBRztZQUFFO1lBQzVCRSxZQUFZO2dCQUFFQyxPQUFPO1lBQU07OzhCQUUzQiw4REFBQ2QsdURBQWNBOzhCQUFDOzs7Ozs7Z0JBRWZFLHNEQUFlQSxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDbEIsdURBQWM7a0NBQ2IsNEVBQUNFLHNGQUF1QkE7NEJBQ3RCa0IsY0FBYztnQ0FDWkMsV0FBVztnQ0FDWEMsUUFBUTtnQ0FDUkMsV0FBVztnQ0FDWEMsU0FBUzs0QkFDWDs0QkFDQUMsbUJBQW1CO2dDQUNqQkMsYUFBYTs0QkFDZjs0QkFDQUMsTUFBTVYsS0FBS1UsSUFBSTs0QkFDZkMsTUFBTVgsS0FBS1csSUFBSTs0QkFDZkMsV0FBVztnQ0FDVEMsWUFBWTtnQ0FDWkMsVUFBVTs0QkFDWjs7OENBRUEsOERBQUNDO29DQUFHeEIsV0FBVTs4Q0FBNEJTLEtBQUtnQixLQUFLOzs7Ozs7OENBQ3BELDhEQUFDQztvQ0FBRTFCLFdBQVU7OENBQXFCUyxLQUFLa0IsUUFBUTs7Ozs7OzhDQUMvQyw4REFBQ0Q7b0NBQUUxQixXQUFVOzhDQUFrQlMsS0FBS21CLFdBQVc7Ozs7Ozs7Ozs7Ozt1QkFwQjlCbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qi9CO0tBMUN3QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHBlcmllbmNlLnRzeD9mOWUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSBcIi4vc2VjdGlvbkhlYWRpbmdcIjtcbmltcG9ydCB7XG4gIFZlcnRpY2FsVGltZWxpbmUsXG4gIFZlcnRpY2FsVGltZWxpbmVFbGVtZW50LFxufSBmcm9tIFwicmVhY3QtdmVydGljYWwtdGltZWxpbmUtY29tcG9uZW50XCI7XG5pbXBvcnQgXCJyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnQvc3R5bGUubWluLmNzc1wiO1xuaW1wb3J0IHsgZXhwZXJpZW5jZXNEYXRhIH0gZnJvbSBcIkAvbGliL2RhdGFcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG4vLyBpbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XG4vLyBpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2NvbnRleHQvdGhlbWUtY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlKCkge1xuICAvLyBjb25zdCB7IHJlZiB9ID0gdXNlU2VjdGlvbkluVmlldyhcIkV4cGVyaWVuY2VcIik7XG4gIC8vIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImV4cGVyaWVuY2VcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjE3NSB9fVxuICAgICAgPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmc+TXkgZXhwZXJpZW5jZTwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICAgIHsvKiA8VmVydGljYWxUaW1lbGluZSBsaW5lQ29sb3I9XCJcIj4gKi99XG4gICAgICAgIHtleHBlcmllbmNlc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudFxuICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxLjNyZW0gMnJlbVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb250ZW50QXJyb3dTdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjAuNHJlbSBzb2xpZCAjOWNhM2FmXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICBpY29uU3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGNhcGl0YWxpemVcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCAhbXQtMFwiPntpdGVtLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS03MDBcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmVFbGVtZW50PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICkpfVxuICAgICAgICB7LyogPC9WZXJ0aWNhbFRpbWVsaW5lPiAqL31cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTZWN0aW9uSGVhZGluZyIsIlZlcnRpY2FsVGltZWxpbmVFbGVtZW50IiwiZXhwZXJpZW5jZXNEYXRhIiwibW90aW9uIiwiRXhwZXJpZW5jZSIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJGcmFnbWVudCIsImNvbnRlbnRTdHlsZSIsImJveFNoYWRvdyIsImJvcmRlciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJjb250ZW50QXJyb3dTdHlsZSIsImJvcmRlclJpZ2h0IiwiZGF0ZSIsImljb24iLCJpY29uU3R5bGUiLCJiYWNrZ3JvdW5kIiwiZm9udFNpemUiLCJoMyIsInRpdGxlIiwicCIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/experience.tsx\n"));

/***/ })

});