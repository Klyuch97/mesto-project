import '../src/index.css';
import { openPopup, closePopup, closeClickOverlay, closePressEscape, submitEditProfileForm }
  from "./components/modal.js";
import {
  showInputError, hideInputError, isValid, toggleButtonState, setEventListeners,
  enableValidation, hasInvalidInput, settings
} from "./components/validate.js";
import { createCard, addCard } from './components/card.js';
import { getAvatarInfo, getInitialCards, avatarInfoPatch,deleteCardServer,renderLoading } from './components/api.js';

const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');
const buttonOpenAddCardPopup = document.querySelector('.profile__button');
const popupAddImage = document.querySelector('.popup_add_image');
const formAddImage = document.querySelector('.form_add-image');
const nameProfile = document.querySelector('.profile__info-cell-text');
const job = document.querySelector('.profile__info-text');
const formElement = document.querySelector('.form');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
const popupEditAvatar = document.querySelector('.popup_edit-avatar');
const formEditAvatar = document.querySelector('.form_edit-avatar')
const linkAvatar = document.querySelector('.form_avatar');


function toggleButton(settings) {
  const buttonElementCreate = document.querySelector('.form__button__create');
  const buttonEditAvatar = document.querySelector('.form__button-edit-avatar');
  buttonElementCreate.disabled = true;
  buttonElementCreate.classList.add(settings.formButtonDisabled);
  buttonEditAvatar.disabled = true;
  buttonEditAvatar.classList.add(settings.formButtonDisabled);
}

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = job.textContent;
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formAddImage.reset();
  openPopup(popupAddImage);
  toggleButton(settings);
});

buttonEditAvatar.addEventListener('click', function () {
  formEditAvatar.reset();
  toggleButton(settings);
  openPopup(popupEditAvatar);
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

formAddImage.addEventListener('submit', addCard);

function editAvatar(evt) {
  evt.preventDefault();
  const avatar = document.querySelector('.profile__image');
  const linkAvatarValue = linkAvatar.value
  avatar.src = linkAvatarValue;
  renderLoading(true);
  avatarInfoPatch({ avatar: linkAvatar.value })
  closePopup(popupEditAvatar);
}

formEditAvatar.addEventListener('submit', editAvatar);

enableValidation(settings);
getInitialCards()
getAvatarInfo()




