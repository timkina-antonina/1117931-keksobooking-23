const getRandomIntegerInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return 'Минимальное значение диапазона должно быть меньше максимального. Или диапазон не содержит целых значений.';
};

const getRandomFloatInclusive = function (min, max, decimalPlaces) {
  if (min < max) {
    const randomFloatInclusive = Math.random() * (max - min) + min;
    return randomFloatInclusive.toFixed(decimalPlaces);
  }

  return 'Минимальное значение диапазона должно быть меньше максимального.';
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MAX_PRICE = 1000000;
const MAX_ROOMS_COUNT = 20;
const MAX_USERS_COUNT = 1000;
const ADS_COUNT = 10;

const getRandomArrayElement = (elements) => {
  elements[getRandomIntegerInclusive(0, elements.length - 1)];
};

const randoArrayValues = (lengthArray, array) => {
  const newArray = [];
  while (newArray.length < lengthArray) {
    const arrayIndex = getRandomIntegerInclusive(0, array.length - 1);
    if (newArray.includes(array[arrayIndex]) === false) {
      newArray.push(array[arrayIndex]);
    }
  }
  return newArray;
};

const createAuthor = () => {
  let randomNumberAvatar = getRandomIntegerInclusive(1, 10);
  if (randomNumberAvatar < 10) {
    randomNumberAvatar = `0${randomNumberAvatar.toString()}`;
  }
  return {
    avatar: `img/avatars/user${randomNumberAvatar}.png`,
  };
};

const createLocation = () => (
  {
    lat: getRandomFloatInclusive(35.65, 35.7, 5),
    lng: getRandomFloatInclusive(139.7, 139.8, 5),
  };
);

const createOffer = () => {
  const location = createLocation();
  return {
    title: 'Предложение',
    address: `${location.lat},  ${location.lng}`,
    price: getRandomIntegerInclusive(1, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomIntegerInclusive(1, MAX_ROOMS_COUNT),
    guests: getRandomIntegerInclusive(1, MAX_USERS_COUNT),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: randoArrayValues(getRandomIntegerInclusive(1, FEATURES.length - 1), FEATURES),
    description: 'Описание помещения',
    photos: randoArrayValues(getRandomIntegerInclusive(1, PHOTOS.length - 1), PHOTOS),
  };
};

const announcement = new Array(ADS_COUNT).fill(null).map(() => (
  {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };
));

announcement();
