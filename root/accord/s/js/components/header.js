// Fixed header


$(window).on('resize orientationchange', function () {
  var header = $('header'),
  scroll = $(window).scrollTop(),
  headerHeight = $(header).outerHeight(),
  body = $('body');

  var headerHeight = $(header).outerHeight()
  body.css('padding-top', headerHeight)
  if (scroll >= headerHeight) {
    header.addClass('sticky')
  }
  else {
    header.removeClass('sticky');
  }
});
$(window).on('load scroll', function () {
  var header = $('header'),
      scroll = $(window).scrollTop(),
      headerHeight = $(header).outerHeight(),
      body = $('body');
  var headerHeight = $(header).outerHeight()
  if (scroll >= headerHeight) {
    header.addClass('sticky')
  }
  else {
    header.removeClass('sticky');
  }
});


// Toggle Menu
(function () {
  var header = $('header'),
      body = $('body'),
      headerHeight = $(header).outerHeight()
  $('.c-header-menu').click(function () {
    var headerHeight = $(header).outerHeight()
    $(body).toggleClass('fixed')
    $(this).toggleClass('active')
    $('header').toggleClass('open-menu')
    $('.c-cookies').fadeOut()
    $('.c-header__wrapper').css({ height: `calc(100vh - ${headerHeight}px)` })
    if (!$('.c-header').hasClass('open-menu')) {
      $('.c-cookies').fadeIn()
      $('.c-header__wrapper').css('height' , '')
    }
  })

  $(window).on('load resize scroll', function () {
    var header = $('header'),
        body = $('body');
    if ($(window).width() >= 992) {
      $(body).removeClass('fixed')
      $('.c-header__wrapper').css('height', '')
      $('.c-header-menu').removeClass('active')
      $('header').removeClass('open-menu')
      $('.c-cookies').fadeIn()
    }
  });
})();

//Toggle Dropdown


$(document).on('click', '.c-header-nav__item--clickable', function (e) {
    dropHeight = $('.c-header-nav__dropdown').height()
    $('.c-header').toggleClass('open-dropdown')
    $(this).toggleClass('show')
    $('.c-header-nav').css('height' , dropHeight )
    if (!$('.c-header-nav__item--clickable').hasClass('show')) {
      $('.c-header-nav').css('height' , '' )
    }
});

  $(window).on('load resize scroll', function () {
    if ($(window).width() >= 992) {
      $('.c-header-nav').css('height' , '' )
      $('.c-header').removeClass('open-dropdown')
      $('.c-header-nav__item--clickable').removeClass('show')
    }
  });


$(window).on('load resize', function () {
  var headerHeight = $(header).outerHeight()
  if ($(window).width() < 992) {
    $('.c-header-nav__item--has-content').addClass('c-header-nav__item--clickable')
  }else {
    $('.c-header-nav__item--has-content').removeClass('c-header-nav__item--clickable')
  }
});