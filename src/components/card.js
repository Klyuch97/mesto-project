import { closePopup, openPopup } from "./modal.js";
import { deleteCardServer, likePutServer, likeDeleteServer } from "./api.js";
const popupOpenCard = document.querySelector('.popup_open-card');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');

/*export function createCard(nameInputImage, linkInputImage, id, ownerId, arrayLikes, myId) {
  const templateElements = document.querySelector('#templateElements').content;
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;
  const likesNumber = elements.querySelector('.element__likes-number');
  const buttonLike = elements.querySelector('.element__button');


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
}*/


export default class Card {
  constructor(data, selector, handleCardClick, handleLikeClick, handleDeleteCard, myId) {
    this.data = data,
      this._name = data.name,
      this._id = data._id;
    this._ownerId = data.owner._id;
    this._arrayLikes = data.likes;
    this._myId = myId;
    this._link = data.link,
      this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }


  generateCard() {
    this.element = this._getElement();
    this._setEventListeners();
    this.elementText = this.element.querySelector('.element__text');
    this.elementLink = this.element.querySelector('.element__image');
    this.elementText.textContent = this._name;
    this.elementLink.src = this._link;
    this.elementLink.alt = this._link;
    this.likesNumber = this.element.querySelector('.element__likes-number');
    this.buttonLike = this.element.querySelector('.element__button');
    if (this._arrayLikes.length === 0) {
      this.likesNumber.textContent = '0';
    }
    else { this.likesNumber.textContent = this._arrayLikes.length };

    for (let i = 0; i < this._arrayLikes.length; i++)
      if (this._arrayLikes[i]._id === this._myId) {
        this.buttonLike.classList.add('element__button_active')
      }
    this.deleteButtom = this.element.querySelector('.element__button-trash');
    /*if (this._myId !== this._ownerId) {
      this.deleteButtom.style.display = "none";
    }*/


    return this.element;
  }


  _setEventListeners() {
    this.element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this.data);
    });
    this.element.querySelector('.element__button').addEventListener('click', () => {
      this._handleLikeClick(this._name, this._link);
    });
    this.element.querySelector('.element__button-trash').addEventListener('click', () => {
     this._handleDeleteCard(this._name, this._link);
    })
  }
}


