'use strict';

(function () {
  window.helpers = {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomArrayElement: function (array) {
      return array[this.getRandomNumber(0, array.length - 1)];
    },
    isEscEvent: function (evt, callback) {
      if (evt.keyCode === window.constants.KEYS.ESC_KEYCODE) {
        callback();
      }
    },
    isEnterEvent: function (evt, callback) {
      if (evt.keyCode === window.constants.KEYS.ENTER_KEYCODE) {
        callback();
      }
    },

    clamp: function (value, min, max) {
      return Math.max(min, Math.min(value, max));
    },
  };
})();
