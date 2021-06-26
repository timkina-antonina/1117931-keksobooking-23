import {announcement} from './object.js';

// находим шаблон для объявления #card
const templateCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

// находим куда вставлять
const map = document.querySelector('#map-canvas');
const similarAnnouncement = announcement;
// const similarAnnouncementFragment = document.createDocumentFragment();
const typeHousing = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const printTypeHousing = function (type) {
  return typeHousing[type];
};

function drawCard(offer, author) {
  const cardElement = templateCard.cloneNode(true);

  // popup__title
  if (offer.title) {
    cardElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    cardElement.querySelector('.popup__title').remove();
  }

  // popup__text--address
  if (offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').remove();
  }

  // popup__text--price
  if (offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').remove();
  }

  // popup__type
  if (offer.type) {
    cardElement.querySelector('.popup__type').textContent = printTypeHousing(offer.type);
  } else {
    cardElement.querySelector('.popup__type').remove();
  }

  // popup__text--capacity
  if (offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }

  // popup__text--time
  if (offer.checkin) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }

  // popup__features
  if (offer.features) {
    const popupFeatureElements = cardElement.querySelector('.popup__features');
    const livePopupFeatureElements = popupFeatureElements.children;
    for (let i = livePopupFeatureElements.length - 1; i >= 0; i--) {
      livePopupFeatureElements[i].remove();
    }
    const popupFeatureFragment = document.createDocumentFragment();
    offer.features.forEach((currentValue, i) => {
      const newElement = document.createElement('li');
      newElement.classList.add('popup__feature');
      newElement.classList.add(`popup__feature--${offer.features[i]}`);
      popupFeatureFragment.appendChild(newElement);
    });
    cardElement.querySelector('.popup__features').appendChild(popupFeatureFragment);
  } else {
    cardElement.querySelector('.popup__features').remove();
  }

  // popup__description
  if (offer.checkin) {
    cardElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }

  // popup__photos
  if (offer.photos) {
    const popupPhotos = cardElement.querySelector('.popup__photos');
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    const photoElement = popupPhoto.cloneNode(true);
    popupPhoto.remove();
    offer.photos.forEach((currentValue, i) => {
      const newElement = photoElement;
      newElement.src = offer.photos[i];
      popupPhotos.appendChild(newElement);
    });
  } else {
    cardElement.querySelector('.popup__photos').remove();
  }

  // popup__avatar
  if (author) {
    cardElement.querySelector('.popup__avatar').src = author;
  } else {
    cardElement.querySelector('.popup__avatar').remove();
  }
  return cardElement;
}

// similarAnnouncement.forEach(({author, offer}) => {
// const cardElement = drawCard(offer, author);
// similarAnnouncementFragment.appendChild(cardElement);
// });

// map.appendChild(similarAnnouncementFragment);
map.appendChild(drawCard(similarAnnouncement[0].offer, similarAnnouncement[0].author));
