(function() {
    var giro = document.getElementById('block-mailchimpsubscriptionformrecebaanalisesgratis');

    // fix placeholder
    var giroInput = giro.querySelector('.form-email');
    giroInput.placeholder = 'Digite seu e-mail';

    // clone giro block
    var giroClone = giro.cloneNode(true);

    // adapt form
    var legend = '<span class="block-mailchimp-signup-legend">Receba notícias e análises com o <b>Giro Money Times</b>! Deixe o seu-email e pronto!</span>'
    var giroForm = giroClone.querySelector('form');
    giroForm.childNodes[0].textContent = '';
    giroForm.insertAdjacentHTML('beforebegin', legend);

    // find elements to insert into
    var ingiro = document.querySelectorAll('.js-insert-giro');

    // insert giro into
    for (var i = 0; i < ingiro.length; i++) {
        ingiro[i].innerHTML= giroClone.outerHTML;
    }



    (function initFooterNewsletterForm() {
        var el = document.getElementById('block-mailchimpsubscriptionformgiromoneytimes');
        // remove text messing with layout
        var newsletterForm = {};
        var newsletterInput = giro.querySelector('.form-email');
        if (el) {
            newsletterForm = el.getElementsByTagName('form');
            newsletterForm[0].firstChild.textContent = '';
            newsletterInput = el.querySelector('.form-email');
            newsletterInput.placeholder = 'Digite seu e-mail';
        }
        window.setTimeout(function () {
            el.classList.add('show');
        }, 3500);

        window.setTimeout(function () {
            // if input empty
            if (!newsletterInput.value) {
                el.classList.remove('show');
            }
        }, 25000);
    }());
})();