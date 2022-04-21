"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InLinePopup = _interopRequireDefault(require("./InLinePopup"));

require("./styles/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Modal extends _react.Component {
  // after 2 seconds (animation)
  callOnClose() {
    setTimeout(() => {
      this.props.onClose();
    }, 2000);
  }

  render() {
    if (this.props.show) {
      this.callOnClose();
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "screenModalContainer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modalContainer"
      }, /*#__PURE__*/_react.default.createElement(_InLinePopup.default, {
        animated: true,
        show: this.props.show,
        size: "large",
        variant: this.props.variant
      }), this.props.message && /*#__PURE__*/_react.default.createElement("div", {
        className: "content"
      }, this.props.message)))), this.props.backdrop && /*#__PURE__*/_react.default.createElement("div", {
        className: "overlayContainer"
      }));
    }

    return null;
  }

}

exports.default = Modal;