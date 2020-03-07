'use strict';

(function () {
  var buttonClose = document.querySelector('.big-picture__cancel');
  var pictureContainer = document.querySelector('.big-picture');
  // var onGalleryOverlayOpen = function () {
  //   pictureContainer.classList.remove('hidden');
  //   document.addEventListener('keydown', onGalleryOverlayEscPress);
  // };

  var onGalleryOverlayClose = function () {
    pictureContainer.classList.add('hidden');
    document.removeEventListener('keydown', onGalleryOverlayEscPress);
  };

  var onGalleryOverlayEscPress = function (evt) {
    window.helpers.isEscEvent(evt, onGalleryOverlayClose);
  };

  buttonClose.addEventListener('click', onGalleryOverlayClose);
})();
