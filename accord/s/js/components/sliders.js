
// Main Slider Banner
if ($(".c-main-banner-slider__gallery").length){
  $('.c-main-banner-slider__gallery').slick({
    dots: true,
    infinite: false,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    appendDots: $('.c-main-banner-dots__inner')
  })
}

//Specialize slider
if ($(".c-specialize__slider").length){
var specializeSlider = new Swiper('.c-specialize__slider .swiper-container', {
  // Optional parameters
  spaceBetween: 10,
  slidesPerView: 'auto',
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button.swiper-button-next',
    prevEl: '.swiper-button.swiper-button-prev',
  },

})
}

//Mortgage slider
if ($(".c-mortgage-banner__slider").length){

$('.c-mortgage-banner__slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'ease',
  slidesToShow: 1,
  speed: 600,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
})
}

//Reviews slider
if ($(".c-main-reviews__slider").length){

var reviewsSlider = new Swiper('.c-main-reviews__slider .swiper-container', {
  // Optional parameters
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button.swiper-button-next',
    prevEl: '.swiper-button.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
}

//Articles slider
if ($(".c-main-articles__slider").length){

var articlesSlider = undefined;
function initSwiperArticles() {
    var screenWidth = $(window).outerWidth();
    if(screenWidth < 992 && articlesSlider == undefined) {            
        articlesSlider = new Swiper('.c-main-articles__slider .swiper-container', {            
          slidesToShow: 1,
        });
    } else if (screenWidth > 991 && articlesSlider != undefined) {
        articlesSlider.destroy();
        articlesSlider = undefined;
        $('.swiper-wrapper').removeAttr('style');
        $('.swiper-slide').removeAttr('style');            
    }        
}


initSwiperArticles();

$(window).on('resize', function(){
  initSwiperArticles();
});

}

//Partners slider

if ($(".c-partners__slider").length){

  var partnersSlider = undefined;
  function initSwiperPartners() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth > 991 & partnersSlider == undefined) {            
          partnersSlider = new Swiper('.c-partners__slider', {            
            spaceBetween: 25,
            slidesPerView: 6,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button.swiper-button-next',
              prevEl: '.swiper-button.swiper-button-prev',
            },
          });
      } else if (screenWidth < 992 & partnersSlider != undefined) {
          partnersSlider.destroy();
          partnersSlider = undefined;
          $('.c-partners__slider .swiper-wrapper').removeAttr('style');
          $('.c-partners__slider .swiper-slide').removeAttr('style');            
      }        
  }
  
  initSwiperPartners();
  
  $(window).on('resize load', function(){
    initSwiperPartners();
  });
}


//Complex Advantages slider
if ($(".c-apartment-complex-advantages-item__slider").length){

  var apsSlider = new Swiper('.c-apartment-complex-advantages-item__slider .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button.swiper-button-next',
      prevEl: '.swiper-button.swiper-button-prev',
    },
  })
  }

//nearby slider
if ($(".c-places-nearby__slider").length){

  var nearbySlider = undefined;
  function initSwiperNearby() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth < 992 & nearbySlider == undefined) {            
          nearbySlider = new Swiper('.c-places-nearby__slider .swiper-container', {            
            spaceBetween: 20,
            slidesPerView: 1,
            // Navigation arrows
            pagination: {
              el: '.swiper-pagination.swiper-pagination--blue.swiper-pagination--mob',
              clickable: true,
            },
          });
      } else if (screenWidth > 991 & nearbySlider != undefined) {
          nearbySlider.destroy();
          nearbySlider = undefined;
          $('.c-places-nearby__slider .swiper-wrapper').removeAttr('style');
          $('.c-places-nearby__slider .swiper-slide').removeAttr('style');            
      }        
  }
  
  initSwiperNearby();
  
  $(window).on('resize load', function(){
    initSwiperNearby();
  });
}

//aparment photos
if ($(".c-apartment-complex-photos").length){
  var galleryThumbs = new Swiper(".c-apartment-complex-photos-slider-nav", {
    spaceBetween: 10,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  var galleryMain = new Swiper(".c-apartment-complex-photos-slider-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });

  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });
};

//Complex decor slider

if ($(".c-apartment-complex-decor__slider").length){
  var apsSlider = new Swiper('.c-apartment-complex-decor__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button.swiper-button-next',
      prevEl: '.swiper-button.swiper-button-prev',
    },
  })
  }

