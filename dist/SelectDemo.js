"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var options = [{
  value: '1',
  label: 'Option 1'
}, {
  value: '2',
  label: 'Option with icon'
}, {
  value: '3',
  label: 'Long Long Option 3'
}, {
  value: '4',
  label: 'Long Long Long Option 4'
}, {
  value: '5',
  label: 'Long Long Long Long Option 5'
}, {
  value: '6',
  label: 'Long Long Long Long Long Option 6'
}];
var SelectDemo = function SelectDemo() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Select Component Demo"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: options,
    multiple: true,
    withSearch: true
  }));
};
var _default = exports["default"] = SelectDemo;