'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;

  window.helpers = {
    // getRandomNumber: function (min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // },
    // getRandomValue: function (array) {
    //   return array[Math.floor(Math.random() * array.length)];
    // },
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

    // fillFragment: function (arr) {
    //   var fragment = document.createDocumentFragment();

    //   arr.forEach(function (it) {
    //     fragment.appendChild(it);
    //   });

    //   return fragment;
    // },

    // debounce: function (fn, delay) {
    //   var inDebounce;
    //   return function() {
    //     var context = this;
    //     var args = arguments;
    //     clearTimeout(inDebounce);
    //     inDebounce = setTimeout(() => {
    //     fn.apply(context, args);
    //     }, delay);
    //   };
    // },

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
