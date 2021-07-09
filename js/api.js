// Получение данных
const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((announcements) => {
      onSuccess(announcements);
    })
    .catch(() => {
      onFail('Не удалось получить данные');
    });
};

// Отправка данных
const sendData = (body, onSuccess, onError) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {
  getData,
  sendData
};
