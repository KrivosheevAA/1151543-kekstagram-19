'use strict';

(function () {
  window.constants = {
    KEYS: {
      ENTER_KEYCODE: 13,
      ESC_KEYCODE: 27,
    },
    AVATAR: {
      SIZE: 35
    },
    ZOOM: {
      MIN: 25,
      MAX: 100,
      STEP: 25
    },
    VALIDATION: {
      HASHTAG: {
        BEGIN_SYMBOL: '#',
        MIN_LENGHT: 2,
        MAX_LENGHT: 20,
        MAX_HASHTAGS: 5,
        REQURED: false,
      },
      COMMENT: {
        MAX_LENGHT: 140,
        REQURED: false,
      },
    },
  };
})();
