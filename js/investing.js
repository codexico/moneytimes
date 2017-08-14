(function () {
  'use strict';

  function showBlockIframe(id) {
    var block = document.getElementById(id);
    var iframe = block.querySelector('iframe');
    block.style.display = 'block';
    iframe.src = iframe.dataset.src;
  }


  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (w > 700) { // tablet or desktop
    showBlockIframe('block-bolsas');
    showBlockIframe('block-moedas');
  }

})();
