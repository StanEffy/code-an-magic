'use strict';

(function () {

  // Useful values
  let setupUserPic = document.querySelector('.upload');
  
  let shiftX;
  let shiftY;
  // Add draggable setup

  setupUserPic.addEventListener('mousedown', function (evt) {
    setupUserPic.style.cursor = 'grabbing';
    shiftX = evt.offsetX;
    shiftY = evt.offsetY;

    if (evt.currentTarget === setup.querySelector('input')) {
      evt.preventDefault();
    }

    let setupMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      if (moveEvt.currentTarget === setup.querySelector('input')) {
        moveEvt.preventDefault();
      }
      setup.style.left = (moveEvt.pageX + 365) + 'px';
      setup.style.top = (moveEvt.pageY - 35) + 'px';
    };

    document.addEventListener('mousemove', setupMouseMoveHandler);

    let setupUserPicMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      if (upEvt.currentTarget === setup.querySelector('input')) {
        upEvt.preventDefault();
      }

      document.removeEventListener('mousemove', setupMouseMoveHandler);
      document.removeEventListener('mouseup', setupUserPicMouseUpHandler);
    };

    document.addEventListener('mouseup', setupUserPicMouseUpHandler);
  });


})();
