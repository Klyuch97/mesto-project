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

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
    .then(this.checkResult)
  }
 async getUserInfo() {
    const res= await fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    return res.json();
  }

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
  deleteCardServer(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }

  likePutServer(idCard) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: 'PUT',
      headers: this.headers,
    })
  }
  likeDeleteServer(idCard) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
}




