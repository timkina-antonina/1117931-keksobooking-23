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

getRandomIntegerInclusive(1.4, 2.5);
getRandomFloatInclusive(0.5, 3, 2);
