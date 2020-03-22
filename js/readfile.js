'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooserPhoto = document.querySelector('#upload-file');
  var photoPreview = document.querySelector('.img-upload__preview img');

  fileChooserPhoto.addEventListener('change', function () {
    var file = fileChooserPhoto.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        photoPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
