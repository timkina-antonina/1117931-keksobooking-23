const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const filtersForm = document.querySelector('.map__filters');
const mapFeatures = filtersForm.querySelector('.map__features');
const mapFilter = filtersForm.querySelectorAll('.map__filter');

function makeFormDisabled() {
  adForm.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  adFormElement.forEach((element, i) => {
    adFormElement[i].disabled = true;
  });

  filtersForm.classList.add('ad-form--disabled');
  mapFeatures.disabled = true;
  mapFilter.forEach((element, i) => {
    mapFilter[i].disabled = true;
  });
}

function makeFormActive() {
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  adFormElement.forEach((element, i) => {
    adFormElement[i].disabled = false;
  });

  filtersForm.classList.remove('ad-form--disabled');
  mapFeatures.disabled = false;
  mapFilter.forEach((element, i) => {
    mapFilter[i].disabled = false;
  });
}

makeFormDisabled();
makeFormActive();
