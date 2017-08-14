(function () {
  'use strict';

  // reload page after period of inactivity
  var inactivityPeriod = 4 * 60 * 1000; // 4 minutes
  var requestedTimeout = false;
  var inactivityTimer = 0;

  function startInactiveTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function reloadTimeout() {
      window.location.reload(false);
    }, inactivityPeriod);
  }

  function requestTimeout() {
    window.requestAnimationFrame(function restartTimeout() {
      startInactiveTimer();
      requestedTimeout = false;
    });
  }

  function onUserActvity() {
    if (!requestedTimeout) {
      requestTimeout();
      requestedTimeout = true;
    }
  }

  function initInactivityListeners() {
    window.addEventListener('scroll', onUserActvity);
    window.addEventListener('resize', onUserActvity);
    window.addEventListener('keyup', onUserActvity);
    window.addEventListener('mousemove', onUserActvity);
    window.addEventListener('click', onUserActvity);
    window.addEventListener('touchmove', onUserActvity);
    window.addEventListener('touchstart', onUserActvity);
    window.addEventListener('pointermove', onUserActvity);
    window.addEventListener('pointerdown', onUserActvity);
    window.addEventListener('focus', onUserActvity);
    window.addEventListener('blur', onUserActvity);
    window.addEventListener('play', onUserActvity);
    window.addEventListener('playing', onUserActvity);
  }

  function initInactivity() {
    var fbVideo = document.getElementsByClassName('fb-video');
    if (!fbVideo.length) {
      startInactiveTimer();
      initInactivityListeners();
    }
  }

  window.addEventListener('load', initInactivity);
})();
