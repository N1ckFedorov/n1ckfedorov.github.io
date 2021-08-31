var $grid = $('.c-read-also__list').isotope({
  // options
  itemSelector: '.c-publication-tile',
  fitWidth: true,
  stamp: '.stamp',
  masonry: {
    gutter: 40
  },
});



if ($(".isotope").length) {
  window.addEventListener("resize", function () {
    window.location.reload(false);
  });
}



// All Publications



// bind filter button click
/*$('.c-publications-nav').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterValue;
  $allPublications.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.c-publications-nav').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});

*/

// List Limit

(function () {
  var news = 50;

  $(window).on('load resize', function () {
    var hiddenCount = $(".c-publications-nav__item.hidden").length
    setTimeout(function () {
      var hiddenCount = $(".c-publications-nav__item.hidden").length
      $('.c-publications__show-count').text(hiddenCount)
    }, 100);

    if (($(window).width() <= 1199) & ($(window).width() >= 768)) {
      $(".c-publications-nav__item").show().removeClass('hidden');
      news = 5;
      $(".c-publications-nav__item:not(:lt(" + news + "))").hide().addClass('hidden');
      $(".c-publications__show").show();
    }
    
    if (($(window).width() <= 767)) {
      news = 3;
      $(".c-publications-nav__item:not(:lt(" + news + "))").hide().addClass('hidden');

      $(".c-publications__show").show();
    }
    
    if ($(window).width() >= 1200) {
      news = 50;
      $(".c-publications-nav__item").show().removeClass('hidden');

      $(".c-publications__show").hide();
    }

  })
  
  $(".c-publications__show").click(function (e) {
    $(".c-publications-nav__item:hidden").show().removeClass('hidden');
    $(".c-publications__show").hide();
  });


})();

