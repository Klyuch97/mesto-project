
export const nameInput = document.querySelector('.form__name-text');
export const jobInput = document.querySelector('input:nth-of-type(2)');
export const nameProfile = document.querySelector('.profile__info-cell-text');
export const job = document.querySelector('.profile__info-text');


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePressEscape);
  popup.addEventListener('click', closeClickOverlay);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePressEscape);
  popup.removeEventListener('click', closeClickOverlay);
}
export function closePressEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    if (popupOpen) {
      closePopup(popupOpen);
    }
  }
}

export function closeClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}


