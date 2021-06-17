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

export {
  getRandomIntegerInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  randomArrayValues
};
