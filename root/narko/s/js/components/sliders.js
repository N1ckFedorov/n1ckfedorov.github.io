// Список клиник
$('.c-clinics-slider__slides').slick({
  infinite: false,
  dots: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// Список Докторов
$('.c-doctors-slider__call-home').slick({
  infinite: false,
  dots: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// Список Лицензий
$('.c-licenses-slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});
// Список Фото
$('.c-photos-slider__slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

// Отзывы
$('.c-reviews-slider-slides .c-reviews-slider-slides__wrapper').slick({
  infinite: false,
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.17157C2.73367 -0.390524 5.26633 -0.390524 6.82843 1.17157L36.8284 31.1716C38.3905 32.7337 38.3905 35.2663 36.8284 36.8284L6.82843 66.8284C5.26633 68.3905 2.73367 68.3905 1.17157 66.8284C-0.390524 65.2663 -0.390524 62.7337 1.17157 61.1716L28.3431 34L1.17157 6.82843C-0.390524 5.26633 -0.390524 2.73367 1.17157 1.17157Z" fill=""/></svg></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
      }
    }
  ]
});

//Список докторов в клинике
$('.c-doctors-slider__clinic').slick({
  infinite: false,
  dots: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});