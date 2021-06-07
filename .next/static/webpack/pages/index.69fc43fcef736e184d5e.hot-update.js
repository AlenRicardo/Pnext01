self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Tokio\\Documents\\Git - Proyectos\\pnext01\\components\\users.js",
    _this = undefined;




var Users = function Users(_ref) {
  var users = _ref.users;
  console.log(users.data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "list-group",
    children: users.data.map(function (user) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "list-group-item list-group-item-action d-flex justify-content-between alig-items-center",
        onClick: function onClick(e) {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default().push('users/[id]', "/users/".concat(user.id));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: [user.first_name, " ", user.last_name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Email: ", user.email]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: user.avatar,
          alt: user.first_name,
          style: {
            borderRadius: '50%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, _this)]
      }, user.id, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIl0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1hcCIsInVzZXIiLCJlIiwiUm91dGVyIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWE7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCO0FBQ0Esc0JBQ0k7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBLGNBRUlILEtBQUssQ0FBQ0csSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLDBCQUNuQjtBQUFJLGlCQUFTLEVBQUMseUZBQWQ7QUFBc0gsZUFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsaUJBQUlDLHVEQUFBLENBQVksWUFBWixtQkFBb0NGLElBQUksQ0FBQ0csRUFBekMsRUFBSjtBQUFBLFNBQWhJO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FDSTtBQUFBLHVCQUFLSCxJQUFJLENBQUNJLFVBQVYsT0FBdUJKLElBQUksQ0FBQ0ssU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxrQ0FBV0wsSUFBSSxDQUFDTSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFDSSxhQUFHLEVBQUVOLElBQUksQ0FBQ08sTUFEZDtBQUVJLGFBQUcsRUFBRVAsSUFBSSxDQUFDSSxVQUZkO0FBR0ksZUFBSyxFQUFFO0FBQUNJLHdCQUFZLEVBQUU7QUFBZjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxTQUE2R1IsSUFBSSxDQUFDRyxFQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1CO0FBQUEsS0FBbkI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtQkgsQ0FyQkQ7O0tBQU1ULEs7QUF1Qk4sK0RBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsNkdBQWdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5ZmM0M2ZjZWY3MzZlMTg0ZDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJzLmRhdGEpO1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2Vycy5kYXRhLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnLWl0ZW1zLWNlbnRlclwiIGtleT17dXNlci5pZH0gb25DbGljaz17ZSA9PiBSb3V0ZXIucHVzaCgndXNlcnMvW2lkXScsIGAvdXNlcnMvJHt1c2VyLmlkfWApfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==