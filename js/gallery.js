'use strict';

(function () {
    var buttonClose = document.querySelector('.big-picture__cancel');
    var pictureContainer = document.querySelector('.big-picture');

    window.gallery = {
    onGalleryOverlayOpen: function () {
      pictureContainer.classList.remove('hidden');
      document.addEventListener('keydown', window.gallery.onGalleryOverlayEscPress);
    },

    onGalleryOverlayClose: function () {
      pictureContainer.classList.add('hidden');
      document.removeEventListener('keydown', window.gallery.onGalleryOverlayEscPress);
    },

    onGalleryOverlayEscPress: function (evt) {
      window.helpers.isEscEvent(evt, window.gallery.onGalleryOverlayClose);
    },
  };

  buttonClose.addEventListener('click', window.gallery.onGalleryOverlayClose);
})();
