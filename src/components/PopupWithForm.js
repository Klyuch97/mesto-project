import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector(".popup__container");
    this._buttonSave = this._form.querySelector(".form__button");
    this._input = Array.from(this._form.querySelectorAll(".form__name-text"));

  }

  _getInputValues() {
    this.inputValue = {};
    this._input.forEach((input) => {
      this.inputValue[input.name] = input.value;
    });
    return this.inputValue;
  }


  /*renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSave.textContent = 'Сохранение';
    }
    else {
      this._buttonSave.textContent = 'Сохранить';
    }
  }*/

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
    })
  }

  close() {
    //this._form.reset();
    super.close();

  }
}
