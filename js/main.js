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
const ANNOUNCEMENT_COUNT = 10;
const IMAGES_COUNT = 10;

const getRandomArrayElement = (elements) => elements[getRandomIntegerInclusive(0, elements.length - 1)];


const randomArrayValues = (lengthArray, array) => {
  const newArray = [];
  while (newArray.length < lengthArray) {
    const arrayIndex = getRandomIntegerInclusive(0, array.length - 1);
    if (newArray.includes(array[arrayIndex]) === false) {
      newArray.push(array[arrayIndex]);
    }
  }
  return newArray;
};

const LATITUDE_START = 35.65;
const LATITUDE_END = 35.7;
const LONGITUDE_START = 139.7;
const LONGITUDE_END = 139.8;
const DECIMAL_PLACES = 5;

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
  let avatar = num < 10 ? `0${num.toString()}` : num;
  return {
    author: `img/avatars/user${avatar.toString()}.png`,
    offer: createOffer(location),
    location: location,
  };
});

// announcement();
console.log(announcement);
