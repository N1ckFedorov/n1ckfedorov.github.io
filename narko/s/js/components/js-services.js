(function () {
  $(window).on('load resize', function () {
    if (($(window).width() <= 1199) && ($(window).width() > 499) ){
      $(".c-services-item:even").filter(':last-child').parent('.c-services__items').addClass('odd-items');
    }else {
      $(".c-services-item:even").filter(':last-child').parent('.c-services__items').removeClass('odd-items');
    }
  })
})();