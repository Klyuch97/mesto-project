document.querySelector('.content');
const openPopup = document.querySelector('.profile__info-cell-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup_opened');
  document.querySelector('.form__name-text').value = document.querySelector('.profile__info-cell-text').textContent
  document.querySelector('input:nth-of-type(2)').value = document.querySelector('.profile__info-text').textContent

})

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
})
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');

function formSubmitHandler(evt) {

  evt.preventDefault();
  let inputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  let name = document.querySelector('.profile__info-cell-text');
  let job = document.querySelector('.profile__info-text');
  // Выберите элементы, куда должны быть вставлены значения полей
  name.textContent = inputValue;
  job.textContent = jobInputValue;
  popup.classList.remove('popup_opened');
  // Вставьте новые значения с помощью textContent
}
formElement.addEventListener('submit', formSubmitHandler);

const openPopup2 = document.querySelector('.profile__button');
const popup2 = document.querySelector('.popup_add_image');
const closePopup2 = document.querySelector('.popup__close_add_image');

openPopup2.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup2.classList.add('popup_opened');
})

closePopup2.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup2.classList.remove('popup_opened');
})

const elementList = document.querySelector('.elements');
const templateElements = document.querySelector('#templateElements').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');


function createCard() {
  const elements = templateElements.cloneNode(true);
  const nameInputImageValue = nameInputImage.value;
  const linkInputImageValue = linkInputImage.value;
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImageValue;
  elementLink.src = linkInputImageValue;
  return elements;
}

function addCard(evt) {
  evt.preventDefault();
  const card = createCard();
  elementList.prepend(card);
  popup2.classList.remove('popup_opened');
  document.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })
  const deleteButtom = document.querySelector('.element__button-trash');
  deleteButtom.addEventListener('click', function () {
    const element = deleteButtom.closest('.element');
    element.remove();
  })
}

initialCards.forEach(function (element) {
  const elements = templateElements.cloneNode(true);
  elements.querySelector('.element__text').textContent = element.name;
  elements.querySelector('.element__image').src = element.link;
  elementList.append(elements);
})

const likeButton = document.querySelectorAll('.element__button');
likeButton.forEach(function (likeBtn) {
  likeBtn.addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })
})

const deleteBtn = document.querySelectorAll('.element__button-trash');

deleteBtn.forEach(function (deleteFunction) {
  deleteFunction.addEventListener('click', function () {
    deleteFunction.parentNode.remove()
  })
})
formAddImage.addEventListener('submit', addCard);



