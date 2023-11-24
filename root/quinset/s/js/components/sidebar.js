if ($('#blog-sidebar').length > 0) {

  var sidebar = new StickySidebar('#blog-sidebar', {
    containerSelector: '#main-content .col-md-1',
    topSpacing: 212,
    bottomSpacing: 50
  });
};