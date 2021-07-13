import {makeFormState} from './form.js';
import {drawCard} from './popup.js';
import {filter} from './filters.js';

const LAT_CENTRE = 35.68950;
const LNG_CENTRE = 139.69171;
const ANNOUNCEMENTS_COUNT = 10;

const regularIcon = {
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

const mainIcon = {
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
};

//когда карта загрузилась
const map = L.map('map-canvas')
  .on('load', () => {
    makeFormState(false);
  })
  .setView({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// regularPinIcon
const regularPinIcon = L.icon(regularIcon);

const markerGroup = L.layerGroup().addTo(map);

function drawPinMarkers(arr) {
    markerGroup.clearLayers();
  const announcements = filter(arr, ANNOUNCEMENTS_COUNT);
  announcements.forEach(({location, offer, author}) => {
    const lat = location.lat;
    const lng = location.lng;
    const regularPinMarker = L.marker(
      {
        lat: lat,
        lng: lng,
      },
      {
        icon: regularPinIcon,
      },
    );
    regularPinMarker
      // .addTo(map)
      .addTo(markerGroup)
      .bindPopup(drawCard(offer, author));
  });
}

// Отрисовываем mainPinIcon
const mainPinIcon = L.icon(mainIcon);

const mainPinMarker = L.marker(
  {
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// Устанавливаем главный маркер в начальное положение
const form = document.querySelector('.ad-form');
const addressInput = form.querySelector('#address');

const resetMarker = () => {
  mainPinMarker.setLatLng({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  });
  addressInput.value = `${LAT_CENTRE}, ${LNG_CENTRE}`;
};

resetMarker();

mainPinMarker.on('moveend', (evt) => {
  const lat = evt.target.getLatLng().lat.toFixed(5);
  const lng = evt.target.getLatLng().lng.toFixed(5);
  addressInput.value =`${lat}, ${lng}`;
});

export {
  drawPinMarkers,
  resetMarker
};
