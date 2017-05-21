(function() {

    var search_forms = document.getElementsByClassName('search_form');

    var search_form = search_forms[0];

    var open_icon = search_form.getElementsByClassName('search_form-icon_open');
    open_icon = open_icon[0];

    var close_icon = search_form.getElementsByClassName('search_form-icon_close');
    close_icon = close_icon[0];

    var search_block = search_form.getElementsByClassName('search_form-block');
    search_block = search_block[0];

    var search_input = search_block.getElementsByClassName('form-search');
    search_input = search_input[0];

    open_icon.addEventListener('click', function (e) {
        open_icon.classList.add('hidden');
        close_icon.classList.remove('hidden');
        search_block.classList.remove('hidden');
        search_input.focus();
        return false;
    });

    close_icon.addEventListener('click', function (e) {
        close_icon.classList.add('hidden');
        open_icon.classList.remove('hidden');
        search_block.classList.add('hidden');
        return false;
    });

    var a2aFbClass = 'a2a_button_facebook';
    var a2aFbSelector = '.' + a2aFbClass;
    var a2aFbLikeShareClass = 'a2a_button_facebook_like';

    function parseFB(context) {
        var elements = context.querySelectorAll(a2aFbSelector);
        var item = null;

        for (var i = 0; i < elements.length; i++) {
            item = elements[i];
            FB.XFBML.parse(item);
        }
    }

    function changeAddToAnyFbShareButton() {
        var elements = document.querySelectorAll(a2aFbSelector);

        var item = null;

        for (var i = 0; i < elements.length; i++) {
            item = elements[i];
            item.classList.remove(a2aFbClass);
            item.classList.add(a2aFbLikeShareClass);

            item.dataset.layout = "button";
            item.dataset.action = "like";
            item.dataset.size = "small";
            // item.dataset.showFaces = "false";
            item.dataset.share = "true";
            item.dataset.width = "143";
        }
    }

    function changeFbShareButtonOnLoadMore(context) {
        var elements = context.querySelectorAll(a2aFbSelector);
        //
        var item = null;
        var article = null;
        var href = null;

        for (var i = 0; i < elements.length; i++) {
            item = elements[i];
            item.classList.remove(a2aFbClass);
            item.classList.add('a2a_button_facebook_loaded');
            article = item.parentNode.parentNode.parentNode;
            href = article.querySelector('.node__title-link').href;

            item.innerHTML = '<div class="fb-like" data-href="' + href + '" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"  data-width="126"></div>';

            FB.XFBML.parse(item);
        }
    }

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w > 700) { // tablet or desktop
        changeAddToAnyFbShareButton();

        Drupal.behaviors.FBbuttons = {
            attach: function (context, settings) {
                changeFbShareButtonOnLoadMore(context);
            }
        };
    }


    function insertLinkBetweenNews() {
        var $linkUltimas = jQuery('<h2 class="view-frontpage-link_title"><a class="view-frontpage-link_link" href="/ultimas-noticias">Últimas Notícias</a></h2>');
        $linkUltimas.insertAfter('.view-frontpage .views-row:nth-child(3)');
    }
    insertLinkBetweenNews();

    function insertPatrocinadoBetweenNews() {
        var $patrocinado = jQuery('.view-patrocinado-home');
        $patrocinado.insertAfter('.view-frontpage .views-row:nth-child(6)');
    }
    insertPatrocinadoBetweenNews();

    function addBlankTolinks(el) {
        el.querySelectorAll('a:not([target="_blank"]):not(.site-logo)')
            .forEach(function(link) {
                link.setAttribute('target', '_blank');
            });
    }
    // Drupal.behaviors.targetBlank = {
    //     attach: function (context) {
    //         addBlankTolinks(context);
    //     }
    // };

})();