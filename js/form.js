'use strict';

(function () {

  var uploadFileElement = document.querySelector('#upload-file');
  var closeImageEdit = document.querySelector('#upload-cancel');
  var pictureEditorElement = document.querySelector('.img-upload__overlay');
  var scaleControls = document.querySelector('.img-upload__scale');
  var valueScale = scaleControls.querySelector('.scale__control--value');
  var imgUploadPreview = document.querySelector('.img-upload__preview');
  var form = document.querySelector('.img-upload__form');
  var successTemplate = document.querySelector('#success').content;
  var errorTemplate = document.querySelector('#error').content;
  var mainLayout = document.querySelector('.site-content');

  window.form = {
    hiddenBodyScroll: function () {
      document.body.classList.add('modal-open');
    },

    onFileChange: function () {
      document.addEventListener('keydown', window.form.onDocumentKeyDown);
      window.form.hiddenBodyScroll();
      pictureEditorElement.classList.remove('hidden');
      closeImageEdit.addEventListener('click', window.form.oncloseImageEditor);
      window.effects.makeDeafultFilter();
    },

    getScaleValue: function () {
      return parseInt(valueScale.value, 10);
    },

    setScaleValue: function (value) {
      valueScale.value = value;
    },

    setCSSScaleValue: function (value) {
      return 'scale(' + value / 100 + ')';
    },

    transformValueInPercent: function (value) {
      return value + '%';
    },

    changeZoom: function (step) {
      var currentValue = window.form.getScaleValue();
      var resultValue = currentValue + step;

      if (resultValue > 100) {
        resultValue = 100;
      }

      if (resultValue < 25) {
        resultValue = 25;
      }

      window.form.setScaleValue(window.form.transformValueInPercent(resultValue));
      imgUploadPreview.style.transform = window.form.setCSSScaleValue(resultValue);
    },

    onScaleClick: function (evt) {
      if (evt.target.classList.contains('scale__control--smaller')) {
        window.form.changeZoom(-25);
      }

      if (evt.target.classList.contains('scale__control--bigger')) {
        window.form.changeZoom(25);
      }
    },

    oncloseImageEditor: function () {
      pictureEditorElement.classList.add('hidden');
      document.body.classList.remove('modal-open');
    },

    onDocumentKeyDown: function (evt) {
      if (evt.key === 'Escape' && !window.validation.isFocusField) {
        pictureEditorElement.classList.add('hidden');
        closeImageEdit.removeEventListener('click', window.form.oncloseImageEditor);
        document.removeEventListener('keydown', window.form.onDocumentKeyDown);
      }
    },

    closeUploadOverlay: function () {
      pictureEditorElement.classList.add('hidden');
      document.body.classList.remove('modal-open');
      form.reset();
    },

    renderSuccessMessege: function () {
      var clone = successTemplate.cloneNode(true);
      mainLayout.appendChild(clone);
      var btnSuccess = mainLayout.querySelector('.success').querySelector('.success__button');
      btnSuccess.addEventListener('click', function () {
        mainLayout.removeChild(mainLayout.querySelector('.success'));
      });
    },

    renderErrorMessege: function () {
      var clone = errorTemplate.cloneNode(true);
      mainLayout.appendChild(clone);
      var btnError = mainLayout.querySelector('.error').querySelector('.error__button');
      btnError.addEventListener('click', function () {
        mainLayout.removeChild(mainLayout.querySelector('.error'));
      });
    },

    onEscClose: function (evt) {
      if (evt.key === 'Escape') {
        var modal = mainLayout.querySelector('.success') || mainLayout.querySelector('.error');
        mainLayout.removeChild(modal);
      }
    },

    onClickOverlay: function (evt) {
      if (evt.target.classList.contains('success' || 'error')) {
        mainLayout.removeChild(evt.target);
      }
    },
  };
  uploadFileElement.addEventListener('change', window.form.onFileChange);
  scaleControls.addEventListener('click', window.form.onScaleClick);
})();
