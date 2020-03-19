'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;

  window.helpers = {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
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

    fillFragment: function (arr) {
      var fragment = document.createDocumentFragment();

      arr.forEach(function (it) {
        fragment.appendChild(it);
      });

      return fragment;
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

    // debounce: function (callback) {
    // if (lastTimeout) {
    //   window.clearTimeout(lastTimeout);
    // }
    // lastTimeout = window.setTimeout(callback, DEBOUNCE_INTERVAL);
    // },

    // shuffleArray: function (array) {
    //   for (var i = array.length - 1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var temp = array[j];
    //     array[j] = array[i];
    //     array[i] = temp;
    //   }
    //   return array;
    // },

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
