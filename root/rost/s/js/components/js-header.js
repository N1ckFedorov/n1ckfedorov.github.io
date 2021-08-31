if (document.querySelector('.js-open-mmenu')) {

  document.querySelector('.js-open-mmenu').onclick = function () {
    document.querySelector('.mobile-burger').classList.add('show');
  }
  document.querySelector('.js-close-mmenu').onclick = function () {
    document.querySelector('.mobile-burger').classList.remove('show');
  }


  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      document.querySelector('.mobile-burger').classList.remove('show');
    }
  });

}
