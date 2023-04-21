import '../src/index.css';
import { openPopup, closePopup, closeClickOverlay, closePressEscape, submitEditProfileForm }
  from "./components/modal.js";
import {
  showInputError, hideInputError, isValid, toggleButtonState, setEventListeners,
  enableValidation, hasInvalidInput, settings
} from "./components/validate.js";
import { createCard, addCard } from './components/card.js';
import { getUserInfo, getInitialCards, avatarInfoPatch} from './components/api.js';

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
const closeButtons = document.querySelectorAll('.popup__close');
const buttonElementCreate = document.querySelector('.form__button__create');
const buttonEditAvatarSave = document.querySelector('.form__button-edit-avatar');


export const buttonSaveProfile = document.querySelector('.form__button');
export const buttonSaveAvatar = document.querySelector('.form__button-edit-avatar');

export function editAvatarInfo(result) {
  document.querySelector('.profile__info-cell-text').textContent = result.name
  document.querySelector('.profile__info-text').textContent = result.about
  document.querySelector('.profile__image').src = result.avatar
}

function toggleButton(settings,button) {
 button.disabled = true;
  button.classList.add(settings.formButtonDisabled);
}

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = job.textContent;
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formAddImage.reset();
  openPopup(popupAddImage);
  toggleButton(settings,buttonElementCreate);
});
buttonEditAvatar.addEventListener('click', function () {
  formEditAvatar.reset();
  toggleButton(settings,buttonEditAvatarSave);
  openPopup(popupEditAvatar);
});

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
  renderLoading(true,buttonSaveAvatar);
  avatarInfoPatch({ avatar: linkAvatar.value })
  closePopup(popupEditAvatar);
}

formEditAvatar.addEventListener('submit', editAvatar);

export function renderLoading(isLoading,button) {
  if (isLoading) {
    button.textContent = 'Сохранение';
  }
  else {
    button.textContent = 'Сохранить';
  }
}

enableValidation(settings);
getInitialCards()
getUserInfo()




