(function () {
  'use strict';

  function addBlankTolinks(el) {
    el.querySelectorAll('a:not([target="_blank"]):not(.site-logo)')
      .forEach(function (link) {
        link.setAttribute('target', '_blank');
      });
  }

  Drupal.behaviors.targetBlank = {
    attach: function (context) {
      addBlankTolinks(context);
    }
  };

})();
