'use strict';

(function () {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  window.picture = {
    createComments: function (count) {
      var comments = [];
      for (var i = 0; i < count; i++) {
        comments[i] = {
          avatar: 'img/avatar-' + window.helpers.getRandomNumber(window.constants.NAME_AVATAR.MIN, window.constants.NAME_AVATAR.MAX) + '.svg',
          message: window.helpers.getRandomArrayElement(window.constants.COMMENTS),
          name: window.helpers.getRandomArrayElement(window.constants.NAMES),
        };
      }
      return comments;
    },
    createPictures: function (count) {
      var pictures = [];
      for (var i = 0; i < count; i++) {
        pictures[i] = {
          url: 'photos/' + (i + 1) + '.jpg',
          description: 'описание фотографии',
          likes: window.helpers.getRandomNumber(window.constants.PHOTO.LIKE.MIN, window.constants.PHOTO.LIKE.MAX),
          comments: this.createComment(window.helpers.getRandomNumber(window.constants.COMMENT.MIN, window.constants.COMMENT.MAX))
        };
      }
      return pictures;
    },

    createPictureElement: function (picture) {
      var clonePictureElement = pictureTemplate.cloneNode(true);
      clonePictureElement.querySelector('.picture__img').src = picture.url;
      clonePictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
      clonePictureElement.querySelector('.picture__likes').textContent = picture.likes;

      return clonePictureElement;
    },

    renderPictureInDOM: function (pictures) {
      var picturesContainer = document.querySelector('.pictures');
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < pictures.length; i++) {
        fragment.appendChild(this.createPictureElement(pictures[i]));
      }
      return picturesContainer.appendChild(fragment);
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
        var commentElement = this.getCommentNode();
        commentElement.querySelector('.social__picture').src = comments[i].avatar;
        commentElement.querySelector('.social__picture').alt = comments[i].name;
        commentElement.querySelector('.social__text').textContent = comments[i].message;
        fragment.appendChild(commentElement);
      }

      return fragment;
    },
  };
})();
