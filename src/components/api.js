export default class Api {
  constructor(options) {
    // тело конструктора
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  //запрос на получение данных карточки
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(this.checkResult)
  }
  //запрос на получение данных пользователя
  async getUserInfo() {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    return res.json();
  }
  //отправить данные новой карточки
  async addCardServerPost(data) {
    const res = await fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    return res.json();
  }
  //отправить данные нового аватара пользователя
  async avatarInfoPatch(data) {
    const response = await fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    return response.json();
  }
  //отправить данные имени и о себе пользователя
  async profileInfoPatch(data) {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    return res.json();
  }
  // запрос удалить карточку
  deleteCardServer(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
  // запрос поставить лайк
  likePutServer(idCard) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: 'PUT',
      headers: this.headers,
    })
  }
  //запрос удалить лайк
  likeDeleteServer(idCard) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
}




