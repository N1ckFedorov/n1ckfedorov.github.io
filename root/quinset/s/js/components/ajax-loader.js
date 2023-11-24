let button = $('.more-projects')
let wrapper = $('.c-projects__list')
let characteristics = $('.c-project-tile__characteristics')


$(function () {
  button.click(function () {
    $.ajax({
      url: 's/js/data/projects.json',
      type: "get",
      dataType: "json",
      cache: false,
      success: function (data) {
        $.each(data, function (index, itemData) {
          wrapper.append(`
          <div class="col-md-2">
          <div data-aos="fade-up" data-aos-duration="500" class="c-project-tile aos-init aos-animate">
            <div class="c-project-tile__slider">
              <div class="swiper-buttons">
                <div class="swiper-buttons__inner">
                  <div class="swiper-button swiper-button-prev prev-` + itemData.id +  10 + `swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-663278cedcbfd8aa" aria-disabled="true">
                    <svg width="1em" height="1em" class="icon icon-arrow ">
                      <use xlink:href="s/images/useful/svg/theme/symbol-defs.svg#icon-arrow"></use>
                    </svg>
                  </div>
                  <div class="swiper-numbers"><span class="swiper-numbers-current">1</span><span class="swiper-numbers-total">/1</span></div>
                  <div class="swiper-button swiper-button-next next-` + itemData.id +  10 + `" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-663278cedcbfd8aa" aria-disabled="false">
                    <svg width="1em" height="1em" class="icon icon-arrow ">
                      <use xlink:href="s/images/useful/svg/theme/symbol-defs.svg#icon-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="swiper-container instance-` + itemData.id +  10 + `swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                <div class="swiper-wrapper" id="swiper-wrapper-663278cedcbfd8aa" aria-live="polite">
                `+
                $.map(itemData.slides, function(slide, key ) {
                  return `<div class="swiper-slide c-project-tile__slide c-project-tile-slide swiper-slide-active" role="group" aria-label="1 / 3" style="width: 510px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                  <div class="c-project-tile-slide__img">
                    <picture class="h-object-fit">
                      <source media="(max-width: 991px)" srcset="s/images/useful/projects/ `+ slide.slideImg +`">
                      <source media="(max-width: 767px)" srcset="s/images/useful/projects/`+ slide.slideImg  +`"><img src="s/images/useful/projects/`+ slide.slideImg  +`" alt="projects/1.jpg">
                    </picture>
                  </div>
                </div>`
                }).join('')
                +`
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
            <div class="c-project-tile__info">
              <h4 class="c-project-tile__title">` + itemData.title + `</h4>
              <div class="c-project-tile__characteristics">
               `+
              $.map(itemData.characteristics, function(characteristic, key ) {
                return `<div class="c-project-tile__characteristic c-project-tile-characteristic"><span class="c-project-tile-characteristic__ttl">` + characteristic.characteristicTtl + ` </span><span class="c-project-tile-characteristic__val">` + characteristic.characteristicVal  + `</span></div>`
              }).join('')
              +`
              </div>
              <p class="c-project-tile__desc">` + itemData.desc + `</p>
              <a href="` + itemData.link + `" class="c-project-tile__link">Show more</a>
            </div>
          </div>
        </div>
          `)
        });
        initProjectsSlider()
        $('.c-projects .c-project-tile').filter(':odd').attr("data-aos-duration", 1000)
      }
    });
    return false;
  });
});