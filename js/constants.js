'use strict';

(function () {
  var COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  var NAMES = [
    'Андрей',
    'Маша',
    'Катя',
    'Саша',
    'Антон',
    'Михаил'
  ];

  window.constants = {
    KEYS: {
      ENTER_KEYCODE: 13,
      ESC_KEYCODE: 27,
    },
    COMMENTS: COMMENTS,
    NAMES: NAMES,
    PHOTO: {
      COUNT: 25,
      LIKE: {
        MIN: 15,
        MAX: 200
      }
    },
    NAME_AVATAR: {
      MIN: 1,
      MAX: 6
    },
    COMMENT: {
      MIN: 1,
      MAX: 6
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
