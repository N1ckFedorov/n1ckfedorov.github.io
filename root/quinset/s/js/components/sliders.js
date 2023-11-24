if ($('.c-main-banner').length) {

  // Custom Pagination

  let titles = []
  let numbers = []

  $('.c-main-banner-slide__category').each(function (index, value) {
    let numberSlide = $(value).children('.c-main-banner-slide__number').children('*').text()
    let textSlide = $(value).children('.c-main-banner-slide__ttl').children('*').text()
    numbers.push(numberSlide)
    titles.push(textSlide)
  });

  //

  var mainBannerSlider = new Swiper('.c-main-banner .swiper-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    slidesPerView: 1,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.c-main-banner .swiper-button-next',
      prevEl: '.c-main-banner .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination .swiper-pagination-bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class=" col-md-1 ' + className + '">' + '<span class=" ' + className + '-numbers ' + '">' + (numbers[index]) + '</span>' + '<span class=" ' + className + '-text ' + '">' + (titles[index]) + '</span>' + '</button>';
      },
    },
    on: {
      init: function () {
        animateText()
      },
      slideChange: function () {
        animateText()
        currentSlide()
      },
    }
  });

  function currentSlide() {
    var slideIndex = (mainBannerSlider.activeIndex) + 1;
    $('.c-main-banner .swiper-numbers-current').html('0' + slideIndex + '.');
  }
  currentSlide()
}




if ($('.c-about-us__slider').length) {

  var aboutUsSlider = new Swiper('.c-about-us__slider .swiper-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    slidesPerView: 1,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.c-about-us__slider .swiper-button-next',
      prevEl: '.c-about-us__slider .swiper-button-prev',
    }
  });

  function currentSlide() {
    var slideIndex = (aboutUsSlider.activeIndex) + 1;
    $('.c-about-us__slider .swiper-numbers-current').html('0' + slideIndex);
  }
  currentSlide()








  var allSlides = $('.c-about-us__slider .swiper-slide').length;
  var activeSlides = 1;
  var minValueSlide = 1;
  $('.c-about-us__slider .swiper-numbers-total').html('/' + '0' + allSlides);
  $('.c-about-us__slider .swiper-numbers-current').html('0' + activeSlides);

  $('.c-about-us__slider .swiper-button-next').click(function () {
    if (activeSlides == allSlides) {
      activeSlides = allSlides;
    } else {
      activeSlides += 1;
      $('.c-about-us__slider .swiper-numbers-current').html('0' + activeSlides);
    }
  });

  $('.c-about-us__slider .swiper-button-prev').click(function () {
    if (activeSlides == minValueSlide) {
      activeSlides = minValueSlide;
    } else {
      activeSlides -= 1;
      $('.c-about-us__slider .swiper-numbers-current').html('0' + activeSlides);
    }
  });
}




if ($('.c-project-tile').length > 0) { //some-slider-wrap-in
  
  function initProjectsSlider() {
    let swiperInstances = [];
    $(".c-project-tile").each(function (index, element) { //some-slider-wrap-in
      const $this = $(this).find(".swiper-container");
      $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
      $this.parent().find(".swiper-button-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
      $this.parent().find(".swiper-button-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
      swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        slidesPerView: 1,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        allowTouchMove: false,
        navigation: {
          prevEl: ".prev-" + index,  //prev must be unique (ex: some-slider-prev)
          nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
        },
      });
      function currentSlide() {
        var slideIndex = (swiperInstances[index].activeIndex) + 1;
        $(element).find('.swiper-numbers-current').html('0' + slideIndex);
      }
      currentSlide()

      var allSlides = $(element).find('.swiper-slide').length;
      var activeSlides = 1;
      var minValueSlide = 1;
      $(element).find('.swiper-numbers-total').html('/' + '0' + allSlides);
      $(element).find('.swiper-numbers-current').html('0' + activeSlides);

      $(element).find('.swiper-button-next').click(function () {
        if (activeSlides == allSlides) {
          activeSlides = allSlides;
        } else {
          activeSlides += 1;
          $(element).find('.swiper-numbers-current').html('0' + activeSlides);
        }
      });

      $(element).find('.swiper-button-prev').click(function () {
        if (activeSlides == minValueSlide) {
          activeSlides = minValueSlide;
        } else {
          activeSlides -= 1;
          $(element).find('.swiper-numbers-current').html('0' + activeSlides);
        }
      });
    });


    // Now you can call the update on a specific instance in the "swiperInstances" object
    // e.g.
    swiperInstances[3].update();
    //or all of them
  }
  initProjectsSlider()
}