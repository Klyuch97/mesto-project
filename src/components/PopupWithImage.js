import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
constructor(popupSelector){
  super(popupSelector);
  this._cardName= this._popup.querySelector(".popup__image");
  this._cardLink=this._popup.querySelector(".popup__text-image");
}
// функция открытия попапа с внесением данных
open(data){
  super.open();
  this._cardName.textContent=data.name;
  this._cardLink.scr= data.link;
}
}


