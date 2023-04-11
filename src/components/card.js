import { openPopup,closePopup } from "./modal.js";
const popupOpenCard = document.querySelector('.popup_open-card');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');
const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const elementList = document.querySelector('.elements');
const popupAddImage = document.querySelector('.popup_add_image');

export function createCard(nameInputImage, linkInputImage) {
  const templateElements = document.querySelector('#templateElements').content;
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;

  elements.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })

  elements.querySelector('.element__image').addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTextImage.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    openPopup(popupOpenCard); // не понимаю,почему не открывается попап, когда было в Index.js все работало
  })

  const deleteButtom = elements.querySelector('.element__button-trash');
  deleteButtom.addEventListener('click', function () {
    const element = deleteButtom.closest('.element');
    element.remove();
  })

  return elements;
}

export function addCard(evt) {
  evt.preventDefault();
  const card = createCard(nameInputImage.value, linkInputImage.value);
  elementList.prepend(card);// не понимаю,почему не добавляется карточка, когда было в Index.js все работало
  closePopup(popupAddImage);
}






