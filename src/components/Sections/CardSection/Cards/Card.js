'use strict';
import { cardConfig } from '../../../utils/constants.js';



export class Card {
  constructor(cardInitialConfig){
    this._userId = cardInitialConfig.utils.profile.getId();
    this._cardViewModel = cardInitialConfig.cardData;
    this._cardView = cardInitialConfig.utils.nodeFactory.createNodeFromTemplate(cardInitialConfig.cardTemplate);
    this._canBeDeleted = this._cardViewModel.owner._id == this._userId;
    this._removeCardFunc = cardInitialConfig.functions.removeCardFunc;
    this._cardViewFunc = cardInitialConfig.functions.cardViewFunc;

    this._likeButton = this._cardView.querySelector(cardConfig.likeButtonSelector);
    this._likeCounter = this._cardView.querySelector(cardConfig.likeCounterSelector);
    this._image = this._cardView.querySelector(cardConfig.imageSelector);
    this._cardNameText = this._cardView.querySelector(cardConfig.cardNameTextSelector);
    this._removeButton = this._cardView.querySelector(cardConfig.removeButtonSelector);

    this._webApi = cardInitialConfig.utils.api;

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
      this._webApi.deleteCardLike(this._cardViewModel._id)
        .then(res => {
          this._cardViewModel.likes = res.likes
        })
        .then(res => this._configureLikesView())
        .catch(err => console.log(`Ошибка: ${err}`));
    }
    else {
      this._webApi.setCardLike(this._cardViewModel._id)
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

