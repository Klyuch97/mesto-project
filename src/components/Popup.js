export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
  }
  //функция открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClose);
  }
  //функция закрытия попапа
  close() {
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
    //по кнопке крестик закрыть попап
    this._closeButton.addEventListener('click', () => this.close());
    // по клику на overlay закрыть попап
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    })
  }
}
