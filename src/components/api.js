import { createCard } from "./card.js"

function editAvatarInfo(result) {
  document.querySelector('.profile__info-cell-text').textContent = result.name
  document.querySelector('.profile__info-text').textContent = result.about
  document.querySelector('.profile__image').src = result.avatar
}

export const getAvatarInfo = () => {

  return fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
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
      const card = createCard(result.name, result.link,
        result._id, result.owner._id, result.likes);
      const elementList = document.querySelector('.elements');
      elementList.append(card)
    }))

    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

export function addCardServerPost(data) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-23/cards/', {
    method: 'POST',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    })
  })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false)
    });
}

export const avatarInfoPatch = (data) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.avatar,
    })
  })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false)
    });
}

export const profileInfoPatch = (data) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-23/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      renderLoading(false)
    });
}

export function renderLoading(isLoading) {
  const buttonSaveProfile = document.querySelector('.form__button');
  const buttonSaveAvatar = document.querySelector('.form__button-edit-avatar');
  if (isLoading) {
    isLoading = true;
    buttonSaveProfile.textContent = 'Сохранение';
    buttonSaveAvatar.textContent = 'Сохранение';
  }
  else {
    isLoading = false;
    buttonSaveProfile.textContent = 'Сохранить';
    buttonSaveAvatar.textContent = 'Сохранить';
  }
}


export const deleteCardServer = (id) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-23/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
    }
  });
}

export const likePutServer = (idCard) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-23/cards/likes/${idCard}`, {
    method: 'PUT',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
    }
  });
}

export const likeDeleteServer = (idCard) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-23/cards/likes/${idCard}`, {
    method: 'DELETE',
    headers: {
      authorization: '70b0f800-c3d5-43c3-9a38-db0198e51959',
    }
  });
}

