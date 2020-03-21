'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  var btnClose = pictureContainer.querySelector('.big-picture__cancel');
  var btnLoadMore = pictureContainer.querySelector('.comments-loader');

window.gallery = {
  onGalleryOverlayClose: function () {
    pictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', window.gallery.onGalleryOverlayEscPress);
  },

  onGalleryOverlayEscPress: function (evt) {
    window.helpers.isEscEvent(evt, window.gallery.onGalleryOverlayClose);
  },

    onOverlayKeydownEsc: function (evt) {
      window.util.isKeydownEsc(evt, window.gallery.closeUploadOverlay);
    },

    onBtnCloseOverlayKeydownEnter: function (evt) {
      window.util.isKeydownEnter(evt, window.gallery.closeUploadOverlay);
    },

    onBtnCloseOverlayClick: function () {
      window.preview.closeUploadOverlay();
    },

    closeUploadOverlay: function () {
      pictureContainer.classList.add('hidden');
      btnClose.removeEventListener('click', window.gallery.onBtnCloseOverlayClick);
      btnClose.removeEventListener('keydown', window.gallery.onBtnCloseOverlayKeydownEnter);
      document.removeEventListener('keydown', window.gallery.onOverlayKeydownEsc);
      document.body.classList.remove('modal-open');
    },

    openUploadOverlay: function () {
      window.preview.hiddenElementPicture();
      btnClose.addEventListener('click', window.preview.onBtnCloseOverlayClick);
      btnClose.addEventListener('keydown', window.preview.onBtnCloseOverlayKeydownEnter);
      document.addEventListener('keydown', window.preview.onOverlayKeydownEsc);
    },
};
 btnClose.addEventListener('click', window.gallery.onGalleryOverlayClose);
})();
