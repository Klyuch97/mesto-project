import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector(".popup__container");
    this._buttonSave = this._form.querySelector(".form__button");
  }


  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit',(evt)=>{
      evt.preventDefault();
      //this._formSubmit();
    })
  }



/* renderLoading(isLoading) {
   if (isLoading) {
     this._buttonSave.textContent = 'Сохранение';
   }
   else {
     this._buttonSave.textContent = 'Сохранить';
   }
 }*/

}
