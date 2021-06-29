const MAX_PRICE_VALUE = 1000000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const filtersForm = document.querySelector('.map__filters');
const mapFeatures = filtersForm.querySelector('.map__features');
const mapFilter = filtersForm.querySelectorAll('.map__filter');

const minPriceTypeHousing = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000,
};

function makeFormState(isDisabled) {
  if (isDisabled) {
    adForm.classList.add('ad-form--disabled');
    filtersForm.classList.add('ad-form--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
    filtersForm.classList.remove('ad-form--disabled');
  }
  adFormHeader.disabled = isDisabled;
  adFormElement.forEach((element, i) => {
    adFormElement[i].disabled = isDisabled;
  });
  mapFeatures.disabled = isDisabled;
  mapFilter.forEach((element, i) => {
    mapFilter[i].disabled = isDisabled;
  });
}

makeFormState(false);

// Валидация поля "Заголовок объявления"

const titleInput = document.querySelector('#title');

titleInput.addEventListener('input', () => {
  const valueLength =  titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Напишите ещё ${  MIN_TITLE_LENGTH - valueLength } символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } символов`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

// Валидация поля "Цена за ночь"


let minPriceValue = minPriceTypeHousing.flat;
const priceInput = document.querySelector('#price');

priceInput.addEventListener('input', () => {
  const valuePrice =  priceInput.value;

  if (valuePrice < minPriceValue) {
    priceInput.setCustomValidity(`Цена должна быть не менее ${ minPriceValue }`);
  } else if (valuePrice > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Цена должна быть не более ${ MAX_PRICE_VALUE }`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

// Валидация полей "Количество комнат" и "Количество мест"

const buttonFormSubmit = document.querySelector('.ad-form__submit');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
buttonFormSubmit.addEventListener('click', () => {
  if (parseInt(roomNumberSelect.value) < 100) {
    if (parseInt(capacitySelect.value) > parseInt(roomNumberSelect.value) || capacitySelect.value === '0') {
      capacitySelect.setCustomValidity('Количество гостей не должно превышать количество комнат');
    } else {
      capacitySelect.setCustomValidity('');
    }
  } else {
    if (capacitySelect.value !== '0') {
      capacitySelect.setCustomValidity('100 комнат не для гостей');
   } else {
    capacitySelect.setCustomValidity('');
   }
  }

  capacitySelect.reportValidity();
});

// Валидация поля «Тип жилья»

const typeSelect = document.querySelector('#type');
typeSelect.addEventListener('change', () => {
  switch (typeSelect.value) {
    case 'bungalow':
      minPriceValue = minPriceTypeHousing.bungalow;
      break;
    case 'flat':
      minPriceValue = minPriceTypeHousing.flat;
      break;
    case 'hotel':
      minPriceValue = minPriceTypeHousing.hotel;
      break;
    case 'house':
      minPriceValue = minPriceTypeHousing.house;
      break;
    case 'palace':
      minPriceValue = minPriceTypeHousing.palace;
      break;
  }
});

// Валидация поля «Время заезда-выезда».

const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');

timeinSelect.addEventListener('change', () => {
  timeoutSelect.value = timeinSelect.value;

});

timeoutSelect.addEventListener('change', () => {
  timeinSelect.value = timeoutSelect.value;
});

