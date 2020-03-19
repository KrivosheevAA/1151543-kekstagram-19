'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  var commentsContainer = pictureContainer.querySelector('.social__comments');
  var btnLoadMore = pictureContainer.querySelector('.comments-loader');
  var counSocialComment = document.querySelector('.social__comment-count');
  var btnClose = pictureContainer.querySelector('.big-picture__cancel');

  window.preview = {
    addPictureInfo: function (picture) {
      console.log(comments);
      pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
      pictureContainer.querySelector('.likes-count').textContent = picture.likes;
      pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
      pictureContainer.querySelector('.social__caption').textContent = picture.description;
    },

    removeCommentList: function () {
      commentsContainer.innerHTML = '';
    },

    createCommentNode: function (comments) {
      var commentNumber = picture.comments.length > window.constants.COMMENT.MAX_COMMENTS_LENGTH ? window.constants.COMMENT.MAX_COMMENTS_LENGTH : picture.comments.length;
      for (var i = 0; i < commentNumber; i++) {
        var createContainerComment = document.createElement('li');
        createContainerComment.classList.add('social__comment');
        var createImgElement = document.createElement('img');
        createImgElement.classList.add('social__picture');
        createImgElement.width = window.constants.AVATAR.SIZE;
        createImgElement.height = window.constants.AVATAR.SIZE;
        var createDescriptionElement = document.createElement('p');
        createDescriptionElement.classList.add('social__text');
        createDescriptionElement.textContent = picture.comments[i];

        createContainerComment.appendChild(createImgElement);
        createContainerComment.appendChild(createDescriptionElement);
        commentsContainer.appendChild(createContainerComment);
      }
    },

    hiddenElementPicture: function () {
        pictureContainer.classList.remove('hidden');
        btnLoadMore.classList.add('hidden');
    },

    onOverlayKeydownEsc: function (evt) {
      window.util.isKeydownEsc(evt, closeUploadOverlay);
    },

    onBtnCloseOverlayKeydownEnter: function (evt) {
      window.util.isKeydownEnter(evt, closeUploadOverlay);
    },

    onBtnCloseOverlayClick: function () {
      closeUploadOverlay();
    },

    closeUploadOverlay: function () {
      pictureContainer.classList.add('hidden');
      btnClose.removeEventListener('click', onBtnCloseOverlayClick);
      btnClose.removeEventListener('keydown', onBtnCloseOverlayKeydownEnter);
      document.removeEventListener('keydown', onOverlayKeydownEsc);
      document.body.classList.remove('modal-open');
    },

    openUploadOverlay: function () {
      hiddenElementPicture();
      btnClose.addEventListener('click', onBtnCloseOverlayClick);
      btnClose.addEventListener('keydown', onBtnCloseOverlayKeydownEnter);
      document.addEventListener('keydown', onOverlayKeydownEsc);
    },

    showBigPost: function (picturesData) {
      document.body.classList.add('modal-open');
      window.preview.removeCommentList();
      window.preview.addPictureInfo(picturesData);
      window.preview.createCommentNode(picturesData);
      window.preview.openUploadOverlay();
    },
  };
})();
