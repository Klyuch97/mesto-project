import '../src/index.css';
import { webApi, profileInfo, cardSectionSingleton, formsValidationService, popupManagerSingleton as popupManager } from './components/utils.js';

class IndexPagePresenter {
  constructor() {

    //profile
    this._buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');

    //popups
    this._editProfileSelector = '.popup_edit-profile';
    this._addImageSelector = '.popup_add_image';
    this._editAvatarSelector = '.popup_edit-avatar';

    ///
    this._buttonAddCard = document.querySelector('.profile__button');
    this._buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
    this._buttonEditAvatarSave = document.querySelector('.form__button-edit-avatar');
    this._elementList = document.querySelector('.elements');

    this._cardSection = null;
    this._initializePage();
  }

  _initializePage() {
    this._initializeData();
    this._initializeCommands();
  }

  _initializeData() {
    Promise.all([webApi.getUserInfo(), webApi.getInitialCards()])
      .then(([userData, cardsData]) => {
        profileInfo.setUserInfo(userData);
        cardSectionSingleton.initialize('.elements', cardsData)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  _initializeCommands() {
    popupManager.initializePopup(this._editProfileSelector, (data) => this._submitEditProfileForm(data));
    popupManager.initializePopup(this._addImageSelector, (data) => this._addCard(data));
    popupManager.initializePopup(this._editAvatarSelector, (data) => this._editAvatar(data));

    this._buttonOpenEditProfilePopup.addEventListener('click', () => {
      popupManager.getPopupBySelector(this._editProfileSelector).open(profileInfo.getUserInfo())
    });
    this._buttonAddCard.addEventListener('click', () => {
      popupManager.getPopupBySelector(this._addImageSelector).open()
    });
    this._buttonEditAvatar.addEventListener('click', () => {
      popupManager.getPopupBySelector(this._editAvatarSelector).open(profileInfo.getUserInfo())
    });
  }
  _editAvatar(data) {
    webApi.updateAvatarInfo({ avatar: data.avatar })
      .then(data => {
        profileInfo.setUserInfo(data);
      })
      .then(() => {
        popupManager.getPopupBySelector(this._editAvatarSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        popupManager.getPopupBySelector(this._editAvatarSelector).renderLoading(false);
      })
  }

  _submitEditProfileForm(data) {
    webApi.updateProfileInfo({ name: data.name, about: data.about })
      .then(data => {
        profileInfo.setUserInfo(data);
      })
      .then(() => {
        popupManager.getPopupBySelector(this._editProfileSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {

        popupManager.getPopupBySelector(this._editProfileSelector).renderLoading(false);
      })
  }
  _addCard(data) {
    webApi.addCard({ name: data.cardName, link: data.cardUri })
      .then(data => cardSectionSingleton.createCard(data))
      .then(() => {
        popupManager.getPopupBySelector(this._addImageSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {

        popupManager.getPopupBySelector(this._addImageSelector).renderLoading(false);
      })
  }
}


const IndexPage = new IndexPagePresenter();





