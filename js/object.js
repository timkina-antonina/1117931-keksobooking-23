import {
  getRandomIntegerInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  randomArrayValues
} from './util.js';

import {
  ANNOUNCEMENT_COUNT,
  DECIMAL_PLACES,
  LATITUDE_START,
  LATITUDE_END,
  LONGITUDE_START,
  LONGITUDE_END,
  MAX_PRICE,
  MAX_ROOMS_COUNT,
  MAX_USERS_COUNT,
  TYPE,
  CHECKIN,
  CHECKOUT,
  FEATURES,
  PHOTOS
} from './data.js';


const createLocation = () => (
  {
    lat: getRandomFloatInclusive(LATITUDE_START, LATITUDE_END, DECIMAL_PLACES),
    lng: getRandomFloatInclusive(LONGITUDE_START, LONGITUDE_END, DECIMAL_PLACES),
  }
);

const createOffer = (location) => (
  {
    title: 'Предложение',
    address: `${location.lat},  ${location.lng}`,
    price: getRandomIntegerInclusive(1, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomIntegerInclusive(1, MAX_ROOMS_COUNT),
    guests: getRandomIntegerInclusive(1, MAX_USERS_COUNT),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: randomArrayValues(getRandomIntegerInclusive(1, FEATURES.length - 1), FEATURES),
    description: 'Описание помещения',
    photos: randomArrayValues(getRandomIntegerInclusive(1, PHOTOS.length - 1), PHOTOS),
  }
);

const announcement = new Array(ANNOUNCEMENT_COUNT).fill(null).map((it, num) => {
  const location = createLocation();
  num = num + 1;
  const avatar = num < 10 ? `0${num.toString()}` : num;
  return {
    author: `img/avatars/user${avatar.toString()}.png`,
    offer: createOffer(location),
    location: location,
  };
});

export {
  announcement
};
