import { openPopup, closePopup } from "./modal.js";
import { addCardServerPost, deleteCardServer, likePutServer, likeDeleteServer, getInitialCards } from "./api.js";
import { renderLoading, buttonElementCreate, myId } from "../index.js";
const popupOpenCard = document.querySelector('.popup_open-card');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');
const formAddImage = document.querySelector('.form_add-image');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const elementList = document.querySelector('.elements');
const popupAddImage = document.querySelector('.popup_add_image');


export function createCard(nameInputImage, linkInputImage, id, ownerId, arrayLikes, myId) {
  const templateElements = document.querySelector('#templateElements').content;
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;
  const likesNumber = elements.querySelector('.element__likes-number');
  const buttonLike = elements.querySelector('.element__button');
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
      likePutServer(buttonLike.dataset.id = id)
        .then(() => { event.target.nextElementSibling.textContent++; })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль
        })
    }
    else {

      likeDeleteServer(buttonLike.dataset.id = id)
        .then(() => { event.target.nextElementSibling.textContent--; })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль
        })
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
      .then(() => {
        element.remove();
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      })
  })

  return elements;
}

export function addCard(evt) {
  evt.preventDefault();
  renderLoading(true, buttonElementCreate);
  addCardServerPost({ name: nameInputImage.value, link: linkInputImage.value })
    .then(data => {
      const card = createCard(data.name, data.link,
        data._id, data.owner._id, data.likes, data.owner._id );
      elementList.prepend(card);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, buttonElementCreate)
      closePopup(popupAddImage);
    })
}






