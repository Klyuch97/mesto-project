document.querySelector('.content');
const popupOpen = document.querySelector('.profile__info-cell-button');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-text');
const jobInput = document.querySelector('input:nth-of-type(2)');
const popupOpenAddCard = document.querySelector('.profile__button');
const popupAddImage = document.querySelector('.popup_add_image');
const popupAddImageClose = document.querySelector('.popup__close_add_image');
const elementList = document.querySelector('.elements');
const templateElements = document.querySelector('#templateElements').content;
const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const name = document.querySelector('.profile__info-cell-text');
const job = document.querySelector('.profile__info-text');
const closePopupImage = document.querySelector('.popup__close_image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
popupOpen.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = document.querySelector('.profile__info-cell-text').textContent
  jobInput.value = document.querySelector('.profile__info-text').textContent
});

popupOpenAddCard.addEventListener('click', function () {
  document.querySelector('.form_add-image').reset();
  openPopup(popupAddImage);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', function () {
  closePopup(popup);
});
popupAddImageClose.addEventListener('click', function () {
  closePopup(popupAddImage);
});

closePopupImage.addEventListener('click', function () {
  closePopup(popupOpenCard);
})

function submitFormHandler(evt) {
  evt.preventDefault();
  const inputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  const name = document.querySelector('.profile__info-cell-text');
  const job = document.querySelector('.profile__info-text');
  // Выберите элементы, куда должны быть вставлены значения полей
  name.textContent = inputValue;
  job.textContent = jobInputValue;
  popup.classList.remove('popup_opened');
  // Вставьте новые значения с помощью textContent
}
formElement.addEventListener('submit', submitFormHandler);

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
  popupAddImage.classList.remove('popup_opened');
  document.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })

  document.querySelector('.element__image').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.popup__text-image').textContent = document.querySelector('.element__text').textContent;
    document.querySelector('.popup__image').src = document.querySelector('.element__image').src;
    evt.target;
    openPopup(popupOpenCard);
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

const popupOpenCard = document.querySelector('.popup_open-card');
const elementImage = document.querySelectorAll('.element__image');
const popupImage = popupOpenCard.querySelector('.popup__image');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');

elementImage.forEach(function (open) {
  open.addEventListener('click', function (evt) {
    popupTextImage.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    openPopup(popupOpenCard);
  })
})





