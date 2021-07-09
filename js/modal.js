// Функция  отображения обратной связи об отправке формы
const showModal = (typeMessage) => {
  const templateModal = document.querySelector(`#${typeMessage}`)
    .content
    .querySelector(`.${typeMessage}`);
  const modalElement = templateModal.cloneNode(true);
  modalElement.addEventListener('click', () => {
    modalElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      modalElement.remove();
    }
  });
  return modalElement;
};

export {
  showModal
};
