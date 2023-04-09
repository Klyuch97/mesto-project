const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const buttonCloseEditProfilePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
//const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');
const buttonOpenAddCardPopup = document.querySelector('.profile__button');
const popupAddImage = document.querySelector('.popup_add_image');
const buttonCloseAddCardPopup = document.querySelector('.popup__close_add_image');
const elementList = document.querySelector('.elements');
const templateElements = document.querySelector('#templateElements').content;
const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const nameProfile = document.querySelector('.profile__info-cell-text');
const job = document.querySelector('.profile__info-text');
const buttonCloseImagePopup = document.querySelector('.popup__close_image');
const popupOpenCard = document.querySelector('.popup_open-card');
const popupImage = popupOpenCard.querySelector('.popup__image');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');



// Вынесем все необходимые элементы формы в константы

const formElement = document.querySelector('.form');

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('form__name-text_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('form__name-text_type_error');
  formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
  if (formInput.validity.patternMismatch) {
    // данные атрибута доступны у элемента инпута через ключевое слово dataset.
    // обратите внимание, что в js имя атрибута пишется в camelCase (да-да, в
    // HTML мы писали в kebab-case, это не опечатка)
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

const toggleButtonState = (inputList, buttonElement) => {
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

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  const inputList = Array.from(formElement.querySelectorAll('.form__name-text'));
  const buttonElement = formElement.querySelector('.form__button');
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


const enableValidation = () => {
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
enableValidation();

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};






function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePressEscape);
  popup.addEventListener('click', closeClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePressEscape);
  popup.removeEventListener('click', closeClickOverlay);
}

function closePressEscape(evt) {
  if (evt.key === 'Escape') {
    let popupOpen = document.querySelector('.popup_opened');
    if (popupOpen) {
      popupOpen.classList.remove('popup_opened');
    }
  }
}

function closeClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    let popupOpen = document.querySelector('.popup_opened');
    if (popupOpen) {
      popupOpen.classList.remove('popup_opened');
    }
  }
}

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = nameProfile.textContent
  jobInput.value = job.textContent
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formAddImage.reset();
  openPopup(popupAddImage);
});

buttonCloseEditProfilePopup.addEventListener('click', function () {
  closePopup(popupEdifProfile);
});

buttonCloseAddCardPopup.addEventListener('click', function () {
  closePopup(popupAddImage);
});

buttonCloseImagePopup.addEventListener('click', function () {
  closePopup(popupOpenCard);
})

function submitEditProfileForm(evt) {
  evt.preventDefault();
  const inputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  nameProfile.textContent = inputValue;
  job.textContent = jobInputValue;
  closePopup(popupEdifProfile);
}

formElement.addEventListener('submit', submitEditProfileForm);

function createCard(nameInputImage, linkInputImage) {
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;

  elements.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })

  elements.querySelector('.element__image').addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTextImage.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    openPopup(popupOpenCard);
  })

  const deleteButtom = elements.querySelector('.element__button-trash');
  deleteButtom.addEventListener('click', function () {
    const element = deleteButtom.closest('.element');
    element.remove();
  })

  return elements;
}

function addCard(evt) {
  evt.preventDefault();
  const card = createCard(nameInputImage.value, linkInputImage.value);
  elementList.prepend(card);
  closePopup(popupAddImage);
}

initialCards.forEach(function (element) {
  const card = createCard(element.name, element.link);
  elementList.append(card);
})

formAddImage.addEventListener('submit', addCard);





