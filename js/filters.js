const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const NOT_FILTERED = 'any';

const filterHousingTypeSelect = document.querySelector('#housing-type');
const filterHousingPriceSelect = document.querySelector('#housing-price');
const filterHousingRoomsSelect = document.querySelector('#housing-rooms');
const filterHousingGuestsSelect = document.querySelector('#housing-guests');
const filterHousingFeatures = document.querySelector('#housing-features');

//функция филтрации
const isMatchHousingType = (offer) =>
  filterHousingTypeSelect.value === NOT_FILTERED
  || offer.type === filterHousingTypeSelect.value;

const isMatchRooms = (offer) =>
  filterHousingRoomsSelect.value === NOT_FILTERED
    || offer.rooms === parseInt(filterHousingRoomsSelect.value, 10);

const isMatchPrice = (offer) => {
  switch (filterHousingPriceSelect.value) {
    case 'low':
      return offer.price < MIN_PRICE;
    case 'middle':
      return offer.price >= MIN_PRICE && offer.price < MAX_PRICE;
    case 'high':
      return offer.price >= MAX_PRICE;
  }
  return true;
};

const isMatchGuests = (offer) => {
  if (filterHousingGuestsSelect.value === NOT_FILTERED) {
    return true;
  }

  if (filterHousingGuestsSelect.value !== '0') {
    return offer.guests === parseInt(filterHousingGuestsSelect.value, 10);
  } else {
    return offer.guests >= 3;
  }
};

const isMatchFeatures = (offer) => {
  // записываем значения чекнутых фильтров в массив checkedFeatures
  const checkedFeatures = [...filterHousingFeatures.querySelectorAll(':checked')].map((arrItem) => arrItem.value);
  if (checkedFeatures.length === 0) {
    return true;
  }

  if (!offer.features) {
    return false;
  }
  return checkedFeatures.every((arrItem) => offer.features.includes(arrItem));
};

const filtersFuncs = [isMatchHousingType, isMatchPrice, isMatchRooms, isMatchGuests, isMatchFeatures];

const filterOffer = (offer) => filtersFuncs.every((filterFunc) => filterFunc(offer));

const filter = (arr, count) => {
  arr = arr.filter(({offer}) => filterOffer(offer));
  return arr.slice(0, count);
};

//функция обновления по событию установки фильтров
const filterForm = document.querySelector('.map__filters');
const setFilterChange = (cb) => {
  filterForm.addEventListener('change', cb);
  filterForm.addEventListener('reset', cb);
};

const resetFilters = function() {
  filterForm.reset();
};

export {
  filter,
  setFilterChange,
  resetFilters
};
