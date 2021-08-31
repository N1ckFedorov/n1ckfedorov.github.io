if (document.querySelector('.c-community-page')) {

  document.querySelector('.c-community-page__btn-menu').onclick = function () {
    document.querySelector('.c-community-sidebar').classList.add('show');
  }
  document.querySelector('.c-community-sidebar__close').onclick = function () {
    document.querySelector('.c-community-sidebar').classList.remove('show');
  }


  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      document.querySelector('.c-community-sidebar').classList.remove('show');
    }
  });

}
if (document.querySelector('.c-event-sidebar')) {

  document.querySelector('.c-event-page__btn-menu').onclick = function () {
    document.querySelector('.c-event-sidebar').classList.add('show');
  }
  document.querySelector('.c-event-sidebar__close').onclick = function () {
    document.querySelector('.c-event-sidebar').classList.remove('show');
  }


  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      document.querySelector('.c-event-sidebar').classList.remove('show');
    }
  });
}

if (document.querySelector('.c-admin-panel')) {

  document.querySelector('.c-admin-panel__btn-menu').onclick = function () {
    document.querySelector('.c-community-sidebar').classList.add('show');
  }
  document.querySelector('.c-community-sidebar__close').onclick = function () {
    document.querySelector('.c-community-sidebar').classList.remove('show');
  }

}
if (document.querySelector('.c-global-search')) {

  document.querySelector('.c-global-search__btn-menu').onclick = function () {
    document.querySelector('.c-filter').classList.add('show');
  }
  document.querySelector('.c-event-sidebar__close').onclick = function () {
    document.querySelector('.c-filter').classList.remove('show');
    console.log('2');
  }

}
if (document.querySelector('.c-talent-search')) {

  document.querySelector('.c-talent-search__btn-menu').onclick = function () {
    document.querySelector('.c-filter').classList.add('show');
  }
  document.querySelector('.c-event-sidebar__close').onclick = function () {
    document.querySelector('.c-filter').classList.remove('show');
    console.log('2');
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      document.querySelector('.c-filter').classList.remove('show');
    }
  });
}










if (document.querySelector('.c-structure-sidebar')) {

  document.querySelector('.c-structure__menu').onclick = function () {
    document.querySelector('.c-structure-sidebar').classList.add('show');
  }
  document.querySelector('.mobile-burger__close').onclick = function () {
    document.querySelector('.c-structure-sidebar').classList.remove('show');
  }


  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      document.querySelector('.c-structure-sidebar').classList.remove('show');
    }
  });
}