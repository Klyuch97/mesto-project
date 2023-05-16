export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._popupForm = settings.form;
    this._formNameText = settings.formNameText;
    this._formButton = settings.formButton;
    this._formNameTextTypeError = settings.formNameTextTypeError;
    this._formInputErrorActive = settings.formInputErrorActive;
    this._formButtonDisabled = settings.formButtonDisabled;
    this._buttonSubmit = this._form.querySelector(this._formButton);
  }
  _showInputError(inputElement, errorMessage) {

    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = errorMessage;
    inputElement.classList.add(this._formNameTextTypeError);
    formError.classList.add(this._formInputErrorActive);
  }

  _hideInputError(inputElement) {
    const formError = this._form.querySelector(`.${inputElement.id}-error`);
    formError.textContent = '';
    inputElement.classList.remove(this._formNameTextTypeError);
    formError.classList.remove(this._formInputErrorActive);
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
      this._showInputError(inputElement,inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      this._buttonSubmit.disabled = true;
      this._buttonSubmit.classList.add(this._formButtonDisabled);
    } else {
      // иначе сделай кнопку активной
      this._buttonSubmit.disabled = false;
      this._buttonSubmit.classList.remove(this._formButtonDisabled);
    }
  }
  _setEventListeners() {
    // Находим все поля внутри формы,
    this._inputList = Array.from(this._form.querySelectorAll(this._formNameText));

    this._buttonElement = this._form.querySelector(this._formButton);
    this._toggleButtonState(this._inputList);
    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList);
      });
    });
  };

  _hasInvalidInput(inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  }

  enableValidation() {
   this._setEventListeners();
  };
}
