'use strict';
import FormValidator from './FormValidator.js';

export class ValidationService {
  constructor(settings) {
    this._settings = settings;
    this._validatorsCollection = new Map();
  }

  handleForm(form) {///TODO: сделать коллекцию в вм по formid. или хз, мб получать и хранить хэш форм, как ключ, если так можно.
    this._validatorsCollection.set(form, new FormValidator(this._settings, form))
  }
  getValidatorByForm(form) {//
    return this._validatorsCollection.get(form);
  }
  prevalidateForm(form) {
    console.log(this._validatorsCollection.get(form))
    this._validatorsCollection.get(form).toggleButtonState();
  }
}
