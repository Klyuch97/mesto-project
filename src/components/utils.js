'use strict';

import { Api } from './api.js';
import { ValidationService } from './Validation/ValidationService.js';
import { UserInfo } from './UserInfo.js';
import { apiConfig, validatorSettings, userInfoSettings, cardSectionConfig } from './constants.js';
import { CardSection } from "./Sections/CardSection/CardSection.js";
import { PopupManager } from './Popups/PopupManager.js';


class nodeFactory {
  constructor() { }
  createNodeFromTemplate(id) {
    return this._getTemplateByID(id).firstElementChild.cloneNode(true);
  }

  _getTemplateByID(id) {
    return document.querySelector(id).content;
  }
};




export const popupManagerSingleton = PopupManager;
export const cardSectionSingleton = CardSection;
CardSection.setConfig(cardSectionConfig);
export const profileInfo = new UserInfo(userInfoSettings);
export const formsValidationService = new ValidationService(validatorSettings);
export const webApi = new Api(apiConfig);
export const factory = new nodeFactory();
