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
  HASHTAGS: {

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

//  задание 4.1

var uploadFileElement = document.querySelector('#upload-file');
var closeImageEdit = document.querySelector('#upload-cancel');
var pictureEditorElement = document.querySelector('.img-upload__overlay');
var isFocusField = false;

var hiddenBodyScroll = function () {
  document.body.classList.add('modal-open');
};

// var showBodyScroll = function () {
//   document.body.classList.remove('modal-open');
// };

var onFileChange = function () {
  hiddenBodyScroll();
  pictureEditorElement.classList.remove('hidden');
};

uploadFileElement.addEventListener('change', onFileChange);


closeImageEdit.addEventListener('click', function () {
  pictureEditorElement.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && !isFocusField) {
    pictureEditorElement.classList.add('hidden');
  }
});

var scaleControls = document.querySelector('.img-upload__scale');
var valueScale = scaleControls.querySelector('.scale__control--value');
var imgUploadPreview = document.querySelector('.img-upload__preview');

var getScaleValue = function () {
  return parseInt(valueScale.value, 10);
};

var setScaleValue = function (value) {
  valueScale.value = value;
};

var setCSSScaleValue = function (value) {
  return 'scale(' + value / 100 + ')';
};

var transformValueInPercent = function (value) {
  return value + '%';
};

var changeZoom = function (step) {
  var currentValue = getScaleValue();
  var resultValue = currentValue + step;

  if (resultValue > 100) {
    resultValue = 100;
  }

  if (resultValue < 25) {
    resultValue = 25;
  }

  setScaleValue(transformValueInPercent(resultValue));
  imgUploadPreview.style.transform = setCSSScaleValue(resultValue);
};


var onScaleClick = function (evt) {
  if (evt.target.classList.contains('scale__control--smaller')) {
    changeZoom(-25);
  }

  if (evt.target.classList.contains('scale__control--bigger')) {
    changeZoom(25);
  }
};

scaleControls.addEventListener('click', onScaleClick);


var sliderPin = document.querySelector('.effect-level__pin');

var onDropPin = function () {
  sliderPin.addEventListener('mouseup');
};

onDropPin();

// 4.1 комментарии
var descriptionInput = document.querySelector('.text__description');

var onValidateCommentInput = function () {
  if (descriptionInput.value.split('').length > 140) {
    descriptionInput.setCustomValidity('Комментарий не должен превышать 140 символов');
  }
};

function onDescriptionFieldValid() {
  descriptionInput.style.outline = '';
  descriptionInput.setCustomValidity('');
}

descriptionInput.addEventListener('change', onDescriptionFieldValid);

//  4.1 задание хештеги
var hashtagInput = document.querySelector('.text__hashtags');
var uploadForm = document.querySelector('.img-upload__form');

var onValidateHashtagInput = function () {
  var hashtagInputValue = hashtagInput.value.toLowerCase();
  var hashtagsArray = hashtagInputValue.split(' ');
  if (hashtagsArray.length > 5) {
    hashtagInput.setCustomValidity('Хэш-тегов не может быть больше пяти');
  } else {
    for (var i = 0; i < hashtagsArray.length; i++) {
      if (!hashtagsArray[i].startsWith('#')) {
        hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа "#" (решётка)');
      } else if (hashtagsArray[i].split('#').length > 2) {
        hashtagInput.setCustomValidity('Хэш-теги должны разделяться пробелами');
      } else if (hashtagsArray.indexOf(hashtagInput.value.split(' ')[i]) !== i) {
        hashtagInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      } else if (hashtagsArray[i].length > 20) {
        hashtagInput.setCustomValidity('Максимальная длина одного хэш-тега должна быть не больше 20 символов');
      } else if (hashtagsArray[i].split('').length < 2) {
        hashtagInput.setCustomValidity('Минимальная длина одного хештега 2');
      } else if (!hashtagsArray[i].match(/^#[0-9a-zA-Zа-яА-Я]+$/)) {
        hashtagInput.setCustomValidity('Cтрока после решётки должна состоять из букв и чисел');
      }
    }
  }
};

var onFocusField = function () {
  isFocusField = true;
};

var onBlurField = function () {
  isFocusField = false;
};

hashtagInput.addEventListener('focus', onFocusField);
hashtagInput.addEventListener('blur', onBlurField);

descriptionInput.addEventListener('focus', onFocusField);
descriptionInput.addEventListener('blur', onBlurField);

uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  onValidateHashtagInput();
  onValidateCommentInput();
});


function onHashtagsFieldValid() {
  hashtagInput.style.outline = '';
  hashtagInput.setCustomValidity('');
}

hashtagInput.addEventListener('change', onHashtagsFieldValid);
