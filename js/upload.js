//file upload.js
'use strict';
(function() {
  let URL = 'https://javascript.pages.academy/code-and-magick/data';
//https://javascript.pages.academy/code-and-magick/data
  window.upload = function(data, onSuccess) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function() {
          onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
