'use strict';
import Popup from "./Popup.js";
import { formsValidationService } from '../utils.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) {
    super(popupSelector);
    this._submitFormFunc = submitFunc;
    this._form = this._popup.querySelector(".form");
    this._buttonSave = this._form.querySelector(".form__button");
    this._input = Array.from(this._form.querySelectorAll(".form__name-text"));
    this._defaultSubmitText = this._buttonSave.textContent;
    formsValidationService.handleForm(this._form);
    this.setEventListeners();
  }

  //получить значения инпута
  _getInputValues() {
    const result = {};
    this._input.forEach((input) => {
      result[input.name] = input.value;
    });
    return result;
  }

  //наполнить инпут данными
  setInputValues(data) {
    if (data) {
      this._input.forEach((input) => {
        input.value = data[input.name];
      })
    }
  }

  //функция отображения текста во время загрузки на сервер
  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSave.textContent = 'Выполняется...';
    }
    else {
      this._buttonSave.textContent = this._defaultSubmitText;
    }
  }

  //навесить слушатели
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._submitFormFunc(this._getInputValues());
    })
  }

  open(data) {
    this.setInputValues(data);
    super.open();
    this.renderLoading(false);
    formsValidationService.prevalidateForm(this._form)
  }

  //функция сброса формы и закрытия попапа
  close() {
    this._form.reset();
    super.close();
  }
}
