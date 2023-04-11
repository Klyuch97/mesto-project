import '../src/index.css';
import { initialCards } from './components/constants.js';
import { openPopup, closePopup, closeClickOverlay, closePressEscape, submitEditProfileForm }
  from "./components/modal.js";
import {
  showInputError, hideInputError, isValid, toggleButtonState, setEventListeners,
  enableValidation, hasInvalidInput
} from "./components/validate.js";
import { createCard, addCard } from './components/card.js';
const popup = document.querySelector('.popup');
const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const buttonCloseEditProfilePopup = document.querySelector('.popup__close');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
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
const formElement = document.querySelector('.form');


const settings = {
  form: '.form',
  formNameText: '.form__name-text',
  formButton: '.form__button',
};
//  из-за чего ошибка в консоли, понять не могу, я так понимаю,наверное, в путях, но все делал по тренажеру, 
//  подключал npm и weppack

enableValidation(settings);

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = nameProfile.textContent
  jobInput.value = job.textContent
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formAddImage.reset();
  openPopup(popupAddImage);
  setEventListeners(popupAddImage, settings);
});

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

formElement.addEventListener('submit', submitEditProfileForm);

initialCards.forEach(function (element) {
  const card = createCard(element.name, element.link);
  elementList.append(card);
})

formAddImage.addEventListener('submit', addCard);



