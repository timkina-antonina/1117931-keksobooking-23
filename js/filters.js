const filterHousingTypeSelect = document.querySelector('#housing-type');
const filterHousingPriceSelect = document.querySelector('#housing-price');
const filterHousingRoomsSelect = document.querySelector('#housing-rooms');
const filterHousingGuestsSelect = document.querySelector('#housing-guests');
const filterHousingFeatures = document.querySelector('#housing-features');

const filterWifiInput = filterHousingFeatures.querySelector('#filter-wifi');
const filterDishwasherInput = filterHousingFeatures.querySelector('#filter-dishwasher');
const filterParkingInput = filterHousingFeatures.querySelector('#filter-parking');
const filterWasherInput = filterHousingFeatures.querySelector('#filter-washer');
const filterElevatorInput = filterHousingFeatures.querySelector('#filter-elevator');
const filterConditionerInput = filterHousingFeatures.querySelector('#filter-conditioner');


//функция филтрации
function filter(arr, count) {
  if (filterHousingTypeSelect.value !== 'any') {
    arr = arr.filter(({offer}) => {
      offer.type === filterHousingTypeSelect.value;
    });
  }
  if (filterHousingPriceSelect.value !== 'any') {
    arr = arr.filter(({offer}) => {
      switch (filterHousingPriceSelect.value) {
        case 'low':
          return offer.price < 10000;
        case 'middle':
          return offer.price >= 10000 && offer.price < 50000 ;
        case 'high':
          return offer.price >= 50000;
      }
    });
  }
  if (filterHousingRoomsSelect.value !== 'any') {
    arr = arr.filter(({offer}) => {
      offer.rooms === parseInt(filterHousingRoomsSelect.value, 10);
    });
  }
  if (filterHousingGuestsSelect.value !== 'any') {
    arr = arr.filter(({offer}) => {
      if (filterHousingGuestsSelect.value !== '0') {
        return offer.guests === parseInt(filterHousingGuestsSelect.value, 10);
      } else {
        return offer.guests >= 3;
      }
    });
  }
  // записываем значения чекнутых фильтров в массив checkedFeatures
  const checkedFeatures = [...filterHousingFeatures.querySelectorAll(':checked')].map((arrItem) => arrItem.value);
  if (checkedFeatures.length !== 0) {
    arr = arr.filter(({offer}) => {
      if (offer.features !== undefined) {
        return checkedFeatures.every((arrItem) => offer.features.includes(arrItem));
      }
    });
  }
  return arr.slice(0, count);
}

//функция обновления по событию установки фильтров
const setFilterChange = (cb) => {
  filterHousingTypeSelect.addEventListener('change', cb);
  filterHousingPriceSelect.addEventListener('change', cb);
  filterHousingRoomsSelect.addEventListener('change', cb);
  filterHousingGuestsSelect.addEventListener('change', cb);
  filterWifiInput.addEventListener('change', cb);
  filterDishwasherInput.addEventListener('change', cb);
  filterParkingInput.addEventListener('change', cb);
  filterWasherInput.addEventListener('change', cb);
  filterElevatorInput.addEventListener('change', cb);
  filterConditionerInput.addEventListener('change', cb);
};

export {
  filter,
  setFilterChange
};
