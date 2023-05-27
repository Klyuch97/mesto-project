'use strict';
import { webApi, factory, popupManager, profileInfo } from '../../../../index.js';
import { cardConfig } from '../../../utils/constants.js';

export class Card {
  constructor(cardTemplate, cardData, removeCardFunc, cardViewFunc) {
    this._userId = profileInfo.getId();
    this._cardViewModel = cardData;
    this._cardView = factory.createNodeFromTemplate(cardTemplate);
    this._canBeDeleted = this._cardViewModel.owner._id == this._userId;
    this._removeCardFunc = removeCardFunc;
    this._cardViewFunc = cardViewFunc;

    this._likeButton = this._cardView.querySelector(cardConfig.likeButtonSelector);
    this._likeCounter = this._cardView.querySelector(cardConfig.likeCounterSelector);
    this._image = this._cardView.querySelector(cardConfig.imageSelector);
    this._cardNameText = this._cardView.querySelector(cardConfig.cardNameTextSelector);
    this._removeButton = this._cardView.querySelector(cardConfig.removeButtonSelector);

    this._initializeCardView();
  }

  getCardView() {
    return this._cardView;
  }

  _initializeCardView() {
    let removeFunc = null;
    if (this._canBeDeleted) {
      this._removeButton.classList.remove('hidden-node');
    }

    this._cardNameText.textContent = this._cardViewModel.name;
    this._image.src = this._cardViewModel.link;
    this._image.alt = this._cardViewModel.name;

    this._configureLikesView(this._cardViewModel);
    this._setEventListeners();
  }
  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeCardFunc);
    this._likeButton.addEventListener('click', (eventArgs) => this._handleLikeButtonClick(eventArgs));
    this._image.addEventListener('click', () => { this._cardViewFunc(this._cardViewModel) });
  }
  _handleLikeButtonClick(evt) {
    const isLiked = this._cardViewModel.likes.some((profile) => {
      return profile._id == this._userId
    })
    if (isLiked) {
      webApi.deleteCardLike(this._cardViewModel._id)
        .then(res => {
          this._cardViewModel.likes = res.likes
        })
        .then(res => this._configureLikesView())
        .catch(err => console.log(`Ошибка: ${err}`));
    }
    else {
      webApi.setCardLike(this._cardViewModel._id)
        .then(res => {
          this._cardViewModel.likes = res.likes
        })
        .then(res => this._configureLikesView())
        .catch(err => console.log(`Ошибка: ${err}`));
    }
  }
  _configureLikesView() {
    const isLiked = this._cardViewModel.likes.some((profile) => {
      return profile._id == this._userId
    })

    if (isLiked) {
      this._likeButton.classList.add('element__button_active');
    }
    else {
      this._likeButton.classList.remove('element__button_active');
    }
    this._likeCounter.textContent = this._cardViewModel.likes.length;
  }
}

