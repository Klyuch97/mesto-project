import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._cardLink = this._popup.querySelector(".popup__image");
    this._cardName = this._popup.querySelector(".popup__text-image");
    this.setEventListeners();
  }
  // функция открытия попапа с внесением данных
  open(data){
    super.open();
    this._cardName.textContent=data.name;
    this._cardLink.src = data.link;
    this._cardLink.alt=data.name;
  }
}
