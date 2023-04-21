import { openPopup, closePopup } from "./modal.js";
import { addCardServerPost, deleteCardServer, likePutServer, likeDeleteServer } from "./api.js";
import { renderLoading } from "../index.js";
const popupOpenCard = document.querySelector('.popup_open-card');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');
const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const elementList = document.querySelector('.elements');
const popupAddImage = document.querySelector('.popup_add_image');


export function createCard(nameInputImage, linkInputImage, id, ownerId, arrayLikes) {
  const templateElements = document.querySelector('#templateElements').content;
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;
  const likesNumber = elements.querySelector('.element__likes-number');
  const buttonLike = elements.querySelector('.element__button');
  const myId = "c4229ae43c28a79de6bd8609";

  if (arrayLikes.length === 0) {
    likesNumber.textContent = '0';
  }
  else { likesNumber.textContent = arrayLikes.length };

  for (let i = 0; i < arrayLikes.length; i++)
    if (arrayLikes[i]._id === myId) {
      buttonLike.classList.add('element__button_active')
    }

  buttonLike.addEventListener('click', function (event) {

    buttonLike.dataset.id = id;
    if (event.target.classList.toggle('element__button_active')) {
      event.target.nextElementSibling.textContent++;
      likePutServer(buttonLike.dataset.id = id)
    }
    else {
      event.target.nextElementSibling.textContent--;
      likeDeleteServer(buttonLike.dataset.id = id)
    }
  })

  elements.querySelector('.element__image').addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTextImage.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    openPopup(popupOpenCard);
  })

  const deleteButtom = elements.querySelector('.element__button-trash');

  if (myId !== ownerId) {
    deleteButtom.style.display = "none";
  }
  deleteButtom.addEventListener('click', function () {
    const element = deleteButtom.closest('.element');
    element.dataset.id = id;
    deleteCardServer(element.dataset.id)
    element.remove();
  })

  return elements;
}

export function addCard(evt) {
  evt.preventDefault();
  const card = createCard(nameInputImage.value, linkInputImage.value);
  elementList.prepend(card);
  renderLoading(true);
  addCardServerPost({ name: nameInputImage.value, link: linkInputImage.value })
  closePopup(popupAddImage);
}






