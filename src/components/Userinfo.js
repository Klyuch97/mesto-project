export default class UserInfo {
  //Получил селекторы с имeнем,информацией и аватаром
  constructor({ userNameSelector, userAboutSelector, avatarSelector }) {
    this.userName = document.querySelector(userNameSelector);
    this.userAbout = document.querySelector(userAboutSelector);
    this.avatar = document.querySelector(avatarSelector);
  }
  // получить данные из профиля
  getUserInfo() {
    return {
      name: this.userName.textContent,
      about: this.userAbout.textContent,
      avatar: this.avatar.src,
    };
  }
  //добавить информацию в профиль из формы вместе с моим id
  setUserInfo(data) {
    this._myId = data._id;
    this.userName.textContent = data.name;
    this.userAbout.textContent = data.about;
    this.avatar.src = data.avatar;
  };
  //вернуть мой id
  myId() {
    return this._myId;
  }
}

