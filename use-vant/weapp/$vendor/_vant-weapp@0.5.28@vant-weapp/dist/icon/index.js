"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});