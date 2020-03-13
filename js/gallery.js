'use strict';

(function () {
    var buttonClose = document.querySelector('.big-picture__cancel');
    var pictureContainer = document.querySelector('.big-picture');

    window.gallery = {
    onGalleryOverlayOpen: function () {
      pictureContainer.classList.remove('hidden');
      document.addEventListener('keydown', onGalleryOverlayEscPress);
    },

    onGalleryOverlayClose: function () {
      pictureContainer.classList.add('hidden');
      document.removeEventListener('keydown', onGalleryOverlayEscPress);
    },

    onGalleryOverlayEscPress: function (evt) {
      window.helpers.isEscEvent(evt, onGalleryOverlayClose);
    },
  };

  buttonClose.addEventListener('click', window.gallery.onGalleryOverlayClose);
})();