//mortgage slider
if ($(".c-mortgage-slider__inner").length){
  var apsSlider = new Swiper('.c-mortgage-slider__inner', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination--blue.swiper-pagination--mob',
      clickable: true,
    },
  })
}


//construction slider

if ($(".c-construction-progress__slider").length){

  var constructSlider = undefined;
  function initSwiperConstruct() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth > 992 && constructSlider == undefined) {            
          constructSlider = new Swiper('.c-construction-progress__slider', {            
            spaceBetween: 20,
            slidesPerView: 2,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
      } else if (screenWidth < 991 && constructSlider != undefined) {
          constructSlider.destroy();
          constructSlider = undefined;
          $('.swiper-wrapper').removeAttr('style');
          $('.swiper-slide').removeAttr('style');            
      }        
  }
  
  
  initSwiperConstruct();
  
  $(window).on('resize', function(){
    initSwiperConstruct();
  });
  
  }

// Journal


if ($(".c-journal-group__slider-mob").length){

  var journalSlider = undefined;
  function initSwiperJournal() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth < 992 & journalSlider == undefined) {            
          journalSlider = new Swiper('.c-journal-group__slider-mob', {            
            spaceBetween: 20,
            slidesPerView: 1,
            // Navigation arrows
            pagination: {
              el: '.swiper-pagination.swiper-pagination--blue.swiper-pagination--mob',
              clickable: true,
            },
          });
      } else if (screenWidth > 991 & journalSlider != undefined) {
          journalSlider.destroy();
          journalSlider = undefined;
          $('.c-journal-group__slider-mob .swiper-wrapper').removeAttr('style');
          $('.c-journal-group__slider-mob .swiper-slide').removeAttr('style');            
      }        
  }
  initSwiperJournal();
  
  $(window).on('resize load', function(){
    initSwiperJournal();
  });
}


// Room mortgage


if ($(".c-mortgage-offer__slider").length){

  var mortgageSlider = undefined;
  function initSwiperMortgage() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth < 992 & mortgageSlider == undefined) {            
          mortgageSlider = new Swiper('.c-mortgage-offer__slider', {            
            spaceBetween: 25,
            slidesPerView: 2,
            // Navigation arrows
            pagination: {
              el: '.swiper-pagination.swiper-pagination--blue.swiper-pagination--mob',
              clickable: true,
            },
            breakpoints: {
              500: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
          });
      } else if (screenWidth > 991 & mortgageSlider != undefined) {
          mortgageSlider.destroy();
          mortgageSlider = undefined;
          $('.c-mortgage-offer__slider .swiper-wrapper').removeAttr('style');
          $('.c-mortgage-offer__slider .swiper-slide').removeAttr('style');            
      }        
  }
  
  initSwiperMortgage();
  
  $(window).on('resize', function(){
    initSwiperMortgage();
  });
}


// Partner


if ($(".c-worker").length){

  var worker1Slider = undefined;
  function initSwiperworker1() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth > 991 & worker1Slider == undefined) {            
          worker1Slider = new Swiper('.c-worker__slider--main', {            
            spaceBetween: 20,
            slidesPerView: 3,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
      } else if (screenWidth < 992 & worker1Slider != undefined) {
          worker1Slider.destroy();
          worker1Slider = undefined;
          $('.c-worker__slider--main .swiper-wrapper').removeAttr('style');
          $('.c-worker__slider--main .swiper-slide').removeAttr('style');            
      }        
  }
  initSwiperworker1();
  
  $(window).on('resize load', function(){
    initSwiperworker1();
  });
}


if ($(".c-worker").length){

  var worker2Slider = undefined;
  function initSwiperworker2() {
      var screenWidth = $(window).outerWidth();
      if(screenWidth > 991 & worker2Slider == undefined) {            
          worker2Slider = new Swiper('.c-worker__slider--video', {            
            spaceBetween: 20,
            slidesPerView: 2,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
      } else if (screenWidth < 992 & worker2Slider != undefined) {
          worker2Slider.destroy();
          worker2Slider = undefined;
          $('.c-worker__slider--video .swiper-wrapper').removeAttr('style');
          $('.c-worker__slider--video .swiper-slide').removeAttr('style');            
      }        
  }
  initSwiperworker2();
  
  $(window).on('resize load', function(){
    initSwiperworker2();
  });
}