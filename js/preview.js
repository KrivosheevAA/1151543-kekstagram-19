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
  };
})();
