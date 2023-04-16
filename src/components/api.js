import { createCard } from "./card.js"

function editAvatarInfo(result) {
  document.querySelector('.profile__info-cell-text').textContent = result.name
  document.querySelector('.profile__info-text').textContent = result.about
  document.querySelector('.profile__image').src = result.avatar
}

export const getAvatarInfo = () => {
  fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(result => editAvatarInfo(result)
    )
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

export const getInitialCards = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-23/cards', {
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  })
    .then(result => result.forEach(function (result) {
      const card = createCard(result.name, result.link);
      const elementList = document.querySelector('.elements');
      elementList.append(card)
    }))
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

export const profileInfoPatch =()=> {
  return fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Никита',
      about: 'Physicist and Chemist'
    })
  });
}

