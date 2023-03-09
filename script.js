document.querySelector('.content');
const openPopup = document.querySelector('.profile__info-cell-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('popup_opened');
  document.querySelector('.form__name-text').value = document.querySelector('.profile__info-cell-text').textContent
  document.querySelector('input:nth-of-type(2)').value = document.querySelector('.profile__info-text').textContent

  /*сделать запись короче и читабельнее*/
})

closePopup.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.remove('popup_opened');
})

const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');

function formSubmitHandler(evt) {

  evt.preventDefault();
  let a = nameInput.value;
  let b = jobInput.value;

  // Получите значение полей jobInput и nameInput из свойства value
  let name = document.querySelector('.profile__info-cell-text');
  let job = document.querySelector('.profile__info-text');

  // Выберите элементы, куда должны быть вставлены значения полей

  name.textContent = a;
  job.textContent = b;
  popup.classList.remove('popup_opened');

  // Вставьте новые значения с помощью textContent
}
formElement.addEventListener('submit', formSubmitHandler);

const openPopup2 = document.querySelector('.profile__button');
const popup2 = document.querySelector('.popup_add_image');
const closePopup2 = document.querySelector('.popup__close_add_image');

openPopup2.addEventListener('click', function (e) {
  e.preventDefault();
  popup2.classList.add('popup_opened');
})

closePopup2.addEventListener('click', function (e) {
  e.preventDefault();
  popup2.classList.remove('popup_opened');
})
