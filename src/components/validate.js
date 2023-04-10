
// Функция, которая добавляет класс с ошибкой
export const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('form__name-text_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
export const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('form__name-text_type_error');
  formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
export const isValid = (formElement, formInput) => {
  if (formInput.validity.patternMismatch) {
    // данные атрибута доступны у элемента инпута через ключевое слово dataset.

    formInput.setCustomValidity(formInput.dataset.errorMessage);
  } else {
    formInput.setCustomValidity("");
  }
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, formInput);
  }
};

export const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add('form__button_disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
    buttonElement.classList.remove('form__button_disabled');
  }
};

export const setEventListeners = (formElement) => {

  // Находим все поля внутри формы,
  const inputList = Array.from(formElement.querySelectorAll('.form__name-text'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((formInput) => {
    // каждому полю добавим обработчик события input
    formInput.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию


export const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};
