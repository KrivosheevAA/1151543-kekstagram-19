'use strict';

(function () {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  window.picture = {
  createPictureElement: function (picture) {
    var clonePictureElement = pictureTemplate.cloneNode(true);
      clonePictureElement.querySelector('.picture__img').src = picture.url;
      clonePictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
      clonePictureElement.querySelector('.picture__likes').textContent = picture.likes;
      fragment.appendChild(clonePictureElement);

      clonePictureElement.addEventListener('click', function () {
        window.preview.addPictureInfo(picture);
      });

      return clonePictureElement;
    },

  renderPictureInDOM: function (pictures) {
    for (var i = 0; i < pictures.length; i++) {
      fragment.appendChild(window.picture.createPictureElement(pictures[i]));
    }
    return picturesContainer.appendChild(fragment);
    },

  errorHandler: function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
    },
  };

  window.backend.toLoadData(window.picture.renderPictureInDOM, window.picture.errorHandler);
})();
