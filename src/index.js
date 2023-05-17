import '../src/index.css';
import FormValidator from './components/FormValidator.js';
import Card from "./components/card.js";
import Section from "./components/section.js";
import UserInfo from './components/userinfo.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import {
  buttonOpenEditProfilePopup, popupEdifProfile, buttonOpenAddCardPopup, api,
  buttonEditAvatar, popupEditAvatar, popupAddImage, popupNameImage, popupImage, settings
} from './components/utils.js';

//получить ответ с данными пользователя и карточками и отобразить их
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
//экземпляр секции для отображения карточек
let cardList = new Section(
  {
    items: [],
    renderer: createCard,
  },
  '.elements'
)
//экземпляр для секции информации о юзере
let userInfoDefault = new UserInfo({
  userNameSelector: ".profile__info-cell-text",
  userAboutSelector: ".profile__info-text",
  avatarSelector: ".profile__image",
})

const popupWithImage = new PopupWithImage(".popup_open-card");
popupWithImage.setEventListeners();

function handleCardClick(data) {
  popupImage.src = this._link;
  popupNameImage.textContent = this._name;
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
  const element = this.deleteButton.closest('.element');
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



buttonEditAvatar.addEventListener("click", () => {
  addAvatar.open();
  validatorAvatarPopup.resetButton();
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
  editProfile.showInputValue(userInfoDefault.getUserInfo());
  validatorUserInfo.resetButton();
  editProfile.open();
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
  validatorAddPopup.resetButton();
  addCardPopup.open();
})
addCardPopup.setEventListeners();

const validatorAvatarPopup = new FormValidator(settings, popupEditAvatar);
validatorAvatarPopup.enableValidation();
const validatorUserInfo = new FormValidator(settings, popupEdifProfile);
validatorUserInfo.enableValidation();
const validatorAddPopup = new FormValidator(settings, popupAddImage);
validatorAddPopup.enableValidation();






