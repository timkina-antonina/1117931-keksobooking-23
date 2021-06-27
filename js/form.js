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
