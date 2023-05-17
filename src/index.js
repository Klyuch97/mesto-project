import '../src/index.css';
//import { openPopup, closePopup } from "./components/modal.js";
import Api from "./components/api.js";
import FormValidator from './components/FormValidator.js';
import { settings } from './components/utils.js';
import Card from "./components/card.js";
import Section from "./components/section.js";
import UserInfo from './components/userinfo.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';


const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
const jobInput = document.querySelector('input:nth-of-type(2)');
const buttonOpenAddCardPopup = document.querySelector('.profile__button');
const formAddImage = document.querySelector('.form_add-image');
const nameProfile = document.querySelector('.profile__info-cell-text');
const job = document.querySelector('.profile__info-text');
const formElement = document.querySelector('.form');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
const popupEditAvatar = document.querySelector('.popup_edit-avatar');
const formEditAvatar = document.querySelector('.form_edit-avatar')
const linkAvatar = document.querySelector('.form_avatar');
const closeButtons = document.querySelectorAll('.popup__close');
export const buttonElementCreate = document.querySelector('.form__button__create');
const buttonEditAvatarSave = document.querySelector('.form__button-edit-avatar');
export const buttonSaveProfile = document.querySelector('.form__button');
export const buttonSaveAvatar = document.querySelector('.form__button-edit-avatar');
const nameInputImage = formAddImage.querySelector('.form_name-image');
const linkInputImage = formAddImage.querySelector('input:nth-of-type(2)');
const elementList = document.querySelector('.elements');
const popupAddImage = document.querySelector('.popup_add_image');
const popupOpenCard = document.querySelector('.popup_open-card');
const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
const popupImage = popupOpenCard.querySelector('.popup__image');
const deleteButtom = document.querySelector('.element__button-trash');


const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23/",
  headers: {
    authorization: "70b0f800-c3d5-43c3-9a38-db0198e51959",
    "content-Type": "application/json",
  },
});



Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfoDefault.setUserInfo(userData);
    cardList.renderItems(cardsData.reverse());
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });

const createCard = (data) => {
  const card = new Card(
    data,
    '#templateElements',
    handleCardClick,
    handleLikeClick,
    handleDeleteCard,
    userInfoDefault._myId,
  );
  return card.generateCard();
};
let cardList = new Section(
  {
    items: [],
    renderer: createCard,
  },
  '.elements'
)

let userInfoDefault = new UserInfo({
  userNameSelector: ".profile__info-cell-text",
  userAboutSelector: ".profile__info-text",
  avatarSelector: ".profile__image",
})



const popupWithImage = new PopupWithImage(".popup_open-card");
popupWithImage.setEventListeners();

function handleCardClick(data) {
  popupImage.src = this._link;
  popupTextImage.textContent = this._name;
  popupWithImage.open(data);
}

function handleLikeClick() {
  this.buttonLike.dataset.id = this._id;
  if (this.buttonLike.classList.toggle('element__button_active')) {
    api.likePutServer(this.buttonLike.dataset.id = this._id)
      .then(() => { this.likesNumber.textContent++; })
  }

  else {
    api.likeDeleteServer(this.buttonLike.dataset.id = this._id)
      .then(() => { this.likesNumber.textContent--; })
  };
}

function handleDeleteCard() {
  const element = this.deleteButtom.closest('.element');
  api.deleteCardServer(element.dataset.id = this._id)
    .then(() => {
      element.remove();
    })
}



function editAvatarInfo(data) {
  addAvatar.renderLoading(true)
  api.avatarInfoPatch(data)
    .then((res) => {
      userInfoDefault.setUserInfo(res);
      addAvatar.close();
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      addAvatar.renderLoading(false);
    })
}

const addAvatar = new PopupWithForm(
  '.popup_edit-avatar',
  editAvatarInfo
)
addAvatar.setEventListeners();


// клик на аватар,открыть попап
buttonEditAvatar.addEventListener("click", () => {
  addAvatar.open();
})

function editProfileInfo(data) {
  editProfile.renderLoading(true);
  api.profileInfoPatch(data)
    .then((res) => {
      userInfoDefault.setUserInfo(res);
      editProfile.close();
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      editProfile.renderLoading(false);
    })
};

const editProfile = new PopupWithForm(
  '.popup_edit-profile',
  editProfileInfo
)
buttonOpenEditProfilePopup.addEventListener("click", () => {
  editProfile.open();
  editProfile.show(userInfoDefault.getUserInfo());
})

editProfile.setEventListeners();

function addCard(data) {
  addCardPopup.renderLoading(true);
  api.addCardServerPost(data)
    .then((res) => {
      cardList.setItem(createCard(res));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      addCardPopup.renderLoading(false);
    })
};
const addCardPopup = new PopupWithForm(
  '.popup_add_image'
  , addCard);
buttonOpenAddCardPopup.addEventListener('click', () => {
  addCardPopup.open();
})
addCardPopup.setEventListeners();

const validatorAvatarPopup = new FormValidator(settings, popupEditAvatar);
validatorAvatarPopup.enableValidation();
const validatorUserInfo = new FormValidator(settings, popupEdifProfile);
validatorUserInfo.enableValidation();
const validatorAddPopup = new FormValidator(settings, popupAddImage);
validatorAddPopup.enableValidation();






