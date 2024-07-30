"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Select = function Select(_ref) {
  var id = _ref.id,
    options = _ref.options,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$withSearch = _ref.withSearch,
    withSearch = _ref$withSearch === void 0 ? false : _ref$withSearch,
    _ref$searchPlaceholde = _ref.searchPlaceholder,
    searchPlaceholder = _ref$searchPlaceholde === void 0 ? 'Search...' : _ref$searchPlaceholde,
    onChange = _ref.onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Label' : _ref$label,
    _ref$outlined = _ref.outlined,
    outlined = _ref$outlined === void 0 ? false : _ref$outlined;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOptions = _useState4[0],
    setSelectedOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var selectRef = (0, _react.useRef)(null);
  var dropdownRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setSearchQuery('');
  }, [isOpen]);
  var toggleOpen = function toggleOpen() {
    return !outlined && setIsOpen(!isOpen);
  };
  var handleOptionClick = function handleOptionClick(option) {
    if (multiple) {
      setSelectedOptions(function (prev) {
        return prev.includes(option) ? prev.filter(function (item) {
          return item !== option;
        }) : [].concat(_toConsumableArray(prev), [option]);
      });
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
    if (onChange) onChange(option);
  };
  var handleSearchChange = function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  };
  var removeOption = function removeOption(option) {
    setSelectedOptions(function (prev) {
      return prev.filter(function (item) {
        return item !== option;
      });
    });
    if (onChange) onChange(null);
  };
  var highlightText = function highlightText(text, query) {
    if (!query) return text;
    var parts = text.split(new RegExp("(".concat(query, ")"), 'gi'));
    return parts.map(function (part, index) {
      return part.toLowerCase() === query.toLowerCase() ? /*#__PURE__*/_react["default"].createElement("span", {
        key: index,
        className: "bg-aqua-200"
      }, part) : part;
    });
  };
  var renderOptions = function renderOptions() {
    return options.map(function (option) {
      var isMatch = option.label.toLowerCase().includes(searchQuery.toLowerCase());
      var isSelected = selectedOptions.includes(option);
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: option.value,
        className: "\n            cursor-pointer p-2 hover:bg-gray-100 text-xs\n            ".concat(!isMatch ? 'text-black-400' : '', "\n            ").concat(isSelected ? 'bg-green-200 bg-opacity-70' : '', "\n          "),
        onClick: function onClick(e) {
          e.stopPropagation();
          handleOptionClick(option);
        }
      }, highlightText(option.label, searchQuery));
    });
  };
  var renderDropdownContent = function renderDropdownContent() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute bg-white border border-gray-300 mt-2 w-full rounded-b-md",
      style: {
        zIndex: 1000
      },
      ref: dropdownRef
    }, withSearch && /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      className: "p-2 border-b border-gray-300 pl-8 outline-none w-full text-xs",
      placeholder: searchPlaceholder,
      value: searchQuery,
      onChange: handleSearchChange,
      autoFocus: true
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "w-4 h-4 text-gray-400",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "max-h-60 overflow-y-auto"
    }, renderOptions()));
  };
  var selectedLabel = multiple ? selectedOptions.length > 0 ? selectedOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: option.value,
      className: "inline-flex items-center pl-3 pr-3 pt-1 pb-1 ml-2 bg-gray-100 rounded-full text-sm"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2"
    }, option.label), /*#__PURE__*/_react["default"].createElement("button", {
      className: "text-black border border-black rounded-lg w-3 h-3 flex items-center justify-center",
      onClick: function onClick(e) {
        e.stopPropagation();
        removeOption(option);
      }
    }, "\xD7"));
  }) : '' : selectedOptions.length > 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2"
  }, selectedOptions[0].label) : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "mr-32 text-xs"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block w-full",
    ref: selectRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cursor-pointer border border-gray-300 rounded-md min-h-[27pt] bg-white flex items-center justify-between ".concat(outlined ? 'bg-gray-300 cursor-not-allowed' : ''),
    onClick: toggleOpen,
    id: id
  }, /*#__PURE__*/_react["default"].createElement("span", null, selectedLabel), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4 text-gray-400 mr-2",
    fill: "none",
    stroke: "grey",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7"
  }))), isOpen && /*#__PURE__*/_reactDom["default"].createPortal(renderDropdownContent(), document.body)));
};
var _default = exports["default"] = Select;