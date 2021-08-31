if ($(".theiaStickySidebar").length){
  $('.main-content__inner, .sidebar').theiaStickySidebar({
    additionalMarginTop: 20
  });

}

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 140) {
    $('.c-sidebar-menu__contacts').fadeOut();
  } else {
    $('.c-sidebar-menu__contacts').fadeIn();
  }
});


$(".c-sidebar-menu-item__link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'1000');
});