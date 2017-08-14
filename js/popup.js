(function () {
  'use strict';

  function waitToHidePopup(popup) {
    setTimeout(function () {
      popup.classList.add('popup_hidden');
    }, 10000);
  }

  function showPopup(popup) {
    popup.classList.remove('popup_hidden');
  }

  function isPopupExpired(token) {
    if (!token) {
      return true;
    }

    var expirationTime = 1000 * 60 * 60 * 2; // 2 hours
    return (Date.now() - token.timestamp) > expirationTime;
  }

  function setPopupToken() {
    var token = {timestamp: new Date().getTime()};
    sessionStorage.setItem('popup', JSON.stringify(token));
  }

  function onCloseListener(popup) {
    var closeButton = popup.querySelector('.popup_close');

    closeButton.addEventListener('click', function () {
      popup.classList.add('popup_hidden');
      return false;
    });
  }

  function initPopup(popup) {
    var token = JSON.parse(sessionStorage.getItem('popup'));

    if (isPopupExpired(token)) {
      showPopup(popup);
      onCloseListener(popup);
      waitToHidePopup(popup);
      setPopupToken();
    }
  }

  Drupal.behaviors.popup = {
    attach: function (context) {
      var popup = context.querySelector('.popup');
      if (popup) {
        initPopup(popup);
      }
    }
  };

})();
