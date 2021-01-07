const initMap = (ymaps) => {
  const coordinates = [58.04935, 56.086989];
  const myMap = new ymaps.Map(
    document.querySelector('.map__right'),
    {
      center: coordinates,
      zoom: 17,
    },
    {
      suppressMapOpenBlock: true,
    },
  );

  myMap.controls.remove('trafficControl');
  myMap.setType('yandex#map');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  // myPlacemark = new ymaps.Placemark(
  //   coordinates,
  //   {},
  //   {
  //     iconLayout: "default#image",
  //     iconImageHref: "../img/map-pin.png",
  //     iconImageSize: [55, 53],
  //     iconImageOffset: [-28, -42],
  //   }
  // );
  // myMap.geoObjects.add(myPlacemark);
};

window.onload = () => {
  const script = document.createElement('script');

  script.onload = () => {
    ymaps.ready((ymaps) => initMap(ymaps));
  };

  script.id = 'ymaps';
  script.src = 'https://api-maps.yandex.ru/2.1/?apikey=0250c9d0-b4a1-4297-98fc-01643af1fcbd&lang=ru_RU';

  document.body.appendChild(script);
};
