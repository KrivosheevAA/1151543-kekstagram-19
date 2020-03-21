'use strict';

(function () {

var uploadFileElement = document.querySelector('#upload-file');
var closeImageEdit = document.querySelector('#upload-cancel');
var pictureEditorElement = document.querySelector('.img-upload__overlay');
var isFocusField = false;
var scaleControls = document.querySelector('.img-upload__scale');
var valueScale = scaleControls.querySelector('.scale__control--value');
var imgUploadPreview = document.querySelector('.img-upload__preview');
var sliderPin = document.querySelector('.effect-level__pin');

window.form = {
    hiddenBodyScroll: function () {
      document.body.classList.add('modal-open');
    },

    onFileChange: function () {
      window.form.hiddenBodyScroll();
      pictureEditorElement.classList.remove('hidden');
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
  };

uploadFileElement.addEventListener('change', window.form.onFileChange);

closeImageEdit.addEventListener('click', function () {
  pictureEditorElement.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && !isFocusField) {
    pictureEditorElement.classList.add('hidden');
  }
});

scaleControls.addEventListener('click', window.form.onScaleClick);

sliderPin.addEventListener('mouseup', function () {

});

})();
