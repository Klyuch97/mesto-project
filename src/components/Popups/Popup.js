'use strict';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._keyHandler = (evt) => this._handleEscClose(evt)
  }
  //функция открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._keyHandler);
  }
  //функция закрытия попапа
  close() {
    document.removeEventListener("keydown", this._keyHandler);
    this._popup.classList.remove('popup_opened');
  }
  //функция закрытия попапа на клавишу ESC
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  //слушатели
  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    })
  }
}
