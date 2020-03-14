'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  var pictureLink = document.querySelectorAll('.picture');
  window.preview = {
    addPictureInfo: function (picture) {
      pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
      pictureContainer.querySelector('.likes-count').textContent = picture.likes;
      pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
      pictureContainer.querySelector('.social__caption').textContent = picture.description;
      pictureContainer.querySelector('.social__comments').appendChild(window.preview.renderCommentElement(picture.comments));

      // window.gallery.onGalleryOverlayOpen();
    },

    createCommentNode: function () {
      var createContainerComment = document.createElement('li');
      createContainerComment.classList.add('social__comment');
      var createImgElement = document.createElement('img');
      createImgElement.classList.add('social__picture');
      createImgElement.width = window.constants.AVATAR.SIZE;
      createImgElement.height = window.constants.AVATAR.SIZE;
      var createDescriptionElement = document.createElement('p');
      createDescriptionElement.classList.add('social__text');
      createContainerComment.appendChild(createImgElement);
      createContainerComment.appendChild(createDescriptionElement);

      return createContainerComment;
    },

    renderCommentElement: function (comments) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < window.helpers.clamp(comments.length, 0, 5); i++) {
        console.log(comments[i]);
        var commentElement = window.preview.createCommentNode();
        commentElement.querySelector('.social__picture').src = comments[i].avatar;
        commentElement.querySelector('.social__picture').alt = comments[i].name;
        commentElement.querySelector('.social__text').textContent = comments[i].message;
        fragment.appendChild(commentElement);
      }

      return fragment;
    },
  };
})();
