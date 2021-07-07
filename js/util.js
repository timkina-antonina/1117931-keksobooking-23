const ALERT_SHOW_TIME = 5000;

const showAlert = (message, color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.сolor = 'white';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

// const getRandomIntegerInclusive = function (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   if (min <= max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   return 'Минимальное значение диапазона должно быть меньше максимального. Или диапазон не содержит целых значений.';
// };

// const getRandomFloatInclusive = function (min, max, decimalPlaces) {
//   if (min < max) {
//     const randomFloatInclusive = Math.random() * (max - min) + min;
//     return randomFloatInclusive.toFixed(decimalPlaces);
//   }

//   return 'Минимальное значение диапазона должно быть меньше максимального.';
// };

// const getRandomArrayElement = (elements) => elements[getRandomIntegerInclusive(0, elements.length - 1)];


// const randomArrayValues = (lengthArray, array) => {
//   const newArray = [];
//   while (newArray.length < lengthArray) {
//     const arrayIndex = getRandomIntegerInclusive(0, array.length - 1);
//     if (newArray.includes(array[arrayIndex]) === false) {
//       newArray.push(array[arrayIndex]);
//     }
//   }
//   return newArray;
// };

export {
  showAlert
};
