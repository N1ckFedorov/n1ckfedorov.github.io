
let splitting = null
let firstStarted = false

function animateText() {
  splitting = null
  if (firstStarted) {

    $('.animated-text').each(function (index, value) {
      var textWrapper = $(this)
      var textBlock = textWrapper.children('*')
      var textInner = textBlock.text()

      textWrapper.attr('data-animate', textInner)
      textWrapper.html('')
      textWrapper.append(`<span>${textInner}</span>`);
    });
  }

  splitting = Splitting({
    target: ".animated-text *",
    by: "chars",
    key: null
  })

  firstStarted = true
}

if ($('.c-404').length) {
  animateText()
}