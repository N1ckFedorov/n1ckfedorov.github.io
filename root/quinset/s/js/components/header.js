let body = $('body');

(function () {

  let lWrapper = $('.l-wrapper')
  let header = $('.c-header')
  let headerWrapper = $('.c-header__wrapper')
  let headerInner = $('.c-header__inner')
  let headerMobileContent = $('.c-header__mobile-content')
  let innerWidth = $(window).innerWidth()

  // Fixed header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 1) {
      headerWrapper.addClass('fixed-header');
    }
    else {
      headerWrapper.removeClass('fixed-header');
    }
  });

  // Mobile Button 
  $('.c-header__mmenu-toggle').on('click', function () {
    body.toggleClass('fixed')
    $(this).toggleClass('active')
    $('.c-header').toggleClass('mobile-menu')

    // Дублируем мобильное меню

    if (!$(this).hasClass("active")) {
      $('.c-header__mobile-content').html('')
    } else {
      headerInner.clone().appendTo(headerMobileContent).addClass('c-header__inner--mobile')
    }


  })

})();


// Удаляем все классы под планшет+

$(window).on('resize load' , function(){

  if(innerWidth >= 992) {
    body.removeClass('fixed')
    $('.c-header__mmenu-toggle').removeClass('active')
    $('.c-header').removeClass('mobile-menu')
    $('.c-header__mobile-content').html('')
  }
})