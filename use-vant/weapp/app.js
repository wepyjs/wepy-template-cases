"use strict";

var _core = _interopRequireDefault(require('./vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].app({
  onLaunch: function onLaunch() {
    console.log('on launch');
  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined });