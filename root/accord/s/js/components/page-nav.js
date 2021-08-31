
//Active sections
$(window).on('load scroll resize', function () {
  var $sections = $('section');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 200;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('.c-page-nav__item.active').removeClass('active');
      $('a[href="#' + id + '"]').parent('.c-page-nav__item').addClass('active');

    }
  })
});

//Scroll on click

$(".c-page-nav").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top - 200;
  $('body,html').animate({ scrollTop: top }, 800);
});



//Fixed on scroll


var nav = $('.c-page-nav'),
    navWrapper = $('.c-page-nav__wrapper'),
    navHeight = $('.c-page-nav').outerHeight(),
    w = $(window)
    h = $('header'),
    br = $('.c-breadcrumbs'),
    ban = $('.c-apartment-complex-banner'),
    body = $('body');

$(window).on('load resize scroll', function () {

  // if (window.header_timer) {
  //     clearTimeout(window.header_timer);
  // }

  //   window.header_timer = setTimeout(() => {
      var header = h.outerHeight(),
      breadcrumbs = br.outerHeight(),
      banner = ban.outerHeight(),
      topOffset = (header + breadcrumbs + banner),
      scroll = w.scrollTop();
      
      // console.log('1');
    if (scroll >= topOffset) {
      nav.addClass('fixed');
    }
    else {
      nav.removeClass('fixed');
    }
  // console.log(header);
  //}, 100);
});
