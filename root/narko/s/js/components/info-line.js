(function () {
  let infoLine = $('.c-info-line')
  
  $(window).on('load , resize', function () {
    let infoLineHeight = $('.c-info-line').outerHeight()

    $(window).on('scroll', function () {
      if (($(window).scrollTop() >= 100 ) && ($(window).width() <= 1199)) {
        $(infoLine).addClass('show')
        $('.l-wrapper').css('padding-bottom' , infoLineHeight)
      }
      else {
        $(infoLine).removeClass('show')
        $('.l-wrapper').css('padding-bottom' , '')
      }
    });
  });

})();