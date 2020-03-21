'use strict';

(function () {
var descriptionInput = document.querySelector('.text__description');
var hashtagInput = document.querySelector('.text__hashtags');
var uploadForm = document.querySelector('.img-upload__form');
var isFocusField = false;

window.validation = {
    onValidateCommentInput: function () {
      if (descriptionInput.value.split('').length > 140) {
        descriptionInput.setCustomValidity('Комментарий не должен превышать 140 символов');
      }
    },

    onDescriptionFieldValid: function () {
      descriptionInput.style.outline = '';
      descriptionInput.setCustomValidity('');
    },


    onValidateHashtagInput: function () {
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
    },

    onFocusField: function () {
      isFocusField = true;
    },

    onBlurField: function () {
      isFocusField = false;
    },


    onHashtagsFieldValid: function () {
      hashtagInput.style.outline = '';
      hashtagInput.setCustomValidity('');
    },

  };
hashtagInput.addEventListener('change', window.validation.onHashtagsFieldValid);
descriptionInput.addEventListener('change', window.validation.onDescriptionFieldValid);

hashtagInput.addEventListener('focus', window.validation.onFocusField);
hashtagInput.addEventListener('blur', window.validation.onBlurField);

descriptionInput.addEventListener('focus', window.validation.onFocusField);
descriptionInput.addEventListener('blur', window.validation.onBlurField);

uploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  window.validation.onValidateHashtagInput();
  window.validation.onValidateCommentInput();
});
})();
