// Dropdown Menu
$('.c-header-nav-item--dropdown').children('.c-header-nav-item__btn').on("click", function () {
  $(this).toggleClass('active');
  $(this).siblings('.c-header-nav-dropdown').toggleClass('show');
})


// Dropdown Menu Close
$(document).on("mouseup", function (e) { // событие клика по веб-документу
  var div = $(".c-header-nav-item--dropdown"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $(div).children('.c-header-nav-item__btn').removeClass('active');
    $(div).children('.c-header-nav-dropdown').removeClass('show');
  }
});

// Sticky Header
(function () {
  let headerHeight = $('.c-header').outerHeight()
  let header = $('.c-header')
  let headerMenu = $('.c-header__bottom')


  $(window).on('load , resize', function () {
    headerHeight = $('.c-header').outerHeight()
    $(window).on('scroll', function () {
      if (($(window).scrollTop() >= headerHeight) && ($(window).width() <= 1199)) {
        $(header).css('min-height', headerHeight, 'px')
        $(headerMenu).hide();
        $(header).addClass('fixed-header');
      }
      else {
        $(header).removeClass('fixed-header');
        $(headerMenu).show();
        $(header).css('min-height', '')
      }
    });
  });

})();

// Mmenu

(function () {

  let menuBtn = $('.c-header-mmenu__btn')
  let header = $('.c-header')
  let menu = $('.c-header__bottom')
  let menuInner = $('.c-header__inner')
  let headerTopHeight = undefined
  let debug = false;
  let infoLine = $('.c-info-line')


  $(window).on('load resize', function () {
    headerTopHeight = $('.c-header__top').outerHeight()
    infoLineHeight = $(infoLine).outerHeight()
    if ($(window).width() <= 1199) {
      $(menuInner).css('max-height', 'calc(100vh - ' + infoLineHeight + 'px)')
    }
    if (!debug && $(window).width() <= 1199) {
      $(menuBtn).on('click', function () {
        $(this).toggleClass('active')
        $(header).toggleClass('show-menu')
        $('body').toggleClass('fixed')
        $(infoLine).toggleClass('show-in-menu')
      })
      if ($('.c-header').hasClass('sidebar-nav')) {
        $('.c-sidebar-menu').clone().appendTo('.c-header__bottom-wrapper')
      }
      debug = true;
    }
    if ($(window).width() > 1199) {
      $(this).removeClass('active')
      $(header).removeClass('show-menu')
      $(menuBtn).removeClass('active')
      $(menuInner).css('max-height', '')
      $(menu).css('top', '')
      $('body').removeClass('fixed')
      $(infoLine).removeClass('show-in-menu')
      $('.c-header-nav-dropdown').removeClass('show');
      $('.c-header-nav-item__btn').removeClass('active');
    }

  })
})();

//Sidebar

$(document).ready(function () {
  var resizeMenu = function () {
    var windowWidth = $(this).width();

    var fixedWidth = $('.c-header__bottom-wrapper').width();
    hiddenItems = 0
    var availableWidth = $('.c-header__bottom-wrapper').width();
    resizeMenuToWidth(availableWidth);
  };

  var resizeMenuToWidth = function (availableWidth) {
    var widthSoFar = 0;
    $('.c-header__bottom').find('.c-sidebar-menu__item').each(function () {
      var itemWidth = ($('.c-header__bottom').find('.c-sidebar-menu__item').width()) + 40;
      if (widthSoFar > availableWidth || (widthSoFar + itemWidth > availableWidth)) {
        $(this).addClass('in-dropdown');
        $(this).appendTo('.c-header__bottom .c-sidebar-menu__sublist');
        hiddenItems++
      } else {
        $(this).removeClass('in-dropdown');
        $('.c-sidebar-menu__sublist').remove(this);
        $(this).appendTo('.c-header__bottom .c-sidebar-menu__list');
      }
      if ($(window).width() > 1199) {
        $(this).removeClass('in-dropdown');
        $('.c-sidebar-menu__sublist').remove(this);
        // $(this).appendTo('.c-sidebar-menu__list');
      }
      widthSoFar += itemWidth;
    });
    $('.c-sidebar-menu__show-val').text(hiddenItems)
  };


  // Resize menu to when the page loads
  resizeMenu();

  // Also resize menu when the window is resized
  $(window).on('load resize', function () {
    resizeMenu();
  });
  $(document).on('click', '.c-sidebar-menu__show', function (e) {
    $('.c-sidebar-menu__sublist').toggleClass('active')
    e.preventDefault();
  });
});



// Search


$('.c-header-search__btn-open').click(function(){
  $(this).siblings('.c-header-search').addClass('show')
})

$(document).on("mouseup", function (e) { // событие клика по веб-документу
  var div = $(".c-header-search"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.c-header-search').removeClass('show')
  }
});