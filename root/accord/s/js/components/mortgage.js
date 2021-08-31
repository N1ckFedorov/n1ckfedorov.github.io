$('.c-mortgage-main-item').on('click' , function(){
  $(this).closest('.c-mortgage__group-wrap').toggleClass('show')
  $('.c-mortgage-sub-item__police-info').removeClass('show')
})
$('.c-mortgage-sub-item__police').on('click' , function(){
  $('.c-mortgage-sub-item').removeClass('zindex')
  $('.c-mortgage-sub-item__police-info').removeClass('show')
  $(this).siblings('.c-mortgage-sub-item__police-info').toggleClass('show')
  $(this).parents('.c-mortgage-sub-item').toggleClass('zindex')
})
$('.c-mortgage-sub-item__police-close').on('click' , function(){
  $('.c-mortgage-sub-item__police-info').removeClass('show')
  
  $(this).parent('.c-mortgage-sub-item__police-info').removeClass('show')
  $(this).parents('.c-mortgage-sub-item').removeClass('zindex')
})
