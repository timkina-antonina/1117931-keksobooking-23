import {showAlert} from './util.js';
import {getData} from './api.js';
import './popup.js';
import {drawPinMarkers} from './map.js';
import './form.js';
import {setFilterChange} from './filters.js';
import {debounce} from './utils/debounce.js';

let loadedItems = [];
getData((items) => {
    loadedItems = items;
    drawPinMarkers(loadedItems);
}, showAlert);
setFilterChange(debounce(() => drawPinMarkers(loadedItems), 500));