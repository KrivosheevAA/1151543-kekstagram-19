'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  window.preview = {
    addPictureInfo: function (picture) {
      pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
      pictureContainer.querySelector('.likes-count').textContent = picture.likes;
      pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
      pictureContainer.querySelector('.social__caption').textContent = picture.description;
      pictureContainer.querySelector('.social__comments').appendChild(window.picture.renderCommentElement(picture.comments));
    },

    getCommentNode: function () {
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
      for (var i = 0; i < comments.length; i++) {
        var commentElement = window.preview.getCommentNode();
        commentElement.querySelector('.social__picture').src = comments[i].avatar;
        commentElement.querySelector('.social__picture').alt = comments[i].name;
        commentElement.querySelector('.social__text').textContent = comments[i].message;
        fragment.appendChild(commentElement);
      }

      return fragment;
    },
  };
  window.backend.toLoadData(window.preview.addPictureInfo, window.preview.renderCommentElement);
})();
