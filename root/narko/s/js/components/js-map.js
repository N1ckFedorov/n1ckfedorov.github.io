window.clinics = [];
setTimeout(function(){
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=44f25dbe-cfb6-4337-b9d1-5f6d61a6f006&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 1000);

function createGeobjects(map, clinics){
  class CustomCluster {
    // Зададаем макет метки кластера
    createCluster() {
      return ymaps.templateLayoutFactory.createClass(
        '<div class="ymap-cluster-icon">{{ properties.geoObjects.length }}</div>',
      );
    }

    // Зададаем активную область иконки кластера
    createIconShape() {
      return {
        type: 'Circle',
        coordinates: [30, 30],
        radius: 30
      };
    }
  }

  const cluster = new CustomCluster();
  const geoObjects = [];
  for (var i = 0, len = clinics.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(clinics[i].point, {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: clinics[i].iconImageHref,
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
    });

    let activeCard = {}
    geoObjects[i].events.add('click', function (e) {
      activeCard = {};
      geoObjects.map((o) => {
        o.events.fire('clear-map')
      });
      let activeCoords = e.originalEvent.target.geometry._coordinates;
      clinics.forEach(element => {
        if (activeCoords[0] === element.point[0] && activeCoords[1] === element.point[1]) {
          activeCard = element;
          $('.c-map .c-clinic-item').remove()
          $('.c-map__content').before('<a href="' + activeCard.url + '" class="c-clinic-item"> <div class="c-clinic-item__head"> <div class="c-clinic-item__img h-object-fit"> <picture> '+ (activeCard.imageWebp ? '<source srcset="' + activeCard.imageWebp + '" type="image/webp">' : '') + (activeCard.image ? '<img src="' + activeCard.image + '" alt="">' : '' ) + '</picture> </div></div><div class="c-clinic-item__body"> <div class="c-clinic-item__rate"> <div class="c-rate-mark"> <div class="c-rate-mark__star c-rate-mark-star"> <svg width="1em" height="1em" class="icon icon-star "> <use xlink:href="'+ window.site_template_path +'/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-star"></use> </svg><span class="c-rate-mark-star__text">' + activeCard.rate + '</span> </div><div class="c-rate-mark__review c-rate-mark-review"><span class="c-rate-mark-review__count"> ' + activeCard.review + '</span> </div></div></div><div class="c-clinic-item__info"> <div class="c-clinic-item__title c-clinic-item-title"><span class="c-clinic-item-title__text">' + activeCard.title + '</span> </div><span class="c-clinic-item__city">' + activeCard.addr + '</span> </div><span class="c-clinic-item__price">от ' + activeCard.price + ' ₽/месяц</span> </div></a>');
        } else {
        }
      });
      e.get('target').options.set({ iconImageHref: window.site_template_path + '/dist/s/images/useful/map/mark.svg' })
    });
    geoObjects[i].events.add('clear-map', (e) => {
      e.get('target').options.set({ iconImageHref: window.site_template_path + '/dist/s/images/useful/map/mark-black.svg' })
    });
  }

  const clusterer = new ymaps.Clusterer({
    gridSize: 360,
    clusterIconLayout: cluster.createCluster(),
    clusterIconShape: cluster.createIconShape(),
  });

  clusterer.add(geoObjects);
  map.geoObjects.add(clusterer);
}

function getYaMap(){
  if ($('.c-map').length) {

    // Создание кластеризатора с произвольным HTML-макетом иконки кластера
    
    const init = () => {

      window.clinics

      if($("#map_objects_node").length > 0){
        var decoded_clinics = JSON.parse(window.atob($("#map_objects_node").attr('data-objects')));
        if(decoded_clinics)
          window.clinics = decoded_clinics;
        $("#map_objects_node").remove();
      }      

      map = new ymaps.Map(
        'y-map',
        {
          center: [window.clinics[0].point[0], window.clinics[0].point[1]],
          zoom: 12,
          controls: []
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );

      createGeobjects(map, window.clinics);

      $("#clinic_items").on('DOMSubtreeModified', function(){
        if($("#map_objects_node").length > 0){
          var decoded_clinics = JSON.parse(window.atob($("#map_objects_node").attr('data-objects')));
          if(decoded_clinics)
            window.clinics = window.clinics.concat(decoded_clinics);
          
          $("#map_objects_node").remove();

          createGeobjects(map, window.clinics);
        }
          
      });

    };
    ymaps.ready(init);
  }
}
