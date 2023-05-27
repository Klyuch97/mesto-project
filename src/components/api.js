export class Api {
  constructor(options) {
    this._config = options;
  }


  _request(url, options) {
    return fetch(url, options).then(this._checkResult);
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return this._request(`${this._config.baseUrl}/users/me`, { headers: this._config.headers });
  }

  getInitialCards() {
    return this._request(`${this._config.baseUrl}/cards`, { headers: this._config.headers });
  }

  addCard(data) {
    return this._request(`${this._config.baseUrl}/cards/`, {
      method: 'POST', headers: this._config.headers, body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    });
  }

  updateAvatarInfo(data) {
    return this._request(`${this._config.baseUrl}/users/me/avatar`, {
      method: 'PATCH', headers: this._config.headers, body: JSON.stringify({
        avatar: data.avatar
      })
    });
  }

  updateProfileInfo(data) {
    return this._request(`${this._config.baseUrl}/users/me`, {
      method: 'PATCH', headers: this._config.headers, body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    });
  }

  deleteCard(id) {
    return this._request(`${this._config.baseUrl}/cards/${id}`, { method: 'DELETE', headers: this._config.headers });
  }

  setCardLike(idCard) {
    return this._request(`${this._config.baseUrl}/cards/likes/${idCard}`, { method: 'PUT', headers: this._config.headers });
  }

  deleteCardLike(idCard) {
    return this._request(`${this._config.baseUrl}/cards/likes/${idCard}`, { method: 'DELETE', headers: this._config.headers });
  }
}
