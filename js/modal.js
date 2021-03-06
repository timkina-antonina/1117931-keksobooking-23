// Функция  отображения обратной связи об отправке формы
const showModal = (typeMessage) => {
  const templateModal = document.querySelector(`#${typeMessage}`)
    .content
    .querySelector(`.${typeMessage}`);
  const modalElement = templateModal.cloneNode(true);

  const onModalEscKeydown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      modalElement.remove();
      document.removeEventListener('keydown', onModalEscKeydown);
    }
  };

  modalElement.addEventListener('click', () => {
    modalElement.remove();
  });
  document.addEventListener('keydown', onModalEscKeydown);
  return modalElement;
};

export {
  showModal
};
