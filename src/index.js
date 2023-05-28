import '../src/index.css';

import { PopupWithForm } from './components/Popups/PopupWithForm';
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

const _buttonOpenEditProfilePopup = document.querySelector(indexPageConfig.buttonEditProfileSelector);
const _buttonAddCard = document.querySelector(indexPageConfig.buttonAddCardSelector);
const _buttonEditAvatar = document.querySelector(indexPageConfig.buttonEditAvatarSelector);



_initializePage();


function _initializePage() {
  _initializeData();
  _initializeCommands();
}

function _initializeData() {
  Promise.all([webApi.getUserInfo(), webApi.getInitialCards()])
    .then(([userData, cardsData]) => {
      profileInfo.setUserInfo(userData);
      cardSectionSingleton.initialize('.elements', cardsData)
    })
    .catch((err) => {
      console.log(err);
    });
}
function _initializeCommands() {
  popupManagerSingleton.initializePopup(indexPageConfig.editProfileSelector, (data) => _submitEditProfileForm(data));
  popupManagerSingleton.initializePopup(indexPageConfig.addImageSelector, (data) => _addCard(data));
  popupManagerSingleton.initializePopup(indexPageConfig.editAvatarSelector, (data) => _editAvatar(data));

  _buttonOpenEditProfilePopup.addEventListener('click', () => {
    popupManagerSingleton.getPopupBySelector(indexPageConfig.editProfileSelector).open(profileInfo.getUserInfo())
  });
  _buttonAddCard.addEventListener('click', () => {
    popupManagerSingleton.getPopupBySelector(indexPageConfig.addImageSelector).open()
  });
  _buttonEditAvatar.addEventListener('click', () => {
    popupManagerSingleton.getPopupBySelector(indexPageConfig.editAvatarSelector).open(profileInfo.getUserInfo())
  });
}

function _editAvatar(data) {
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
function _submitEditProfileForm(data) {
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
function _addCard(data) {
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
