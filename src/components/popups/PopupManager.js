'use strict';
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { formsValidationService } from '../../index.js';

const _popupCollection = new Map();

export const PopupManager = {
  initializePopup: (popupSelector, submitFunc) => initializePopup(popupSelector, submitFunc),
  getPopupBySelector: (popupSelector) => getPopupPresenterBySelector(popupSelector)
}

function initializePopup(popupSelector, submitFunc) {
  const popupNode = document.querySelector(popupSelector);
  let nodePresenter = null;
  if (popupNode.classList.contains('popup_type_edit')) {
    if (!submitFunc)
      throw new Error(`Cant init PopupWithForm without submit function!`);
    nodePresenter = new PopupWithForm(popupSelector, submitFunc,formsValidationService);
  }
  else if (popupNode.classList.contains('popup_type_view')) {

    nodePresenter = new PopupWithImage(popupSelector);
  }
  _popupCollection.set(popupSelector, nodePresenter)
}
function getPopupPresenterBySelector(popupSelector) {
  return _popupCollection.get(popupSelector);
}
