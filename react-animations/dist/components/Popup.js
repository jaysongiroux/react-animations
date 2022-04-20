"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeFreeSolid = require("@fortawesome/fontawesome-free-solid");

require("./styles/popup.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Popup extends _react.Component {
  // after 2 seconds (animation)
  callOnClose() {
    setTimeout(() => {
      this.props.onClose();
    }, 2000);
  }

  getVariantIcon() {
    switch (this.props.variant) {
      case "trash":
        return /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _fontawesomeFreeSolid.faTrash
        });

      case "danger":
        return /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _fontawesomeFreeSolid.faExclamationCircle
        });

      case "warning":
        return /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _fontawesomeFreeSolid.faExclamationCircle
        });

      default:
      case "success":
        return /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _fontawesomeFreeSolid.faCheck
        });
    }
  }

  render() {
    if (this.props.show) {
      if (this.props.animated && this.props.onClose) {
        this.callOnClose();
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "popupContainer ".concat(this.props.variant ? this.props.variant : "success", " ").concat(this.props.size, " ").concat(this.props.animated ? "animated" : null)
      }, this.getVariantIcon());
    }

    return null;
  }

}

exports.default = Popup;