import '../src/index.css';
import { PopupWithForm } from './components/Popups/PopupWithForm';
//import { webApi, profileInfo, cardSectionSingleton, formsValidationService, popupManagerSingleton as popupManager } from './components/utils/utils.js';

import { Api } from './components/api.js';
import { ValidationService } from './components/Validation/ValidationService.js';
import { UserInfo } from './components/UserInfo.js';
import { apiConfig, validatorSettings, userInfoSettings, cardSectionConfig, indexPageConfig } from './components/utils/constants.js';
import { CardSection } from "./components/Sections/CardSection/CardSection.js";
import { PopupManager } from './components/Popups/PopupManager.js';
import { NodeFactory } from './components/utils/utils.js';


export const popupManagerSingleton = PopupManager;
export const cardSectionSingleton = CardSection;
CardSection.setConfig(cardSectionConfig);
export const profileInfo = new UserInfo(userInfoSettings);
export const formsValidationService = new ValidationService(validatorSettings);
export const webApi = new Api(apiConfig);
export const factory = new NodeFactory();

class IndexPagePresenter {
  constructor() {

    //profile
    this._buttonOpenEditProfilePopup = document.querySelector('.profile__info-cell-button');

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
    popupManagerSingleton.initializePopup(indexPageConfig.editProfileSelector, (data) => this._submitEditProfileForm(data));
    popupManagerSingleton.initializePopup(indexPageConfig.addImageSelector, (data) => this._addCard(data));
    popupManagerSingleton.initializePopup(indexPageConfig.editAvatarSelector, (data) => this._editAvatar(data));

    this._buttonOpenEditProfilePopup.addEventListener('click', () => {
      popupManagerSingleton.getPopupBySelector(indexPageConfig.editProfileSelector).open(profileInfo.getUserInfo())
    });
    this._buttonAddCard.addEventListener('click', () => {
      popupManagerSingleton.getPopupBySelector(indexPageConfig.addImageSelector).open()
    });
    this._buttonEditAvatar.addEventListener('click', () => {
      popupManagerSingleton.getPopupBySelector(indexPageConfig.editAvatarSelector).open(profileInfo.getUserInfo())
    });
  }
  _editAvatar(data) {
    webApi.updateAvatarInfo({ avatar: data.avatar })
      .then(data => {
        profileInfo.setUserInfo(data);
      })
      .then(() => {
        popupManagerSingleton.getPopupBySelector(indexPageConfig.editAvatarSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        popupManagerSingleton.getPopupBySelector(indexPageConfig.editAvatarSelector).renderLoading(false);
      })
  }

  _submitEditProfileForm(data) {
    webApi.updateProfileInfo({ name: data.name, about: data.about })
      .then(data => {
        profileInfo.setUserInfo(data);
      })
      .then(() => {
        popupManagerSingleton.getPopupBySelector(indexPageConfig.editProfileSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {

        popupManagerSingleton.getPopupBySelector(indexPageConfig.editProfileSelector).renderLoading(false);
      })
  }
  _addCard(data) {
    webApi.addCard({ name: data.cardName, link: data.cardUri })
      .then(data => cardSectionSingleton.createCard(data))
      .then(() => {
        popupManagerSingleton.getPopupBySelector(indexPageConfig.addImageSelector).close();
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {

        popupManagerSingleton.getPopupBySelector(indexPageConfig.addImageSelector).renderLoading(false);
      })
  }
}


const IndexPage = new IndexPagePresenter();
