export function createCard(nameInputImage, linkInputImage) {
  const templateElements = document.querySelector('#templateElements').content;
  const elements = templateElements.cloneNode(true);
  const elementText = elements.querySelector('.element__text');
  const elementLink = elements.querySelector('.element__image');
  elementText.textContent = nameInputImage;
  elementLink.src = linkInputImage;
  elementLink.alt = linkInputImage;

  elements.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
  })

  elements.querySelector('.element__image').addEventListener('click', function (evt) {
    evt.preventDefault();
    const popupOpenCard = document.querySelector('.popup_open-card');
    const popupTextImage = popupOpenCard.querySelector('.popup__text-image');
    const popupImage = popupOpenCard.querySelector('.popup__image');
    popupTextImage.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    openPopup(popupOpenCard);
  })

  const deleteButtom = elements.querySelector('.element__button-trash');
  deleteButtom.addEventListener('click', function () {
    const element = deleteButtom.closest('.element');
    element.remove();
  })

  return elements;
}

export function addCard(evt) {
  evt.preventDefault();
  const card = createCard(nameInputImage.value, linkInputImage.value);
  elementList.prepend(card);
  closePopup(popupAddImage);
}






