'use strict';
import { Card } from './Cards/Card.js';
import { webApi, factory, popupManagerSingleton as popupManager, profileInfo } from '../../utils/utils.js';
import { Section } from '../Section.js';

const _viewModel = new Map();//TODO: Дальше нужно вынести в отдельный класс, сделать базовую вм, унаследовать от базы вм для карт,
  //но сейчас пока тут только коллекция, так что пока хз. Сделать задел для иока кароч
let baseSection = null;
let _removeId = null;

let _deleteConfirmationSelector = null;
let _cardViewSelector = null;
let _cardTemplate = null;

const viewCardFunc = (data) => { popupManager.getPopupBySelector(_cardViewSelector).open(data); }

//TODO: синглтон тут может начать мешать, если появится несколько вьюх с карточками
export const CardSection = {
  initialize: (view, cards) => initializeCardSection(view, cards),
  createCard: (cardData) => addCard(cardData),
  remove: (cardId) => removeCard(cardId),
  setConfig: (config)=> setCardSectionConfig(config)
}

function setCardSectionConfig(config) {
  _deleteConfirmationSelector = config.deleteConfirmationSelector;
  _cardViewSelector = config.cardViewSelector;
  _cardTemplate = config.cardTemplate;
}

function initializeCardSection(view, cards) {
  baseSection = new Section({ cards, addCard }, view)

  popupManager.initializePopup(_deleteConfirmationSelector, (evt) => _handleRemoveSubmit(evt))
  popupManager.initializePopup(_cardViewSelector)
  cards.forEach(record => addCard(record));
}

function addCard(cardData) {
  if (cardData && !_viewModel.has(cardData._id)) {
    const canBeDeleted = cardData.owner._id == profileInfo.getId();

    const newCard = new Card(_cardTemplate, cardData, () => _handleRemoveButtonClick(cardData._id), viewCardFunc, profileInfo.getId())
    _viewModel.set(cardData._id, newCard);
    baseSection.addItem(newCard.getCardView());
  }
}

function removeCard(id) {
  const card = _viewModel.get(id);
  return webApi.deleteCard(id).then(res => card.getCardView().remove())
    .then(res => _viewModel.delete(id))
    .catch(err => console.log(`Ошибка: ${err}`));
}

function _handleRemoveButtonClick(cardId) {
  _removeId = cardId
  popupManager.getPopupBySelector(_deleteConfirmationSelector).open();
}

function _handleRemoveSubmit(data) {
  removeCard(_removeId)
    .then(() => { popupManager.getPopupBySelector(_deleteConfirmationSelector).close(); });
}
