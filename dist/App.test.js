"use strict";

var _react = require("@testing-library/react");
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('renders select component', function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_Select["default"], null));
});