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
  },
  AVATAR: {
    SIZE: 35
  },
  ZOOM: {
    MIN: 25,
    MAX: 100,
    STEP: 25
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

var bigPictureContainer = document.querySelector('.big-picture');
var blockCommentCouter = document.querySelector('.social__comment-count');
var loaderComments = document.querySelector('.comments-loader');

blockCommentCouter.classList.add('hidden');
loaderComments.classList.add('hidden');
bigPictureContainer.classList.remove('hidden');
document.body.classList.add('modal-open');

var getCommentNode = function () {
  var createContainerComment = document.createElement('li');
  createContainerComment.classList.add('social__comment');
  var createImgElement = document.createElement('img');
  createImgElement.classList.add('social__picture');
  createImgElement.width = RULES.AVATAR.SIZE;
  createImgElement.height = RULES.AVATAR.SIZE;
  var createDescriptionElement = document.createElement('p');
  createDescriptionElement.classList.add('social__text');
  createContainerComment.appendChild(createImgElement);
  createContainerComment.appendChild(createDescriptionElement);

  return createContainerComment;
};

var renderCommentElement = function (comments) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < comments.length; i++) {
    var commentElement = getCommentNode();
    commentElement.querySelector('.social__picture').src = comments[i].avatar;
    commentElement.querySelector('.social__picture').alt = comments[i].name;
    commentElement.querySelector('.social__text').textContent = comments[i].message;
    fragment.appendChild(commentElement);
  }

  return fragment;
};

var setBigPictureInfo = function (picture) {
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
  bigPictureContainer.querySelector('.likes-count').textContent = picture.likes;
  bigPictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = picture.description;
  bigPictureContainer.querySelector('.social__comments').appendChild(renderCommentElement(picture.comments));

};

setBigPictureInfo(createPictures(25)[3]);

var closeBigPictureContainer = document.querySelector('.big-picture__cancel');

closeBigPictureContainer.addEventListener('click', function () {
  bigPictureContainer.classList.add('hidden');
});

//задание 4.1



var uploadFileElement = document.querySelector('#upload-file');
var closeImageEdit = document.querySelector('#upload-cancel');
var pictureEditorElement = document.querySelector('.img-upload__overlay');

document.body.classList.add('modal-open');
pictureEditorElement.classList.remove('hidden');

var onUploadFile = function (evt) {
  uploadFileElement.addEventListener('change', uploadFileElement);
};


closeImageEdit.addEventListener('click', function () {
  pictureEditorElement.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    pictureEditorElement.classList.add('hidden');
  }
});

var minScale = document.querySelector('.scale__control--smaller');
var maxScale = document.querySelector('.scale__control--bigger');
var valueScale = document.querySelector('.scale__control--value');
var imgUploadPreview = document.querySelector('.img-upload__preview');

var changeZoom = function (size) {
  var zoom = null;
  zoom = size + RULES.ZOOM.STEP;

  if (zoom > RULES.ZOOM.MAX) {
    zoom = RULES.ZOOM.MAX;
  }

  if (zoom < RULES.ZOOM.MIN)
    zoom = RULES.ZOOM.MIN;

  imgUploadPreview.style.transform = 'scale(' + (zoom / 100) + ')';
  valueScale.value = zoom + '%';
};

var onScalePlus = function () {
    changeZoom(25);
  };

var onScaleMinis = function () {
    changeZoom(-25);
  };

  minScale.addEventListener('click', onScaleMinis);
  maxScale.addEventListener('click', onScalePlus);

var sliderPin = document.querySelector('.effect-level__pin');

var onDropPin = function (evt) {
  sliderPin.addEventListener('mouseup');
};
