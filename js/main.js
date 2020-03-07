'use strict';

// var pictures = createPictures(25);

// renderPictureInDOM(pictures);


var blockCommentCouter = document.querySelector('.social__comment-count');
var loaderComments = document.querySelector('.comments-loader');

blockCommentCouter.classList.add('hidden');
loaderComments.classList.add('hidden');


// setBigPictureInfo(createPictures(25)[3]);


// buttonClose.addEventListener('click', function () {
//   bigPictureContainer.classList.add('hidden');
//   document.body.classList.remove('modal-open');
// });

//   document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     bigPictureContainer.classList.add('hidden');
//   }
//   });

//  задание 4.1

var uploadFileElement = document.querySelector('#upload-file');
var closeImageEdit = document.querySelector('#upload-cancel');
var pictureEditorElement = document.querySelector('.img-upload__overlay');
var isFocusField = false;

var hiddenBodyScroll = function () {
  document.body.classList.add('modal-open');
};

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

sliderPin.addEventListener('mouseup', function () {

});

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

// 4.3 задание

// var pictureLink = document.querySelectorAll('.picture');


// for (var i = 0; i < pictureLink.length; i++) {
//   (function (button, index) {
//     button.addEventListener('click', function () {
//       var picture = pictures[index];
//       setBigPictureInfo(picture);
//       hiddenBodyScroll();
//       bigPictureContainer.classList.remove('hidden');
//     });
//   })(pictureLink[i], i);
// }
