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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectionHeading */ \"(app-pages-browser)/./components/sectionHeading.tsx\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component */ \"(app-pages-browser)/./node_modules/react-vertical-timeline-component/dist-es6/index.js\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"(app-pages-browser)/./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/data */ \"(app-pages-browser)/./lib/data.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n// import { useSectionInView } from \"@/lib/hooks\";\n// import { useTheme } from \"@/context/theme-context\";\nfunction Experience() {\n    // const { ref } = useSectionInView(\"Experience\");\n    // const { theme } = useTheme();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"experience\",\n        className: \"scroll-mt-28 mb-28 sm:mb-40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: 100\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            transition: {\n                delay: 0.175\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sectionHeading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: \"My experience\"\n                }, void 0, false, {\n                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimeline, {\n                    lineColor: \"\",\n                    children: _lib_data__WEBPACK_IMPORTED_MODULE_5__.experiencesData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimelineElement, {\n                                contentStyle: {\n                                    background: \"#f3f4f6\",\n                                    boxShadow: \"none\",\n                                    border: \"1px solid rgba(0, 0, 0, 0.05)\",\n                                    // textAlign: \"left\",\n                                    padding: \"1.3rem 2rem\",\n                                    visibility: \"visible\"\n                                },\n                                contentArrowStyle: {\n                                    borderRight: \"0.4rem solid #9ca3af\"\n                                },\n                                date: item.date,\n                                icon: item.icon,\n                                iconStyle: {\n                                    background: \"white\",\n                                    fontSize: \"1.5rem\",\n                                    visibility: \"visible\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"block font-semibold capitalize text-gray-700 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: item.link,\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-normal !mt-0\",\n                                        children: item.location\n                                    }, void 0, false, {\n                                        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-gray-700\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/justincheng/Desktop/github/portfolio-mark3/components/experience.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDb0I7QUFJSDtBQUNjO0FBQ1o7QUFDTjtBQUN2QyxrREFBa0Q7QUFDbEQsc0RBQXNEO0FBRXZDLFNBQVNNO0lBQ3RCLGtEQUFrRDtJQUNsRCxnQ0FBZ0M7SUFFaEMscUJBQ0UsOERBQUNDO1FBQVFDLElBQUc7UUFBYUMsV0FBVTtrQkFDakMsNEVBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO1lBQ1RDLFNBQVM7Z0JBQUVDLFNBQVM7Z0JBQUdDLEdBQUc7WUFBSTtZQUM5QkMsU0FBUztnQkFBRUYsU0FBUztnQkFBR0MsR0FBRztZQUFFO1lBQzVCRSxZQUFZO2dCQUFFQyxPQUFPO1lBQU07OzhCQUUzQiw4REFBQ2YsdURBQWNBOzhCQUFDOzs7Ozs7OEJBQ2hCLDhEQUFDQywrRUFBZ0JBO29CQUFDZSxXQUFVOzhCQUN6QmIsc0RBQWVBLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDMUIsOERBQUNwQix1REFBYztzQ0FDYiw0RUFBQ0csc0ZBQXVCQTtnQ0FDdEJtQixjQUFjO29DQUNaQyxZQUFZO29DQUNaQyxXQUFXO29DQUNYQyxRQUFRO29DQUNSLHFCQUFxQjtvQ0FDckJDLFNBQVM7b0NBQ1RDLFlBQVk7Z0NBRWQ7Z0NBQ0FDLG1CQUFtQjtvQ0FDakJDLGFBQWE7Z0NBQ2Y7Z0NBQ0FDLE1BQU1YLEtBQUtXLElBQUk7Z0NBQ2ZDLE1BQU1aLEtBQUtZLElBQUk7Z0NBQ2ZDLFdBQVc7b0NBQ1RULFlBQVk7b0NBQ1pVLFVBQVU7b0NBQ1ZOLFlBQVk7Z0NBQ2Q7O2tEQUVBLDhEQUFDTzt3Q0FBR3pCLFdBQVU7a0RBQ1osNEVBQUMwQjs0Q0FBRUMsTUFBTWpCLEtBQUtrQixJQUFJO3NEQUFHbEIsS0FBS21CLEtBQUs7Ozs7Ozs7Ozs7O2tEQUVqQyw4REFBQ0M7d0NBQUU5QixXQUFVO2tEQUFxQlUsS0FBS3FCLFFBQVE7Ozs7OztrREFDL0MsOERBQUNEO3dDQUFFOUIsV0FBVTtrREFBa0JVLEtBQUtzQixXQUFXOzs7Ozs7Ozs7Ozs7MkJBMUI5QnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ2pDO0tBaER3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHBlcmllbmNlLnRzeD9mOWUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSBcIi4vc2VjdGlvbkhlYWRpbmdcIjtcbmltcG9ydCB7XG4gIFZlcnRpY2FsVGltZWxpbmUsXG4gIFZlcnRpY2FsVGltZWxpbmVFbGVtZW50LFxufSBmcm9tIFwicmVhY3QtdmVydGljYWwtdGltZWxpbmUtY29tcG9uZW50XCI7XG5pbXBvcnQgXCJyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnQvc3R5bGUubWluLmNzc1wiO1xuaW1wb3J0IHsgZXhwZXJpZW5jZXNEYXRhIH0gZnJvbSBcIkAvbGliL2RhdGFcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG4vLyBpbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XG4vLyBpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2NvbnRleHQvdGhlbWUtY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlKCkge1xuICAvLyBjb25zdCB7IHJlZiB9ID0gdXNlU2VjdGlvbkluVmlldyhcIkV4cGVyaWVuY2VcIik7XG4gIC8vIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImV4cGVyaWVuY2VcIiBjbGFzc05hbWU9XCJzY3JvbGwtbXQtMjggbWItMjggc206bWItNDBcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjE3NSB9fVxuICAgICAgPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmc+TXkgZXhwZXJpZW5jZTwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lIGxpbmVDb2xvcj1cIlwiPlxuICAgICAgICAgIHtleHBlcmllbmNlc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8VmVydGljYWxUaW1lbGluZUVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2YzZjRmNlwiLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgICAgICAgICAgICAgLy8gdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMS4zcmVtIDJyZW1cIixcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRlbnRBcnJvd1N0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIwLjRyZW0gc29saWQgIzljYTNhZlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICBpY29uU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIGNhcGl0YWxpemUgdGV4dC1ncmF5LTcwMCBcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgIW10LTBcIj57aXRlbS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS03MDBcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvVmVydGljYWxUaW1lbGluZUVsZW1lbnQ+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmU+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VjdGlvbkhlYWRpbmciLCJWZXJ0aWNhbFRpbWVsaW5lIiwiVmVydGljYWxUaW1lbGluZUVsZW1lbnQiLCJleHBlcmllbmNlc0RhdGEiLCJtb3Rpb24iLCJFeHBlcmllbmNlIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsImxpbmVDb2xvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkZyYWdtZW50IiwiY29udGVudFN0eWxlIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImJvcmRlciIsInBhZGRpbmciLCJ2aXNpYmlsaXR5IiwiY29udGVudEFycm93U3R5bGUiLCJib3JkZXJSaWdodCIsImRhdGUiLCJpY29uIiwiaWNvblN0eWxlIiwiZm9udFNpemUiLCJoMyIsImEiLCJocmVmIiwibGluayIsInRpdGxlIiwicCIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/experience.tsx\n"));

/***/ })

});