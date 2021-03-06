import {showAlert} from './util.js';
import {getData} from './api.js';
import './popup.js';
import {drawPinMarkers, createMap} from './map.js';
import {makeFormState, makeFiltersState} from './form.js';
import {setFilterChange} from './filters.js';
import {debounce} from './utils/debounce.js';

let loadedItems = [];
createMap(() => {
  makeFormState(false);
  getData((items) => {
    loadedItems = items;
    drawPinMarkers(loadedItems);
    makeFiltersState(false);
  }, (messageError) => {
    showAlert(messageError);
  });
});
setFilterChange(debounce(() => drawPinMarkers(loadedItems), 500));
