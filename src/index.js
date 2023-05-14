import '../src/index.css';
import { openPopup, closePopup } from "./components/modal.js";
import { enableValidation, settings } from "./components/validate.js";
import Api from "./components/api.js";
import Card from "./components/card.js";
import Section from "./components/section.js";
import UserInfo from './components/userinfo.js';


const buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');
const popupEdifProfile = document.querySelector('.popup_edit-profile');
const nameInput = document.querySelector('.form__name-text');
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

/*function editAvatarInfo(avatar, name, about) {
  document.querySelector('.profile__info-cell-text').textContent = name
  document.querySelector('.profile__info-text').textContent = about
  document.querySelector('.profile__image').src = avatar
}

function toggleButton(settings, button) {
  button.disabled = true;
  button.classList.add(settings.formButtonDisabled);
}

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEdifProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = job.textContent;
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formAddImage.reset();
  openPopup(popupAddImage);
  toggleButton(settings, buttonElementCreate);
});
buttonEditAvatar.addEventListener('click', function () {
  formEditAvatar.reset();
  toggleButton(settings, buttonEditAvatarSave);
  openPopup(popupEditAvatar);
});*/

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});


//formAddImage.addEventListener('submit', addCard);

/*function editAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSaveAvatar);
  avatarInfoPatch({ avatar: linkAvatar.value })
    .then(data => {
      const avatar = document.querySelector('.profile__image');
      const linkAvatarValue = linkAvatar.value
      avatar.src = linkAvatarValue;
      closePopup(popupEditAvatar);
    })
    //Здесь вносим изменения в DOM, например меняем текст профиля и закрываем модальное окно.
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, buttonSaveAvatar);
    })
}

formEditAvatar.addEventListener('submit', editAvatar);

export function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Сохранение';
  }
  else {
    button.textContent = 'Сохранить';
    buttonElementCreate.textContent = 'Создать';
  }
}

enableValidation(settings);*/

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23/",
  headers: {
    authorization: "70b0f800-c3d5-43c3-9a38-db0198e51959",
    "content-Type": "application/json",
  },
});

export let myId = null//Объявляем глобально переменную c id, что мы могли использовать её, например в card.js.
export let myAbout = null;
export let myAvatar = null;
export let myName = null;

function handleCardClick() {
  popupImage.src = this._link;
  popupTextImage.textContent = this._name;
  openPopup(popupOpenCard);
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

  /*if (event.target.classList.toggle('element__button_active')) {
    likePutServer(buttonLike.dataset.id = id)
      .then(() => { event.target.nextElementSibling.textContent++; })
  }
  else {
    likeDeleteServer(buttonLike.dataset.id = id)
      .then(() => { event.target.nextElementSibling.textContent--; })
  };*/
}


let UserInfoDefault = new UserInfo({
  userNameSelector: ".profile__info-cell-text",
  userAboutSelector: ".profile__info-text",
  avatarSelector: ".profile__image",
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    let myId = userData._id;
    /*let myAbout = userData.about;
    let myAvatar = userData.avatar;
    let myName = userData.name;
    editAvatarInfo(myAvatar, myName, myAbout);*/
    UserInfoDefault.setUserInfo(userData);
    const createCard = (data) => {
      const card = new Card(
        data,
        '#templateElements',
        handleCardClick,
        handleLikeClick,
        myId,
      );
      return card.generateCard();
    }

    let cardList = new Section(
      {
        items: [],
        renderer: createCard,
      },
      '.elements'
    );
    //console.log(myId);
    cardList.renderItems(cardsData);
    /* cardsData.forEach(function (result) {
       const card = createCard(result.name, result.link,
         result._id, result.owner._id, result.likes, myId);
       const elementList = document.querySelector('s');
       elementList.append(card)
     })*/
  })
/*.catch((err) => {
  console.log(err); // выводим ошибку в консоль
});*/


/*export function submitEditProfileForm(evt) {
  evt.preventDefault();
  const popupEdifProfile = document.querySelector('.popup_edit-profile');
  const buttonSaveProfile = document.querySelector('.form__button');
  const nameInput = document.querySelector('.form__name-text');
  const jobInput = document.querySelector('input:nth-of-type(2)');
  const nameProfile = document.querySelector('.profile__info-cell-text');
  const job = document.querySelector('.profile__info-text');
  renderLoading(true, buttonSaveProfile);
  profileInfoPatch({ name: nameInput.value, about: jobInput.value })
    .then(data => {
      nameProfile.textContent = nameInput.value;
      job.textContent = jobInput.value;
      closePopup(popupEdifProfile);
    })
    //Здесь вносим изменения в DOM, например меняем текст профиля и закрываем модальное окно.
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, buttonSaveProfile);
    })
}

formElement.addEventListener('submit', submitEditProfileForm);

/*export function addCard(evt) {
  evt.preventDefault();
  renderLoading(true, buttonElementCreate);
  addCardServerPost({ name: nameInputImage.value, link: linkInputImage.value })
    .then(data => {
      const card = createCard(data.name, data.link,
        data._id, data.owner._id, data.likes, data.owner._id);
      elementList.prepend(card);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false, buttonElementCreate)
      closePopup(popupAddImage);
    })
}*/




