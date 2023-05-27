export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;

    this._inputList = Array.from(form.querySelectorAll(this._settings.formNameText));
    this._submitButton = form.querySelector(this._settings.formButton);;

    this._setEventListeners();
  }

  //добавить класс ошибки
  _showInputError(inputElement, errorMessage) {

    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = errorMessage;
    inputElement.classList.add(this._settings.formNameTextTypeError);
    formError.classList.add(this._settings.formInputErrorActive);
  }
  //удалить класс ошибки
  _hideInputError(inputElement) {
    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = '';
    inputElement.classList.remove(this._settings.formNameTextTypeError);
    formError.classList.remove(this._settings.formInputErrorActive);
  }

  _isValid(inputElement) {
    if (inputElement.validity.patternMismatch) {
      // данные атрибута доступны у элемента инпута через ключевое слово dataset.

      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  };
  //отображение кнопки сабмита
  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      // сделай кнопку неактивной
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._settings.formButtonDisabled);
    } else {
      // иначе сделай кнопку активной
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._settings.formButtonDisabled);
    }
  }
  _setEventListeners() {
    this._buttonElement = this._form.querySelector(this._settings.formButton);
    this.toggleButtonState(this._inputList);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState(this._inputList);
      });
    });
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
// отключить кнопку сабмит
  resetButton(){
    this._submitButton.classList.add(this._settings.formButtonDisabled);
  }
}
