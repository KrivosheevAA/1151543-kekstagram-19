'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;

  window.helpers = {
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

    debounce: function (fun) {
      var lastTimeout = null;

      return function () {
        var args = arguments;

        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }

        lastTimeout = window.setTimeout(function () {
          fun.apply(null, args);
        }, DEBOUNCE_INTERVAL);
      };
    },

    shuffleArray: function (array) {
      var j;
      var x;

      for (var i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      return array;
    },
  };
})();
