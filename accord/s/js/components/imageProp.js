$(window).on('load resize scroll', function () {

  apartmentWidth = undefined
  // articleWidth = undefined
  videoWidth = undefined
  specializeWidth = undefined


  $(".c-apartment-tile").each(function () {
    apartmentWidth = $(this).find(".c-apartment-tile__img").width()
  });
  $(".c-apartment-tile__img").css({ height: `calc(${apartmentWidth}px  * 0.666666667)` })



  // $(".c-article-tile").each(function () {
  //   articleWidth = $(this).find(".c-article-tile__img").width()
  // });
  // $(".c-article-tile__img").css({ height: `calc(${articleWidth}px  * 0.666666667)` })


  // $(".c-info-video__frame").each(function () {
  //   videoWidth = $(this).width()
  // });
  // $(".c-info-video__frame").css({ height: `calc(${videoWidth}px  * 0.666666667)` })


  // $(".c-specialize-item").each(function () {
  //   specializeWidth = $(this).width()
  // });
  // $(".c-specialize-item").css({ height: `calc(${specializeWidth}px  * 0.666666667)` })
  

})