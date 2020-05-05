"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
  },
  methods: {
    onChange: function onChange(wepyevent) {
      var event = wepyevent.$wx;
      var _event$detail = event.detail,
          picker = _event$detail.picker,
          value = _event$detail.value,
          index = _event$detail.index;
      console.log("\u5F53\u524D\u503C\uFF1A".concat(value, ", \u5F53\u524D\u7D22\u5F15\uFF1A").concat(index));
    }
  },
  onLoad: function onLoad() {
    console.log('onLoad');
  }
}, {info: {"components":{"van-popup":{"path":"./../$vendor/@vant/weapp/dist/popup/index"},"van-picker":{"path":"./../$vendor/@vant/weapp/dist/picker/index"}},"on":{"3-0":["change"]}}, handlers: {'3-0': {"change": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.onChange.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });