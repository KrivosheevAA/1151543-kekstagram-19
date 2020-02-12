'use strict';

var RULES = {
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
  }
};

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

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrayElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var createComment = function (count) {
  var comments = [];
  for (var i = 0; i < count; i++) {
    comments[i] = {
      avatar: 'img/avatar-' + getRandomNumber(RULES.NAME_AVATAR.MIN, RULES.NAME_AVATAR.MAX) + '.svg',
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES),
    };
  }
  return comments;
};

var createPictures = function (count) {
  var pictures = [];
  for (var i = 0; i < count; i++) {
    pictures[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'описание фотографии',
      likes: getRandomNumber(RULES.PHOTO.LIKE.MIN, RULES.PHOTO.LIKE.MAX),
      comments: createComment(getRandomNumber(RULES.COMMENT.MIN, RULES.COMMENT.MAX))
    };
  }
  return pictures;
};

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

var getPicture = function (picture) {
  var clonePictureElement = pictureTemplate.cloneNode(true);
  clonePictureElement.querySelector('.picture__img').src = picture.url;
  clonePictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  clonePictureElement.querySelector('.picture__likes').textContent = picture.likes;

  return clonePictureElement;
};

var renderPictureInDOM = function (pictures) {
  var picturesContainer = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(getPicture(pictures[i]));
  }
  return picturesContainer.appendChild(fragment);
};

renderPictureInDOM(createPictures(25));

//задание из раздела 3.2


var showBigPictire = document.querySelector('.big-picture');
var closeBigPicture = document.querySelector('.big-picture__cancel')

showBigPictire.classList.remove('hidden');
document.body.classList.add('modal-open');

closeBigPicture.addEventListener('click', function (evt) {
  showBigPictire.classList.add('hidden');
});


var getBigPicture = function (picture) {
getBigPicture.querySelector('.big-picture__img').querySelector('img').src = picture.url;
getBigPicture.querySelector('.likes-count').textContent = picture.likes;
getBigPicture.querySelector('.comments-count').textContent = picture.comments.length;
getBigPicture.querySelector('.social__caption').textContent = picture.description;

return getBigPicture;

};

var renderComments = function (comments) {
  for (var i = 0; i < comments.length; i++) {
   fragment.appendChild(getBigPicture(comments[i]));
  }
};

//задание 4.1
