'use strict';
export const userInfoSettings = {
  profileNameSelector: ".profile__info-cell-text",
  profileAboutSelector: ".profile__info-text",
  profileAvatarSelector: ".profile__image"
}
export const validatorSettings = {
  formSelector: '.form',
  formNameTextSelector: '.form__name-text',
  formButtonSelector: '.form__button',
  formNameTextTypeErrorSelector: 'form__name-text_type_error',
  formInputErrorActiveSelector: 'form__input-error_active',
  formButtonDisabledSelector: 'form__button_disabled',
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
export const indexPageConfig = {
  editProfileSelector: '.popup_edit-profile',
  addImageSelector: '.popup_add_image',
  editAvatarSelector: '.popup_edit-avatar',
}
