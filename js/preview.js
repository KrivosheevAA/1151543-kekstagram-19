'use strict';

(function () {
  var pictureContainer = document.querySelector('.big-picture');
  var commentsContainer = pictureContainer.querySelector('.social__comments');
  var closePictureOverlayBtn = pictureContainer.querySelector('.big-picture__cancel');
  var commentCountElement = pictureContainer.querySelector('.social__comment-count');
  var loadMoreCommentsBtn = pictureContainer.querySelector('.social__comments-loader');
  var MAX_COMMENTS_LENGTH = 5;

//   var bigPicture = document.querySelector('.big-picture');
//   var bigPictureCancel = document.querySelector('.big-picture__cancel');
//   var body = document.querySelector('body');
//   var commentsLoader = document.querySelector('.comments-loader');
//   var socialCommentsList = document.querySelector('.social__comments');

//   var socialComment = socialCommentsList.querySelector('.social__comment');

//   var closeFullsize = function () {
//     bigPicture.classList.add('hidden');
//     var socialCommentItemsNew = socialCommentsList.querySelectorAll('.social__comment');
//     for (var k = socialCommentItemsNew.length - 1; k > 0; k--) {
//       socialCommentItemsNew[k].remove();
//     }
//     document.removeEventListener('keydown', onFullsizeEscPress);
//     body.classList.remove('modal-open');
//   };

//   var onFullsizeEscPress = function (evt) {
//     if (evt.key === window.consts.ESC_KEY) {
//       closeFullsize();
//     }
//   };

//   var insertDataComment = function (element, commentData) {
//     var socialCommentImg = element.querySelector('.social__picture');
//     socialCommentImg.src = commentData.avatar;
//     socialCommentImg.alt = commentData.name;
//     var socialCommentText = element.querySelector('.social__text');
//     socialCommentText.textContent = commentData.message;
//   };

//   var fullsize = function (photoItem) {

//     var bigPictureImg = document.querySelector('.big-picture__img img');
//     bigPictureImg.src = photoItem.url;
//     var likesСount = document.querySelector('.likes-count');
//     likesСount.textContent = photoItem.likes;
//     var commentsPublishedCount = document.querySelector('.comments-published');
//     var commentsСount = document.querySelector('.comments-count');
//     commentsСount.textContent = photoItem.comments.length;
//     var socialCaption = document.querySelector('.social__caption');
//     socialCaption.textContent = photoItem.description;

//     commentsLoader.classList.remove('hidden');

//     var commentsPublished = 0;

//     if (photoItem.comments.length <= MAX_COMMENTS_LENGTH) {
//       commentsPublished = photoItem.comments.length;
//       commentsLoader.classList.add('hidden');
//       commentsLoader.removeEventListener('click', onCommentsLoaderButton);
//     } else {
//       commentsPublished = MAX_COMMENTS_LENGTH;
//     }
//     commentsPublishedCount.textContent = commentsPublished;
//     insertDataComment(socialComment, photoItem.comments[0]);
//     for (var i = 1; i < commentsPublished; i++) {
//       var nextComment = socialComment.cloneNode(true);
//       insertDataComment(nextComment, photoItem.comments[i]);
//       socialCommentsList.appendChild(nextComment);
//     }
//     var commentsQuantity = 0;

//     var onCommentsLoaderButton = function () {
//       var commentsBalance = photoItem.comments.length;
//       commentsBalance = photoItem.comments.length - commentsPublished;

//       if (commentsBalance <= MAX_COMMENTS_LENGTH) {
//         commentsQuantity = photoItem.comments.length;
//         commentsLoader.classList.add('hidden');
//         commentsLoader.removeEventListener('click', onCommentsLoaderButton);
//       } else {
//         commentsQuantity = commentsPublished + MAX_COMMENTS_LENGTH;
//       }
//       for (var j = commentsPublished; j < commentsQuantity; j++) {
//         var additionalComment = socialComment.cloneNode(true);
//         insertDataComment(additionalComment, photoItem.comments[j]);
//         socialCommentsList.appendChild(additionalComment);
//       }
//       commentsPublished = commentsQuantity;
//       commentsPublishedCount.textContent = commentsPublished;
//     };

//     commentsLoader.addEventListener('click', onCommentsLoaderButton);

//     bigPicture.classList.remove('hidden');

//     document.addEventListener('keydown', onFullsizeEscPress);
//     bigPictureCancel.addEventListener('click', closeFullsize);
//     body.classList.add('modal-open');
//   };

//   // window.preview = {
//   //   preview: preview
//   // };
// })();


//   window.preview = {
//     addPictureInfo: function (picture) {
//       pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
//       pictureContainer.querySelector('.likes-count').textContent = picture.likes;
//       pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
//       pictureContainer.querySelector('.social__caption').textContent = picture.description;
//     },

//     createComment: function (comment) {
//       var commentElement = document.createElement('li');
//       var userIconElement = document.createElement('img');
//       var commentText = document.createTextNode(comment.message);

//       commentElement.classList.add('social__comment', 'social__text');

//       userIconElement.classList.add('social__picture');
//       userIconElement.src = comment.avatar;
//       userIconElement.alt = 'Аватар комментатора фотографии';
//       userIconElement.width = window.constants.AVATAR.SIZE;
//       userIconElement.height = window.constants.AVATAR.SIZE;

//       commentElement.appendChild(userIconElement);
//       commentElement.appendChild(commentText);

//     return commentElement;
//   },

//     // createCommentNode: function (comment) {
//     //   var createContainerComment = document.createElement('li');
//     //   createContainerComment.classList.add('social__comment');
//     //   var createImgElement = document.createElement('img');
//     //   createImgElement.classList.add('social__picture');
//     //   createImgElement.width = window.constants.AVATAR.SIZE;
//     //   createImgElement.height = window.constants.AVATAR.SIZE;
//     //   var createDescriptionElement = document.createElement('p');
//     //   createDescriptionElement.classList.add('social__text');
//     //   createContainerComment.appendChild(createImgElement);
//     //   createContainerComment.appendChild(createDescriptionElement);

//     //   return createContainerComment;
//     // },

//     fillCommentsContainer: function (commentsLength) {
//       console.log(comment);
//       var clonedComments = [];
//       var currentAddedComments = null;
//       currentAddedComments += commentsLength;

//       for (var i = 0; i < commentsLength; i++) {
//       commentsContainer.appendChild(createComment(clonedComments[0]));
//       clonedComments.splice(0, 1);
//       }

//       if (clonedComments.length === 0) {
//         loadMoreCommentsBtn.classList.add('hidden');
//       }
//        commentCountElement.textContent = currentAddedComments.toString();
//       },

//   // var onLoadMoreCommentsBtnClick = function (evt) {
//   //   evt.preventDefault();

//   //   fillCommentsContainer(window.utils.clamp(clonedComments.length, 0, MAX_COMMENTS_LENGTH));
//   // };

//   // var onPictureOverlayEscPress = function (evt) {
//   //   if (window.utils.isEscKeycode(evt)) {
//   //     closePictureOverlay();
//   //   }
//   // };

//   // var onClosePictureOverlayBtnClick = function () {
//   //   closePictureOverlay();
//   // };

//   // var closePictureOverlay = function () {
//   //   currentAddedComments = 0;

//   //   document.body.classList.remove('modal-open');
//   //   pictureOverlayContainer.classList.add('hidden');

//   //   closePictureOverlayBtn.removeEventListener('click', onClosePictureOverlayBtnClick);
//   //   document.removeEventListener('keydown', onPictureOverlayEscPress);
//   //   loadMoreCommentsBtn.removeEventListener('click', onLoadMoreCommentsBtnClick);
//   // };

//     renderCommentElement: function (picture) {
//       commentsContainer.innerHTML = '';

//     pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
//     pictureContainer.querySelector('.likes-count').textContent = picture.likes;
//     pictureContainer.querySelector('.comments-count').textContent = (picture.comments.length).toString();

//     var pictureDescriptionElement = pictureContainer.querySelector('.social__caption');

//     pictureDescriptionElement.textContent = picture.description ? picture.description : '';

//     clonedComments = picture.comments.slice();

//     loadMoreCommentsBtn.classList.toggle('hidden', (picture.comments.length <= 5));

//     fillCommentsContainer(window.helpers.clamp(clonedComments.length, 0, MAX_COMMENTS_LENGTH));

//     document.body.classList.add('modal-open');

//     pictureContainer.classList.remove('hidden');

//     // document.addEventListener('keydown', window.gallery.onGalleryOverlayEscPress);

//     // closePictureOverlayBtn.addEventListener('click', onClosePictureOverlayBtnClick);

//     // loadMoreCommentsBtn.addEventListener('click', onLoadMoreCommentsBtnClick);
//   },
// };


window.preview = {
addPictureInfo: function (picture) {
pictureContainer.querySelector('.big-picture__img').querySelector('img').src = picture.url;
 pictureContainer.querySelector('.likes-count').textContent = picture.likes;
  pictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
      pictureContainer.querySelector('.social__caption').textContent = picture.description;
      pictureContainer.querySelector('.social__comments').appendChild(window.preview.renderCommentElement(picture.comments));
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

      // return createContainerComment;
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

      // return fragment;
    },
  };
})();
