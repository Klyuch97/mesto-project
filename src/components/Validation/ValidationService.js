'use strict';
import FormValidator from './FormValidator.js';

export class ValidationService {
  constructor(settings) {
    this._settings = settings;
    this._validatorsCollection = {};
    this.enableValidation(settings);
  }

  getValidatorByForm(form) {
    return this._validatorsCollection[form.getAttribute('name')];
  }

  prevalidateForm(form) {
    this.getValidatorByForm(form).toggleButtonState();
  }

  enableValidation(config){
    const formList = Array.from(document.querySelectorAll(config.formSelector))//TODO: поиск только едит форм. вью формам нахрен валидация.
    //Вообще конфирму тоже, мб завести селектор "validatevleForm" ?
    formList.forEach((formElement) => {
      this._handleForm(formElement);
    });
  }

  _handleForm(formElement) {
    const validator = new FormValidator(this._settings, formElement)
    const formName = formElement.getAttribute('name');
    this._validatorsCollection[formName] = validator;
  }
}
