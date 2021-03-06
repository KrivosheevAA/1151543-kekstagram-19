'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  var btnClose = pictureContainer.querySelector('.big-picture__cancel');
  var commentsContainer = pictureContainer.querySelector('.social__comments');
  var btnLoadMore = pictureContainer.querySelector('.comments-loader');
  var counSocialComment = document.querySelector('.comments-current');
  var counComment = document.querySelector('.social__comment-count');
  var currentComments = [];
  var countLoadComments = 0;

  window.preview = {
    clearCommentData: function () {
      commentsContainer.innerHTML = '';
      countLoadComments = 0;
    },

    addPictureInfo: function (picture) {
      pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
      pictureContainer.querySelector('.likes-count').textContent = picture.likes;
      pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
      pictureContainer.querySelector('.social__caption').textContent = picture.description;
    },

    loadMoreComments: function (count) {
      countLoadComments += count;

      for (var i = 0; i < count; i++) {
        if (currentComments[0]) {
          commentsContainer.appendChild(window.preview.renderComment(currentComments[0]));
        }
        currentComments.splice(0, 1);
      }

      if (currentComments.length === 0) {
        btnLoadMore.classList.add('hidden');
      }
      counSocialComment.textContent = countLoadComments.toString();
    },

    renderComment: function (comment) {
      var createContainerComment = document.createElement('li');
      createContainerComment.classList.add('social__comment');
      var createImgElement = document.createElement('img');
      createImgElement.classList.add('social__picture');
      createImgElement.src = comment.avatar;
      createImgElement.alt = 'Аватар комментатора фотографии';
      createImgElement.width = window.constants.AVATAR.SIZE;
      createImgElement.height = window.constants.AVATAR.SIZE;
      var createDescriptionElement = document.createElement('p');
      createDescriptionElement.classList.add('social__text');
      createDescriptionElement.textContent = comment.message;
      createContainerComment.appendChild(createImgElement);
      createContainerComment.appendChild(createDescriptionElement);
      commentsContainer.appendChild(createContainerComment);

      return createContainerComment;
    },

    showElementPicture: function () {
      document.body.classList.add('modal-open');
      pictureContainer.classList.remove('hidden');
      btnLoadMore.classList.remove('hidden');
      counComment.classList.remove('hidden');
    },

    hiddenElementPicture: function () {
      pictureContainer.classList.add('hidden');
      document.body.classList.remove('modal-open');

    },

    showBigPost: function (picture) {
      window.preview.clearCommentData();
      currentComments = picture.comments.slice();
      window.preview.loadMoreComments(window.helpers.clamp(currentComments.length, 0, window.constants.MAX_COMMENTS_LENGTH));
      window.preview.addPictureInfo(picture);
      window.preview.openUploadOverlay();

    },

    onbtnLoadMore: function () {
      window.preview.loadMoreComments(window.helpers.clamp(currentComments.length, 0, window.constants.MAX_COMMENTS_LENGTH));
    },

    onGalleryOverlayClose: function () {
      window.preview.hiddenElementPicture();
      document.removeEventListener('keydown', window.preview.onGalleryOverlayEscPress);
      btnLoadMore.removeEventListener('click', window.preview.onbtnLoadMore);
      btnClose.removeEventListener('click', window.preview.onBtnCloseOverlayClick);
    },

    onGalleryOverlayEscPress: function (evt) {
      window.helpers.isEscEvent(evt, window.preview.onGalleryOverlayClose);
    },

    onBtnCloseOverlayClick: function () {
      window.preview.closeUploadOverlay();
      window.preview.hiddenElementPicture();
    },


    closeUploadOverlay: function () {
      btnClose.removeEventListener('click', window.preview.onBtnCloseOverlayClick);
      document.removeEventListener('keydown', window.preview.onGalleryOverlayEscPress);
    },

    openUploadOverlay: function () {
      window.preview.showElementPicture();
      btnLoadMore.addEventListener('click', window.preview.onbtnLoadMore);
      btnClose.addEventListener('click', window.preview.onBtnCloseOverlayClick);
      document.addEventListener('keydown', window.preview.onGalleryOverlayEscPress);
    },
  };
})();
