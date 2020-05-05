"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  onLoad: function onLoad() {
    console.log('onLoad');
  }
}, {info: {"components":{"van-button":{"path":"./../$vendor/@vant/weapp/dist/button/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });