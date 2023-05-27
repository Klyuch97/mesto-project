'use strict';
export const userInfoSettings = {
  profileNameSelector: ".profile__info-cell-text",
  profileAboutSelector: ".profile__info-text",
  profileAvatarSelector: ".profile__image"
}
export const validatorSettings = {
  form: '.form',
  formNameText: '.form__name-text',
  formButton: '.form__button',
  formNameTextTypeError: 'form__name-text_type_error',
  formInputErrorActive: 'form__input-error_active',
  formButtonDisabled: 'form__button_disabled',
};
export const cardSectionConfig = {
  deleteConfirmationSelector: '.popup_confirm-delete',
  cardViewSelector: '.popup_open-card',
  cardTemplate: '#templateElements'
}
export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
    'Content-Type': 'application/json',
  }
};
export const cardConfig = {
  likeButtonSelector: '.element__button',
  likeCounterSelector: '.element__likes-number',
  imageSelector: '.element__image',
  cardNameTextSelector: '.element__text',
  removeButtonSelector: '.element__button-trash'
}


