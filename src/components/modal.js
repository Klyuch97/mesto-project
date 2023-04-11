const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');
const nameProfile = document.querySelector('.profile__info-cell-text');
const job = document.querySelector('.profile__info-text');
const popupEdifProfile = document.querySelector('.popup_edit-profile');

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

export function submitEditProfileForm(evt) {
  evt.preventDefault();
  const inputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  nameProfile.textContent = inputValue;
  job.textContent = jobInputValue;
  closePopup(popupEdifProfile);
}
