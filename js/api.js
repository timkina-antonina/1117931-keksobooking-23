import {drawPinMarkers} from './map.js';
import {showAlert} from './util.js';

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((announcements) => {
    drawPinMarkers(announcements);
  })
  .catch((err) => {
    showAlert('Не удалось получить данные', 'red');
  })
