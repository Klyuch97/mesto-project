export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;

    this._inputLists = Array.from(form.querySelectorAll(this._settings.formNameTextSelector));
    this._submitButton = form.querySelector(this._settings.formButtonSelector);

    this._setEventListeners();
  }

  //добавить класс ошибки
  _showInputError(inputElement, errorMessage) {

    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = errorMessage;
    inputElement.classList.add(this._settings.formNameTextTypeErrorSelector);
    formError.classList.add(this._settings.formInputErrorActiveSelector);
  }
  //удалить класс ошибки
  _hideInputError(inputElement) {
    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = '';
    inputElement.classList.remove(this._settings.formNameTextTypeErrorSelector);
    formError.classList.remove(this._settings.formInputErrorActiveSelector);
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
    if (this._hasInvalidInput(this._inputLists)) {
      // сделай кнопку неактивной
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._settings.formButtonDisabledSelector);
    } else {
      // иначе сделай кнопку активной
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._settings.formButtonDisabledSelector);
    }
  }
  _setEventListeners() {
    this.toggleButtonState(this._inputLists);
    this._inputLists.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState(this._inputLists);
      });
    });
  };

  _hasInvalidInput() {
    return this._inputLists.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
}
