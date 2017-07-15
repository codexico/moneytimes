(function initGiro() {
  'use strict';

  var giro = document.getElementById('block-mailchimpsubscriptionformrecebaanalisesgratis');

    // fix placeholder
  var giroInput = giro.querySelector('.form-email');
  giroInput.placeholder = 'Digite seu e-mail';

    // clone giro block
  var giroClone = giro.cloneNode(true);

    // adapt form
  var legend = '<span class="block-mailchimp-signup-legend">Receba notícias e análises com o <b>Giro Money Times</b>! Deixe o seu-email e pronto!</span>';
  var giroForm = giroClone.querySelector('form');
  giroForm.childNodes[0].textContent = '';
  giroForm.insertAdjacentHTML('beforebegin', legend);

    // find elements to insert into
  var ingiro = document.querySelectorAll('.js-insert-giro');

    // insert giro into
  for (var i = 0; i < ingiro.length; i++) {
    ingiro[i].innerHTML = giroClone.outerHTML;
  }

  function deFixFooterNewsletterFormPosition(el) {
    el.classList.remove('fixed');
    el.parentNode.classList.remove('mailchimp-parent--fixed');
    // el.querySelector('.fa-close').remove();
  }

  function showFixedNewsletterForm(el, newsletterInput) {
        // show
    window.setTimeout(function () {
      el.classList.add('show');
    }, 3500);
        // return to original position
    window.setTimeout(function () {
            // if input empty
      if (!newsletterInput.value) {
        deFixFooterNewsletterFormPosition(el);
      }
    }, 25000);
  }

  function addCloseIcon(el, input) {
    var $closeIcon = jQuery('<i class="fa fa-close"></i>');
    $closeIcon.css({position: 'absolute', top: '1rem', right: '1rem'});
    jQuery(el).append($closeIcon);

    $closeIcon.on('click', function () {
      if (!input.value) {
        deFixFooterNewsletterFormPosition(el);
      }
    });
  }

  function initFooterNewsletterForm() {
    var el = document.getElementById('block-mailchimpsubscriptionformgiromoneytimes');
        // remove text messing with layout
    var newsletterForm = {};
    var newsletterInput = giro.querySelector('.form-email');

        // customize mailchimp form
    if (el) {
      // addCloseIcon(el, newsletterInput);

      el.classList.add('fixed');
      el.parentNode.classList.add('mailchimp-parent--fixed');

      newsletterForm = el.getElementsByTagName('form');
      newsletterForm[0].firstChild.textContent = '';
      newsletterInput = el.querySelector('.form-email');
      newsletterInput.placeholder = 'Digite seu e-mail';

      // if (window.location.pathname === '/') {
      //   showFixedNewsletterForm(el, newsletterInput);
      // } else {
        el.classList.add('show');
        deFixFooterNewsletterFormPosition(el);
      // }
    }
  }

  initFooterNewsletterForm();
})();
