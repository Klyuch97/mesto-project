export default class Card {
  constructor(data, selector, handleCardClick, handleLikeClick, handleDeleteCard, myId) {
    this.data = data,
      this._name = data.name,
      this._id = data._id;
    this._ownerId = data.owner._id;
    this._arrayLikes = data.likes;
    this._myId = myId;
    this._link = data.link,
      this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
  }
  // получить шаблон
  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  //сгенерировать карточку
  generateCard() {
    this.element = this._getElement();
    this._setEventListeners();
    this.elementText = this.element.querySelector('.element__text');
    this.elementLink = this.element.querySelector('.element__image');
    this.elementText.textContent = this._name;
    this.elementLink.src = this._link;
    this.elementLink.alt = this._link;
    this.likesNumber = this.element.querySelector('.element__likes-number');
    this.buttonLike = this.element.querySelector('.element__button');
    this.deleteButton = this.element.querySelector('.element__button-trash');
    //отображение лайков карточки
    if (this._arrayLikes.length === 0) {
      this.likesNumber.textContent = '0';
    }
    else { this.likesNumber.textContent = this._arrayLikes.length };

    for (let i = 0; i < this._arrayLikes.length; i++)
      //проверка моего лайка
      if (this._arrayLikes[i]._id === this._myId) {
        this.buttonLike.classList.add('element__button_active')
      }

    // скрыть отображение корзины с моим id
    if (this._myId !== this._ownerId) {
      this.deleteButton.style.display = "none";
    }

    return this.element;
  }

  //повесить слушатели открытие попапа, лайка карточки, удаления карточки
  _setEventListeners() {
    this.element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this.data);
    });
    this.element.querySelector('.element__button').addEventListener('click', () => {
      this._handleLikeClick(this._name, this._link);
    });
    this.element.querySelector('.element__button-trash').addEventListener('click', () => {
      this._handleDeleteCard(this._name, this._link);
    })
  }
}


