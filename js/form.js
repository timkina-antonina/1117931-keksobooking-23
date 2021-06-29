const MIN_PRICE_VALUE_BUNGALOW = 0;
const MIN_PRICE_VALUE_FLAT = 1000;
const MIN_PRICE_VALUE_HOTEL = 3000;
const MIN_PRICE_VALUE_HOUSE = 5000;
const MIN_PRICE_VALUE_PALACE = 10000;

const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const filtersForm = document.querySelector('.map__filters');
const mapFeatures = filtersForm.querySelector('.map__features');
const mapFilter = filtersForm.querySelectorAll('.map__filter');

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

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
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

const MAX_PRICE_VALUE = 1000000;
let minPriceValue = MIN_PRICE_VALUE_FLAT;
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
  switch (roomNumberSelect.value) {
    case '1':
      if (capacitySelect.value !== '1') {
        capacitySelect.setCustomValidity('Количество гостей не может быть больше 1');
      } else {
        capacitySelect.setCustomValidity('');
      }
      break;
    case '2':
      if (capacitySelect.value !== '1') {
        if (capacitySelect.value !== '2') {
          capacitySelect.setCustomValidity('Количество гостей не может быть больше 2');
        } else {
          capacitySelect.setCustomValidity('');
        }
      } else {
        capacitySelect.setCustomValidity('');
      }
      break;
    case '3':
      if (capacitySelect.value === '0') {
        capacitySelect.setCustomValidity('Количество гостей не может быть больше 3');
      } else {
        capacitySelect.setCustomValidity('');
      }
      break;
    case '100':
      if (capacitySelect.value !== '0') {
        capacitySelect.setCustomValidity('Количество гостей не может быть меньше 3');
      } else {
        capacitySelect.setCustomValidity('');
      }
      break;
  }
  capacitySelect.reportValidity();
});

// Валидация поля «Тип жилья»

const typeSelect = document.querySelector('#type');
typeSelect.addEventListener('change', () => {
  switch (typeSelect.value) {
    case 'bungalow':
      minPriceValue = MIN_PRICE_VALUE_BUNGALOW;
      break;
    case 'flat':
      minPriceValue = MIN_PRICE_VALUE_FLAT;
      break;
    case 'hotel':
      minPriceValue = MIN_PRICE_VALUE_HOTEL;
      break;
    case 'house':
      minPriceValue = MIN_PRICE_VALUE_HOUSE;
      break;
    case 'palace':
      minPriceValue = MIN_PRICE_VALUE_PALACE;
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

