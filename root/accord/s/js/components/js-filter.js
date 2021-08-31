$('.c-filter__show-more').click(function () {
  $(this).toggleClass('open')
  $('.c-filter__main').toggleClass('show')
})
$('.js-open-filter').click(function () {
  $('.c-filter__content').addClass('show')
  $('body').addClass('fixed')
})
$('.js-close-filter').click(function () {
  $('.c-filter__content').removeClass('show')
  $('body').removeClass('fixed')
})


$(window).on('resize', function () {
  if ($(window).width() < 992) {
  } else {
    $('.c-filter__content').removeClass('show')
    $('body').removeClass('fixed')
    $('.c-filter__main').removeClass('show')
    $('.c-filter__show-more').removeClass('open')
  }

});