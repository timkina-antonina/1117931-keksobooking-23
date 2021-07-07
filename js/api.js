import {drawPinMarkers} from './map.js';
import {showAlert} from './util.js';

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((announcements) => {
    console.log(announcements);
    drawPinMarkers(announcements);
  })
  .catch((err) => {
    console.error(err);
    showAlert('Не удалось получить данные', 'red');
  })





  // .then((response) => {
  //   if (response.ok) {
  //     onSuccess();
  //   } else {
  //     showAlert('Не удалось опубликовать объявление. Попробуйте ещё раз');
  //   }
  // })
  // .catch(() => {
  //   showAlert('Не удалось опубликовать объявление. Попробуйте ещё раз');
  // });
