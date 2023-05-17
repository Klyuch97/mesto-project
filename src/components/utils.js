import Api from "./api.js";

export const settings = {
  form: '.form',
  formNameText: '.form__name-text',
  formButton: '.form__button',
  formNameTextTypeError: 'form__name-text_type_error',
  formInputErrorActive: 'form__input-error_active',
  formButtonDisabled: 'form__button_disabled',
};
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23/",
  headers: {
    authorization: "70b0f800-c3d5-43c3-9a38-db0198e51959",
    "content-Type": "application/json",
  },
});

const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
const buttonOpenAddCardPopup = document.querySelector('.profile__button');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
const popupEditAvatar = document.querySelector('.popup_edit-avatar');
const popupAddImage = document.querySelector('.popup_add_image');
const popupOpenCard = document.querySelector('.popup_open-card');
const popupNameImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');

export {
  buttonOpenEditProfilePopup, popupEdifProfile, buttonOpenAddCardPopup,
  buttonEditAvatar, popupEditAvatar, popupAddImage, popupNameImage, popupImage,api
}
