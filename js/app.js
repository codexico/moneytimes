console.log('app');

window.addEventListener('scroll', function(e) {
  if (window.scrollY > 100) {
      document.body.classList.add('menu--fixed');
  } else {
      document.body.classList.remove('menu--fixed');
  }
});
