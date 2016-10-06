window.addEventListener('scroll', function(e) {
  if (window.scrollY > 100) {
      document.body.classList.add('menu--fixed');
  } else {
      document.body.classList.remove('menu--fixed');
  }
});


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

})();