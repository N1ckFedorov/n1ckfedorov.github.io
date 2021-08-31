
$(".c-advantages__inner").swipe( {
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
       $(".nav-item.active").next('.nav-item').tab('show');
     },
  swipeRight:function(event, direction, distance, duration, fingerCount) {
       $(".nav-item.active").prev('.nav-item').tab('show');
     },
});