'use strict';

(function () {
  var picturesData = [];
  var picturesContainer = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  var filterBlock = document.querySelector('.img-filters');
  var activeFilterButton = document.querySelector('.img-filters__button--active');
  var sortPicture = {
    'filter-default': function (array) {
      return array;
    },
    'filter-random': function (array) {
      array.length = window.constants.SORTPOST.RANDOM_POST;
      var randomPhotos = array;
      randomPhotos = window.helpers.shuffleArray(randomPhotos);
      return randomPhotos;
    },
    'filter-discussed': function (array) {
      return array.sort(function (a, b) {
        return b.comments.length - a.comments.length;
      });
    },
  };

  window.picture = {
    createPictureElement: function (picture) {
      var clonePictureElement = pictureTemplate.cloneNode(true);
      clonePictureElement.querySelector('.picture__img').src = picture.url;
      clonePictureElement.querySelector('.picture__likes').textContent = picture.likes;
      clonePictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

      return clonePictureElement;
    },

    renderPictureInDOM: function (picture) {
      var fragment = document.createDocumentFragment();
      picture.forEach(function (item) {
        var pictureItem = window.picture.createPictureElement(item);
        pictureItem.addEventListener('click', function () {
          window.preview.showBigPost(item);
        });
        fragment.appendChild(pictureItem);
      });
      picturesContainer.appendChild(fragment);
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

    onDataLoad: function (picture) {
      picturesData = picture;
      window.picture.renderPictureInDOM(picturesData);
      filterBlock.classList.remove('img-filters--inactive');
    },

    makeButtonInactive: function (evt) {
      activeFilterButton.classList.remove('img-filters__button--active');
      activeFilterButton = evt.target;
      activeFilterButton.classList.add('img-filters__button--active');
    },

    clearPictures: function () {
      var pictureList = picturesContainer.querySelectorAll('.picture');
      var arrayPictures = Array.prototype.slice.call(pictureList);

      arrayPictures.forEach(function (item) {
        item.parentNode.removeChild(item);
      });
    },

    onBtnSortClick: function (evt) {
      if (evt.target.tagName === 'BUTTON') {
        var sortArr = picturesData.slice();
        sortPicture[evt.target.id](sortArr);

        window.picture.clearPictures();
        window.helpers.debounce(window.picture.renderPictureInDOM(sortArr));
        window.picture.makeButtonInactive(evt);
      }
    },
  };
  filterBlock.addEventListener('click', window.picture.onBtnSortClick);
  window.backend.toLoadData(window.picture.onDataLoad, window.picture.errorHandler);
})();
