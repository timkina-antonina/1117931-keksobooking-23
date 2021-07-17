import {showAlert} from './util.js';
import {getData} from './api.js';
import './popup.js';
import {drawPinMarkers, createMap} from './map.js';
import {makeFormState} from './form.js';
import {setFilterChange} from './filters.js';
import {debounce} from './utils/debounce.js';

let loadedItems = [];
createMap(() => {
  getData((items) => {
    loadedItems = items;
    drawPinMarkers(loadedItems);
    makeFormState(false);
  }, (messageError) => {
    showAlert(messageError);
  });
});
setFilterChange(debounce(() => drawPinMarkers(loadedItems), 500));
